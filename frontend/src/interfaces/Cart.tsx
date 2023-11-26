import { Product } from '.';

export interface Cart {
    id:       number;
    quantity: number;
    product:  Product;
}
