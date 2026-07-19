import type { ProductSpecification } from "./ProductSpecification";

export interface Product{
    id: number;
    name: string;
    price: number;
    description: string;
    category: string;
    image: string;
    stock: number;
    rating: number;
    reviews: number;
    specification: ProductSpecification;
}
