import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addPizzaToCart } from '../store/actions/CartActions';

export default function PizzaBlock({id,imageUrl,name,types,sizes,price,category,rating}) {
    let pizzaType = ["тонкое","традиционное"]

    let [type,setType] = useState(0);
    let [size,setSize] = useState(0);

    const dispatch = useDispatch()

    let quantity = useSelector(state => state.items).find(i=>i.id===id)?.quantity


    function getLiIndex(e) {
      return [...e.target.parentNode.children].indexOf(e.target)
    }

    function addHandler(){
      let pizza = {
        id,
        type,
        size,
        price
      }
      dispatch(addPizzaToCart(pizza))
    }

    return (
        <div className="pizza-block">
            <img
              className="pizza-block__image"
              src={imageUrl}
              alt="Pizza"
            />
            <h4 className="pizza-block__title">{name}</h4>
            <div className="pizza-block__selector">
              <ul onClick={e=>setType(getLiIndex(e))}>
                  {
                      types.map((t,index)=>index===type?<li className="active">{pizzaType[t]}</li>:<li>{pizzaType[t]}</li>)
                  }
              </ul>
              <ul onClick={e=>setSize(getLiIndex(e))}>
                  {
                      sizes.map((_size,index)=>index===size?<li className="active">{_size} см.</li>:<li>{_size} см.</li>)
                  }
              </ul>
            </div>
            <div className="pizza-block__bottom">
              <div className="pizza-block__price">от {price} ₽</div>
              <div className="button button--outline button--add" onClick={addHandler}>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 12 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                    fill="white"
                  />
                </svg>
                <span>Добавить</span>
                {quantity &&
                 <i>{quantity}</i>
                }
              </div>
            </div>
          </div>
    )
}
