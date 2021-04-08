import React, { useEffect, useState } from "react";
import { getPizzas } from "../API";
import Category from "../components/MainComponents/Category";
import Sort from "../components/MainComponents/Sort";
import PizzaBlock from "../components/PizzaBlock";

export default function Main() {
    let [pizzasList,setPizzasList] = useState([])
    let [pizzas,setPizzas] = useState([])
    let [category,setCategory] = useState(0)
    //TODO подумать как сделать фильтрацию
    useEffect(()=>{
        getPizzas(setPizzasList)
    },[])

    useEffect(()=>{
        if(category===0){
            setPizzas(pizzasList);
            return
        }
        let filteredPizzas = pizzasList.filter(i=>i.category===category)
        setPizzas(filteredPizzas)
    },[category])

    function categoryHandler(category) {
        setCategory(category)
    }
  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
            <Category clickHandler={categoryHandler} category={category}/>
            <Sort/>
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
            {pizzas.map(i=>{
            return <PizzaBlock 
            key={i.id} 
            id={i.id}
            imageUrl={i.imageUrl}
            name={i.name}
            types={i.types}
            sizes={i.sizes}
            price={i.price}
            category={i.category}
            rating={i.rating}
            />
            })}
        </div>
      </div>
    </div>
  );
}
