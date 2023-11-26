import { useState } from 'react';
import './slider.styles.css';

interface SliderProps {
    slides: React.ReactNode[],
}

const Slider = ({ slides }: SliderProps ) => {
    
    const [ position, setPosition ] = useState(1);

    const sliderStyles = {
        width: slides.length * 100 + '%',
        transform: `translateX(-${(position-1)*100/slides.length}%)`
    }

    return (
        <div className="slider">
            <span className="counter">{position} / {slides.length}</span>
            <button className='arrow-button' style={{ left: '0' }} onClick={() => setPosition(position - 1)} disabled={position === 1}>
                <i className="material-icons-sharp">
                    arrow_back_ios
                </i>
            </button>
            <button className='arrow-button' style={{ right: '0' }} onClick={() => setPosition(position + 1)} disabled={position === slides.length}>
                <i className="material-icons-sharp">
                    arrow_forward_ios
                </i>
            </button>
            <div className="slides" style={sliderStyles}>
                {
                    slides.map((slide, i) => (
                        <div className="slide" key={i}>
                            {slide}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Slider