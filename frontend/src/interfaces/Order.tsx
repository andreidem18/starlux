// Generated by https://quicktype.io

import { Product } from '.';

export interface Order {
    id:            number;
    quantity:      number;
    purchase_date: string;
    product:       Product;
}
