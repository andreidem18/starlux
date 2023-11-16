import React, { useState } from 'react';
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import { getCategoriesThunk, getProductsThunk } from 'redux/actions';
import { ProductsList } from '../../components';
import { Category, Product } from '../../interfaces';
import './shop.styles.css';

const Shop = () => {

    const categories: Category[] = [];
    const products: Product[] = [];

    const [ , setCategoryId ] = useState<number | null>(null);
    const [ , setName ] = useState('');

    // useEffect(() => {
    //     dispatch(getCategoriesThunk());
    //     dispatch(getProductsThunk());
    // }, [ dispatch ]);

    // useEffect(() => {
    //     dispatch(getProductsThunk(categoryId));
    // }, [ categoryId, dispatch ]);

    const handleName = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // dispatch(getProductsThunk(categoryId, name));
    }

    return (
        <section className='shop'>
            <div className="container">

                <div className="filters">
                    <form className="searchbox" onSubmit={handleName}>
                        <input type="text" placeholder='Type to search' onChange={e => setName(e.target.value)} />
                        <button className='link-squared'>Search</button>
                    </form>
                    <div className="categories">
                        <button onClick={() => setCategoryId(null)}>All</button>
                        {
                            categories.map(category => (
                                <button 
                                    key={category.id} 
                                    className='left-border' 
                                    onClick={() => setCategoryId(category.id)}
                                >
                                    {category.name}
                                </button>
                            ))
                        }
                    </div>
                </div>
                
                {
                    products.length ? (
                        <>
                            <ProductsList products={products} />
                            <span className='free-shipping'>Free shipping over $100</span>
                        </>
                    ) : (
                        <div className="not-found">
                            <i className="material-icons-sharp">youtube_searched_for</i>
                            <span className='message'>Not products found</span>
                        </div>
                    )
                }

            </div>

        </section>
    );
};

export default Shop;