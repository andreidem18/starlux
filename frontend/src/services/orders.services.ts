import { useQuery } from '@tanstack/react-query';
import { Order } from '../interfaces';
import axios from '../utils/axios'

export const GET_ORDERS_KEY = 'GetAllOrders';

export const getAllOrders = async () => {
    const res = await axios.get<Order[]>('/orders/');
    return res.data;
}

export const useGetAllOrders = () => {
    return useQuery({
        queryKey: [GET_ORDERS_KEY],
        queryFn: getAllOrders,
    })
}
