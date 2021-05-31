import {connect} from 'react-redux'
import {data} from '../../data/data1'
import {PREW_SLIDE, NEXT_SLIDE} from '../actions'

const Slider = ({content, moveNext, moveBack}) =>{
  const {name, slogan, description, img, background} = content;
  return <>
    <div className={`poster-background `+ `${background}`}>
      <img src={img} alt=""/>
    </div>
    <h2>{name}</h2>
    <p>{description}</p>
    <h3>{slogan}</h3>
    <button onClick={moveBack}>prew</button>
    <button onClick={moveNext}>next</button>
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
