import FlavourPoster from '../assets/images/flavours.png'
import {data} from '../data/data1'
import FlavourItem from '../components/UI/flavouritem.js'

const Flavour = () =>{
  return <>
    <section className="container-content">
      <div className="flavours-container">
      {data.map((item)=>{
        return <FlavourItem key={item.id} item={item}/>
      })}
      </div>
    </section>
  </>
}

export default Flavour
