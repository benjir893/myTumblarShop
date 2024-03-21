import PropTypes from 'prop-types';
import './cart.css'
const Cart = ({cart, handleRemoverFromCart}) => {
    return (
        <div>
            <h4 className='h4'>Cart: <span className='cartQuantity'>{cart.length}</span></h4>
            <div className="cart_container">
                {
                    cart.map(bottle =><div key={bottle.id}>
                        <img  src={bottle.img}></img>
                        <button onClick={()=>handleRemoverFromCart(bottle.id)}>Remove</button>
                    </div>)
                }
            </div>
        </div>
    );
};

Cart.proptypes = {
    cart: PropTypes.array.isRequired,
    handleRemoverFromCart: PropTypes.func.isRequired
}
export default Cart;