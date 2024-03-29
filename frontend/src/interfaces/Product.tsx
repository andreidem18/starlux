// Generated by https://quicktype.io
import { Category } from '.';

export interface Product {
    id:          number;
    name:        string;
    description: string;
    price:       string;
    category:    Category;
    images:      Image[];
}

export interface Image {
    id:  number;
    url: string;
}
