import PropTypes from 'prop-types';
import './bottle.css';
const Bottle = ({bottle, purchaseHandler}) => {
    // console.log(bottle)
    const{brand,img,price} = bottle;
    return (
        <div className='bottle'>
            <h2>Brand: {brand}</h2>
            <img src={img} className='img' alt="" />
            <h2>Price: {price}</h2>
            <button onClick={()=>purchaseHandler(bottle)}>Purchase</button>
        </div>
    );
};

Bottle.proptype = {
    bottle:PropTypes.object.isRequired,
    purchaseHandler: PropTypes.func.isRequired
}
export default Bottle;