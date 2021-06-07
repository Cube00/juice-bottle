const FlavourItem = ({item}) =>{
  const {name, img, slogan,background, price} = item;
  const {img1} = item.fruit;
  return <>
    <div className="flavour_item">
      <div className={`bg ${background}`}></div>
      <div className="flavour-block">
        <div className="fruit-image">
          <img src={img1} alt="/" />
        </div>
        <div className="fl-poster-div">
          <img className="fl-poster" src={img} alt="/" />
        </div>
        <h2>{name}</h2>
        <p>{slogan}</p>
        <h4>Price: {price}$</h4>
      </div>
    </div>
  </>
}

export default FlavourItem
