import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import './cart.styles.css';
import { useGetCart, useDeleteFromCart, usePurchaseCart } from '../../services';
import { spinnerDark } from '../../assets/images';

const CartPage = () => {

    const { data: cart } = useGetCart();
    const { mutate: removeFromCart, isPending: isRemovePending } = useDeleteFromCart();
    const { mutate: buy, isPending: isBuyPending } = usePurchaseCart();

    const totalPrice = useMemo(() => {
        let total = 0;
        cart?.forEach(item => total += +item.product.price * item.quantity);
        return total
    }, [cart])

    const isLoading = isRemovePending || isBuyPending;

    return (
        <section className='cart'>
            <div className="container">
                <div className="header">
                    <h1>SHOPPING CART</h1>
                    {isLoading && <img src={spinnerDark} alt="loading" />}
                </div>
                {
                    cart?.length ? (
                        <>
                            <table>
                                <thead>
                                    <tr>
                                        <th>item</th>
                                        <th>quantity</th>
                                        <th>price</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cart.map(cartItem => {
                                            return (
                                                <tr key={cartItem.id} className='cart-item'>
                                                    <td className='item'>
                                                        <button onClick={() => removeFromCart(cartItem.id)}>
                                                            <i className="material-icons-sharp"> close </i>
                                                        </button>
                                                        <div className="product-image">
                                                            <img src={cartItem.product.images[0].url} alt="" />
                                                        </div>
                                                        <Link to={`/shop/${cartItem.product.id}`} className='product-name'>
                                                            {cartItem.product.name}
                                                        </Link>
                                                    </td>
                                                    <td className='quantity'>
                                                        <span>{cartItem.quantity}</span>
                                                    </td>
                                                    <td className='price'>
                                                        ${cartItem.product.price}
                                                    </td>
                                                </tr>
                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                            <div className='subtotal'>Subtotal <span className="price">${totalPrice}</span></div>
                            <button className="link-squared checkout-button" onClick={() => buy()}>
                                Checkout
                            </button>
                        </>
                    ) : (
                        <>
                            <p className="empty-message">You have nothing in your shopping cart.</p>
                            <Link to='/shop' className='link-squared'>Continue Shopping</Link>
                        </>
                    )
                }
            </div>
        </section>
    );
};

export default CartPage;
