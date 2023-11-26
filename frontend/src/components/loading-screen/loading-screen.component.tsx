import './loading-screen.styles.css';

const LoadingScreen = () => {
    return (
        <div className="loading-screen">
            <div className="lds-ellipsis">
                <div></div><div></div><div></div><div></div>
            </div>
        </div>
    );
};

export default LoadingScreen;
