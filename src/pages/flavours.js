import React, {useState, useCallback, useEffect} from 'react'
import {connect} from 'react-redux'
import {data} from '../data/data2'
import FlavourItem from '../components/UI/flavourItem.js'
import {ADD_TO_CART, REMOVE_ITEM} from '../components/layouts/actions'

const Flavour = ({cart, add_item}) =>{
  const [color, setColor] = useState('');
  let [state, setState] = useState('15');

  let filterByPrice = data.filter((item)=>{
    return Math.round(item.price) > state
  })
  const [filter, setFilter] = useState(filterByPrice);

  useEffect(()=>{
    if(color ===''){
      setFilter(data.filter((item)=>{
        return Math.round(item.price) > state
      }))
    }
    if(color !==''){
      setFilter(data.filter((item)=>{
        return Math.round(item.price) > state && item.background === color
      }))
    }
    if(color === 'all'){
      setFilter(data.filter((item)=>{
        return Math.round(item.price) > state
      }))
    }
  },[color, state])

  return <>
    <div className="mult-block">
      <section className="catfilter">
        <div className="price-filter">
          <h2>filter by price</h2>
          <input type="range" min="1" max="55" value={state} onChange={(e)=> setState(e.target.value)} className="range"/>
          <h4>Min price: {state}$</h4>
          <div className="color-flter">
            <h2>filter by color</h2>
            <ul>
              <li onClick={()=>{setColor('all')}}>
                All
                <div className="transparent-color"></div>
              </li>
              <li onClick={()=>{setColor('red')}}>
                red
                <div className="red"></div>
              </li>
              <li onClick={()=>{setColor('green')}}>
                green
                <div className="green"></div>
              </li>
              <li onClick={()=>{setColor('yellow')}}>
                yellow
                <div className="yellow"></div>
              </li>
              <li onClick={()=>{setColor('purple')}}>
                purple
                <div className="purple"></div>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="container-content">
        <div className="flavours-container">
        {filter.map((item)=>{
          return <FlavourItem
                    key={item.id}
                    cartItem={
                      ()=>{
                        if(!cart.includes(item)){
                          add_item(cart,item)
                        }
                      }
                    }
                    item={item}/>
        })}
        </div>
      </section>
    </div>
  </>
}

const cartFunc = ({cartReducer: {cart}}) => {
  return {cart}
}

const dispatchFunc = (dispatch) =>{
  return {
    add_item: (cart, item)=>{dispatch({type:ADD_TO_CART, payload: [...cart,item]})},
  }
}

export default connect(cartFunc, dispatchFunc)(Flavour)
