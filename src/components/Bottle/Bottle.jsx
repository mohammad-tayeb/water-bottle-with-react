import PropTypes from 'prop-types';
import './bottle.css'
const Bottle = ({bottle, handleAddToCart}) => {
    const { name, img, price} = bottle;
    console.log(bottle);
    console.log(handleAddToCart)
    return (
        <div className="bottle">
            <p>Bottle:{name}</p>
            <img src={img} alt="" />
            <p>price: {price}</p>
            <button onClick={()=> handleAddToCart(bottle)} className='button'>Purchase</button>
        </div>
    );
};

Bottle.propTypes = {
bottle: PropTypes.object.isRequired,
handleAddToCart: PropTypes.func.isRequired
}
export default Bottle;