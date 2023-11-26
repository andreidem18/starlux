import { Children, ReactNode, useState } from 'react'
import './slider-small.styles.css'

interface SliderSmallParams {
  children: ReactNode,
  slidesPerView?: number,
}

const SliderSmall = ({ children, slidesPerView=1 }: SliderSmallParams) => {

  const [position, setPosition] = useState(1);
  const slidesNumber = Math.ceil(Children.count(children) / slidesPerView);
  const slidesWidth = Children.count(children) / slidesPerView;


  const sliderItemsStyles = {
    width: slidesWidth * 100 + '%',
    transform: `translateX(-${(position - 1) * 100 / slidesWidth}%)`
  }

  return (
    <div className="slider-small">
      <div className="slider-buttons">
        <button onClick={() => setPosition(position - 1)} disabled={position === 1}>
          <i className="material-icons-sharp">
            arrow_back_ios
          </i>
        </button>
        <button onClick={() => setPosition(position + 1)} disabled={position === slidesNumber}>
          <i className="material-icons-sharp">
            arrow_forward_ios
          </i>
        </button>
      </div>
      <div className="slides-container" style={sliderItemsStyles}>
        {children}
      </div>
    </div>
  )
}

export default SliderSmall