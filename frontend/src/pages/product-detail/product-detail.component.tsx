import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { InputQuantity, ProductsList, Slider } from '../../components';
import './product-detail.styles.css';
import { useAddToCart, useGetAllProducts, useGetProductById } from '../../services';
import { useAppDispatch } from '../../redux/hooks';
import { setIsLoading } from '../../redux/slices/app.slice';
import { spinner } from '../../assets/images';

const ProductDetail = () => {

    const { id } = useParams();
    const dispatch = useAppDispatch();
    const { isPending: productLoading, data: product } = useGetProductById(+(id || 0));
    const { data: productsList, isPending: isProductsListLoading } = useGetAllProducts({
        categoryId: product?.category.id
    });
    const { mutate: addToCart, isPending: addToCartPending } = useAddToCart();
    const [ quantity, setQuantity ] = useState(1);

    useEffect(() => {
        dispatch(setIsLoading(productLoading))
    }, [ productLoading, dispatch ]);

    if (productLoading || !product) return 'Is loading...';


    return (
        <section className='product-detail'>
            <div className="container">
                <div className="product-flex">
                    <div className="col">
                        <Slider 
                            slides={product.images.map(image => (
                                <img src={image.url} key={image.id} className='product-image' />
                            ))}
                        />
                    </div>
                    <div className="col">
                        <h1 className="product-name">{product.name}</h1>
                        <span className="price">${product.price}</span>

                        <div className="product-options">
                            <div>
                                <InputQuantity quantity={quantity} setQuantity={setQuantity} />
                                <button 
                                    className='link-squared' 
                                    onClick={() => addToCart({product: product.id, quantity })}
                                >
                                    {addToCartPending ? <img src={spinner} /> : 'Add to cart'}
                                </button>
                            </div>
                            <div>
                                <p className="product-description">{product.description}</p>
                            </div>
                        </div>
                    </div>
                </div>

                <span className='asterisk'>*</span>
                <ProductsList products={productsList} isLoading={isProductsListLoading} />

            </div>
        </section>
    );
};

export default ProductDetail;
