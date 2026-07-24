import type { ProductSpecifications } from "./ProductSpecifications";
import type { Category } from "./Category";

export interface Product{
    id: number;
    name: string;
    price: number;
    description: string;
    category: Category;
    image: string[];
    stock: number;
    rating: number;
    reviews: number;
    specifications: ProductSpecifications;
}
