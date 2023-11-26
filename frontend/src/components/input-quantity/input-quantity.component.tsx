import './input-quantity.styles.css';

interface InputQuantityParams {
    quantity: number,
    setQuantity: React.Dispatch<React.SetStateAction<number>>
}

const InputQuantity = ({ quantity, setQuantity }: InputQuantityParams) => {

    const decrement = () => {
        if(quantity === 1) return;
        setQuantity(quantity-1);
    }

    return (
        <div className="input-quantity">
            <label htmlFor="quantity">quantity:</label>
            <div className="flex">
                <button onClick={decrement}><i className="material-icons-outlined"> remove </i></button>
                <input type="number" id="quantity" value={quantity} disabled/>
                <button onClick={() => setQuantity(quantity+1)}><i className="material-icons-outlined"> add </i></button>
            </div>
        </div>
    );
};

export default InputQuantity;
