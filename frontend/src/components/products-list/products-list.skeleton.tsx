import ProductItemSkeleton from '../product-item/product-item.skeleton'
import './products-list.styles.css';


const ProductsListSkeleton = () => {


    return (
        <div className='products-list'>
            {[1, 2, 3, 4].map((n) => (
                <ProductItemSkeleton key={n} />
            ))}
        </div>
    )
}

export default ProductsListSkeleton