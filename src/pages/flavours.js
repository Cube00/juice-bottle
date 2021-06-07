import React, {useState, useEffect} from 'react'
import FlavourPoster from '../assets/images/flavours.png'
import {data} from '../data/data2'
import FlavourItem from '../components/UI/flavouritem.js'

const Flavour = () =>{
  const [color, setColor] = useState('');
  let [state, setState] = useState('15');
  let filterByPrice = data.filter((item)=>{
    return Math.round(item.price) > state
  })
  const [filter, setFilter] = useState(filterByPrice);

  useEffect(()=>{
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
          return <FlavourItem key={item.id} item={item}/>
        })}
        </div>
      </section>
    </div>
  </>
}

export default Flavour
