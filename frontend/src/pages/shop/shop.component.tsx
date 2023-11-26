import { useState } from 'react';
import { ProductsList } from '../../components';
import './shop.styles.css';
import { useGetAllCategories, useGetAllProducts } from '../../services';

const Shop = () => {

    const [categoryId, setCategoryId] = useState<number | null>(null);
    const [name, setName] = useState('');

    const { data: products, isPending: areProductsLoading } = useGetAllProducts({ 
        name, categoryId 
    });
    const { data: categories } = useGetAllCategories();


    return (
        <section className='shop'>
            <div className="container">

                <div className="filters">
                    <form className="searchbox">
                        <input type="text" placeholder='Type to search' onChange={e => setName(e.target.value)} />
                        <button className='link-squared'>Search</button>
                    </form>
                    <div className="categories">
                        <button onClick={() => setCategoryId(null)}>All</button>
                        {
                            categories?.map(category => (
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

                <ProductsList products={products} isLoading={areProductsLoading} />
                <span className='free-shipping'>Free shipping over $100</span>

            </div>

        </section>
    );
};

export default Shop;