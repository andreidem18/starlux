import { useEffect, useState } from 'react'

const useWindowWidth = () => {
    const [ windowWidth, setWindowWidth ] = useState(window.innerWidth);

    useEffect(() => {
        const changeWidth = () => setWindowWidth(window.innerWidth);

        window.addEventListener('resize', changeWidth);

        () => window.removeEventListener('resize', changeWidth);
    }, []);

    return windowWidth;
}

export default useWindowWidth;
