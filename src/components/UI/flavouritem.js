const FlavourItem = ({item, addToCart, store, allow, addCart}) =>{
  const {name, img, slogan,background, price} = item;
  const {img1} = item.fruit;

  const addItemToBasket = () => {
    if(!store.includes(item)){
      item.amount +=1
      addToCart([...store, item])
    }else{
      item.amount +=1
      addToCart([...store])
    }
  }

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
        <button onClick={addItemToBasket, ()=>addCart(item)} className="add-to-cart">Add to cart</button>
      </div>
    </div>
  </>
}


export default FlavourItem
