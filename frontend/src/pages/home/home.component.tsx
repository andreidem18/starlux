import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Product } from '../../interfaces/Product';
import { imgToGallery } from '../../assets/images';
import './home.styles.css';

const Home = () => {
  const [ rings, /* setRings */ ] = useState<Product[]>([]);
  const [ necklaces, /* setNecklaces */ ] = useState<Product[]>([]);
  const [ position, setPosition ] = useState(1);


  const necklacesStyles = {
      width: necklaces.length * 100 + '%',
      transform: `translateX(-${(position-1)*100/necklaces.length}%)`
  }

  return (
      <>
          <section className="hero">
              <div className="container">
                  <div className="banner fade-in">
                      <span className="new-collection">NEW COLLECTION</span>
                      <span className='universal'>
                          Universal - <Link to="/shop">Shop Now</Link>
                      </span>
                  </div>
              </div>
          </section>


          <section className='story-section'>
              <div className="container">
                  <p className='creations'>We create modern gold and sterling silver jewelry with a focus on timeless designs, local production, and responsibly sourced materials. </p>
                  <Link to="/about" className='link-squared story-button'>Our Story</Link>
                  <div className="gallery">
                      <img src="https://static.mejuri.com/mejuri-com/image/fetch/c_scale,f_auto,q_60,w_1500/https://static.mejuri.com/legacy-front/production/system/spree/products/20159/original/1_ChunkyCurbChainGemstoneBracelet_Garnet.jpg?1621537998" alt="" />
                      <img src={imgToGallery} alt="" />
                      <div className="col"></div>
                  </div>
                  <div className="luxury">
                      <div className="col">
                          <h3 className='luxury-title'>
                              Essential Luxury
                          </h3>
                          <Link to="/shop" className='link-squared mb-4'>
                              Shop Rings
                          </Link>
                      </div>
                      <div className="rings">
                          {
                              rings.map(ring => (
                                  <Link to={`/shop/${ring.id}`} className="ring" key={ring.id}>
                                      <img src={ring.images[0].url} alt="" />
                                      <span>{ring.name}</span>
                                      <span>${ring.price}</span>
                                  </Link>
                              ))
                          }
                      </div>
                  </div>
              </div>
          </section>

          
          <section className="creation-section">
              <div className="container">
                  <h3>Effortless pieces, timeless style</h3>
                  <div className="flex">
                      <div className="col-8">
                          <p className="mb-3">We design each of our collections with the intention of creating pieces that can be passed down through generations, with minimal waste and minimal carbon footprint.</p>
                          <Link to="/shop" className='link-squared white mb-4'>
                              Shop Now
                          </Link>
                      </div>
                      <div className="col-4">
                          <div className="slider-buttons">
                              <button onClick={() => setPosition(position-1)} disabled={position === 1}>
                                  <i className="material-icons-sharp">
                                      arrow_back_ios
                                  </i>
                              </button>
                              <button onClick={() => setPosition(position+1)} disabled={position === necklaces.length}>
                                  <i className="material-icons-sharp">
                                      arrow_forward_ios
                                  </i>
                              </button>
                          </div>
                          <div className="slider">
                              <div className="necklaces" style={necklacesStyles}>
                                  {
                                      necklaces.map(necklace => (
                                          <Link to={`/shop/${necklace.id}`} className="necklace" key={necklace.id}>
                                              <img src={necklace.images[0].url} alt="" />
                                              <span>{necklace.name}</span>
                                              <span>${necklace.price}</span>
                                          </Link>
                                      ))
                                  }
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="overlay"></div>
          </section>

      </>
  );
}

export default Home;
