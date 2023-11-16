import { Product } from '../../interfaces';
import { ProductItem } from '..';
import './products-list.styles.css';

interface ProductsListProps {
    products: Product[]
}

const ProductsList = ({ products }: ProductsListProps) => {
    return (
        <div className="products-list">

            {products.map(product => <ProductItem key={product.id} product={product} />)}
            
        </div>
    );
};

export default ProductsList;
