import { Category, Product } from '../interfaces';
import axios from '../utils/axios'
import { useQuery } from '@tanstack/react-query';

interface Queries {
    name?: string;
    categoryId?: number | null;
}

interface GetAllProductsQueryKey {
    queryKey: [string, { filters: Queries }?]
}

export const getAllProducts = async (
    { queryKey: [, filters] }: GetAllProductsQueryKey
): Promise<Product[]> => {
    const { name, categoryId } = filters?.filters || {}
    const params = new URLSearchParams();
    if (name) params.append('name__icontains', name);
    if (categoryId) params.append('category', `${categoryId}`);
    const res = await axios.get<Product[]>('/products/', { params });
    return res.data;
}

export const useGetAllProducts = (queries?: Queries) => {
    return useQuery({
        queryKey: ['AllProducts', { filters: queries || {}, }],
        queryFn: getAllProducts,
    })
}

interface GetProductByIdQueryKey {
    queryKey: [string, { id: number }]
}

export const getProductById = async (
    { queryKey: [, { id }] }: GetProductByIdQueryKey
): Promise<Product> => {
    const res = await axios.get<Product>(`/products/${id}/`);
    return res.data;
}

export const useGetProductById = (id: number) => {
    return useQuery({ 
        queryKey: ['ProductById', { id }], 
        queryFn: getProductById 
    });
}

export const getAllCategories = async (): Promise<Category[]> => {
    const res = await axios.get<Product[]>('/categories/');
    return res.data;
}

export const useGetAllCategories = () => {
    return useQuery({ queryKey: ['categories'], queryFn: getAllCategories });
}
