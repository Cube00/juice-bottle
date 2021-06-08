import React, {useState, useEffect} from 'react'

export const useCart = (item) => {
    const [cart, setCart] = useState([]);

    const addCart = (item) => {
      const array = cart;
      const getArray = JSON.parse(localStorage.getItem('cart') || 0);
      let addAprove = true;
      array.forEach((e, key)=>{
        if(e.id === item.id){
          e.amount +=1;
          addAprove = false;
        }
      })
      if(addAprove){
        array.push(item);
      }

      setCart([...array]);
      localStorage.setItem('cart', JSON.stringify(cart));
    }

    useEffect(()=>{
      const getArray = JSON.parse(localStorage.getItem('cart') || 0);
      if(getArray !==0){
        setCart([...getArray])
      }
    },[])

    return { addCart };
};
