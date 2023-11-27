import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import { Cart } from '../interfaces/Cart';
import axios from '../utils/axios'
import { Product } from '../interfaces';
import { useAppDispatch } from '../redux/hooks';
import { setNotification } from '../redux/slices/app.slice';
import { useNavigate } from 'react-router-dom';

export const GET_CART_KEY = 'GetCart'

export const useGetCart = () => {
    const getCartQuery = useQuery({
        queryKey: [GET_CART_KEY],
        queryFn: async () => {
            const res = await axios.get<Cart[]>('/cart/');
            return res.data
        },
    });
    return getCartQuery;
}

export const useDeleteFromCart = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (id: number) => {
            await axios.delete(`/cart/${id}/remove_item/`)
            return id;
        },
        onSuccess: id => queryClient.setQueryData([GET_CART_KEY], 
        (products: Product[]) => products.filter(p => p.id !== id)),
    });
}

export const purchaseCart = () => {
    return axios.post('/cart/buy/')
}

export const usePurchaseCart = () => {
    const queryClient = useQueryClient();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    return useMutation({
        mutationFn: purchaseCart,
        onSuccess: () => {
            queryClient.setQueryData([GET_CART_KEY], () => []);
            dispatch(setNotification('Cart purchased succesfully'));
            navigate('/orders');
        }
    })
}

export interface AddToCartBody {
    product: number;
    quantity: number;
}

export const addToCart = async (body: AddToCartBody) => {
    const res = await axios.post<Cart>('/products/add_to_cart/', body);
    return res.data;
}

export const useAddToCart = () => {
    const queryClient = useQueryClient();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    return useMutation({
        mutationFn: addToCart,
        onSuccess: () => {
            queryClient.setQueryData([GET_CART_KEY], () => []);
            dispatch(setNotification("Product added to cart"));
            navigate('/cart');
        }
    })
}