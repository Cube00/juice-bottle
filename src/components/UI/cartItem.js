import {connect} from 'react-redux'
import {INCREASE, DECREASE} from '../layouts/actions'

const CartItem = ({store,remove,increase, decrease}) =>{
  var {name, price, amount} = store;

  return <>
    <div className="cart-item">
      <h2>{name}</h2>
      <div className="flex-cont">
        <button onClick={() => decrease()}>-</button>
        <h4>{amount}</h4>
        <button onClick={() => increase()}>+</button>
      </div>
      <h3>Price: {price}$</h3>
      <button className="del-btn" onClick={()=>{remove()}}>Delete</button>
    </div>
  </>
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const {id} = ownProps;

  return {
    increase: () => dispatch({ type: INCREASE, payload: {id}}),
    decrease: () => dispatch({ type: DECREASE, payload: {id}}),
  };
}

export default connect(null, mapDispatchToProps)(CartItem);
