import { Product } from '../../interfaces';
import { ProductItem, ProductsListSkeleton } from '..';
import './products-list.styles.css';

interface ProductsListProps {
    products?: Product[],
    isLoading: boolean
}

const ProductsList = ({ products, isLoading }: ProductsListProps) => {

    if (isLoading) return <ProductsListSkeleton />
    if (!products?.length) return (
        <div className="not-found">
            <i className="material-icons-sharp">youtube_searched_for</i>
            <span className='message'>Not products found</span>
        </div>
    )
    return (<>
        <div className="products-list">

            {products.map(product => <ProductItem key={product.id} product={product} />)}

        </div>
    </>)
}

export default ProductsList;
