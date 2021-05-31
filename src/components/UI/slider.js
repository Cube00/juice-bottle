import {connect} from 'react-redux'
import {data} from '../../data/data1'
import {PREW_SLIDE, NEXT_SLIDE} from '../actions'
import {IoIosArrowBack} from 'react-icons/io'

const Slider = ({content, moveNext, moveBack}) =>{
  const {name, slogan, description, img, background} = content;
  return <>
    <div className="slider-item">
      <div className={`poster-background `+ `${background}`}>
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
