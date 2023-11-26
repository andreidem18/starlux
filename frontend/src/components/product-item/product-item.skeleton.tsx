import Skeleton from 'react-loading-skeleton'
import './product-item.styles.css'

const ProductItemSkeleton = () => {
    return (
        <div className='product'>
            <div className="product-image">
                <Skeleton style={{height: 150}} />
            </div>
            <h5><Skeleton style={{height: 25}}/></h5>
            <span className="price">
                <Skeleton style={{width: 70}} />
            </span>
        </div>
    )
}

export default ProductItemSkeleton