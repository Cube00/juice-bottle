import {connect} from 'react-redux'
import {data} from '../../data/data1'
import {PREW_SLIDE, NEXT_SLIDE} from '../layouts/actions'
import {IoIosArrowBack} from 'react-icons/io'
import Social from './social'

const Slider = ({content,id, moveNext, moveBack}) =>{
  const {name, slogan, description, img, background} = content;
  return <>
    <div className="slider-item">
      <div className={`poster-background ${background}`}>
        {data.map((fruits)=>{
          return <div key={fruits.id} className={fruits.id === id + 1 ? `fruits active` : 'fruits'}>
            <img  className="img-fruit" src={fruits.fruit.img1} alt=""/>
            <img className="img-fruit2" src={fruits.fruit.img2} alt=""/>
          </div>
        })}
        <img src={img} draggable="false" alt="poster"/>
        <button className="arrow-move prew" onClick={moveBack}>
          <IoIosArrowBack/>
        </button>
        <button className="arrow-move next" onClick={moveNext}>
          <IoIosArrowBack className="nextIcon"/>
        </button>
      </div>
      <div className="content-item">
        <h2>{name}</h2>
        <p>{description}</p>
        <h3>{slogan}</h3>
        <button className="orderBtn">Order now</button>
      </div>
      <Social />
    </div>
  </>
}

const functionForSlider = ({slideReducer: {id, content}}) => {
  return {id, content}
}

const actionFunc = (dispatch,state) =>{
  return {
    moveNext: ()=> dispatch({type: NEXT_SLIDE}),
    moveBack: ()=> dispatch({type: PREW_SLIDE})
  }
}

export default connect(functionForSlider, actionFunc)(Slider)
