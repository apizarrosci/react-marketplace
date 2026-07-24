import type { Product } from "../../types/Product";

interface ProductCardProps {
    product: Product
}

function ProductCard ({product}: ProductCardProps) {
  return (
    <>
        <img src = {product.image[0]} alt="" />
        <h2>{product.name}</h2>
        <p>{product.category}</p>
        <p>{product.price}</p>
        <p>{product.rating}</p>
        <button>[ Ver producto ]</button>
    </>
  )
}

export default ProductCard