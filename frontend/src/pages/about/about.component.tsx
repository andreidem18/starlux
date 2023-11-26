import { aboutPageImage1, aboutPageImage3, aboutPageImage4 } from '../../assets/images';
import { ProductItem, SliderSmall, SliderSmallItem } from '../../components';
import { useGetAllProducts } from '../../services';
import useWindowWidth from '../../utils/useWindowWidth';
import './about.styles.css';

const AboutPage = () => {

    const { data: productsData } = useGetAllProducts();
    const windowWidth = useWindowWidth();

    const products = productsData?.slice(0, 8);

    return (
        <section className='about-page fade-in'>
            <div className="story">
                <div className="container">

                    <div className="story-first-part mb-3">
                        <div className="text">
                            <h4 className="story-title mb-2">
                                Eclipsing Ordinary Dreams
                            </h4>
                            <div className="paragraphs">
                                <p className='mb-3'>
                                    "StarLux," a mesmerizing constellation in the world of jewelry, began its
                                    luminous journey with a passion for crafting timeless treasures. Founded by
                                    visionary designer Clara Nova, the brand emerged as a celestial force,
                                    blending elegance with innovation.
                                </p>
                                <p className='mb-2'>
                                    The signature of StarLux lies in its ethically sourced gemstones, each a
                                    sparkling testament to the commitment to sustainability. Clara's dedication
                                    to responsible practices resonates in every piece, from dazzling diamonds
                                    to vibrant sapphires, creating jewelry that not only adorns but also honors
                                    the earth.
                                </p>
                            </div>
                        </div>
                        <img src={aboutPageImage1} className='about-image-1' alt="" />
                    </div>

                    <div className="story-image mb-2">
                        <div className="text">
                            <div>Responsibly Sourced</div>
                            <div><i className="fa-solid fa-asterisk"></i></div>
                            <div>locally made</div>
                        </div>
                    </div>

                    <p className='mb-5 starlux-heart-paragraph'>
                        The heart of StarLux beats with artistic ingenuity, fusing traditional
                        craftsmanship with avant-garde design. Clara's designs, often inspired by the
                        celestial wonders, evoke a sense of wonder and magic. The "Galactic Grace"
                        collection, with its celestial motifs and cosmic allure, has become an emblem
                        of the brand's celestial charm.
                    </p>
                    <h4 className="story-title text-center mb-2">Our approach</h4>
                    <div className="approach">
                        <div className="approach-item">
                            <img src={aboutPageImage3} alt="" />
                            Sustainability
                        </div>
                        <div className="approach-item">
                            <img src={aboutPageImage4} className='center-image' alt="" />
                            Made local
                        </div>
                    </div>
                </div>
            </div>

            <div className="shop-section">
                <div className="container">
                    <h4 className="story-title text-center mb-2">Shop now</h4>
                    {products && (
                        <SliderSmall slidesPerView={windowWidth < 480 ? 2 : 3}>
                            {products.map(product => (
                                <SliderSmallItem key={product.id}>
                                    <ProductItem product={product} />
                                </SliderSmallItem>
                            ))}
                        </SliderSmall>
                    )}
                </div>
            </div>
        </section>
    )
}

export default AboutPage