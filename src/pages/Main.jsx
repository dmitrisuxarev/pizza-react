import React, { useEffect, useState } from "react";
import { getPizzas } from "../API";
import Category from "../components/MainComponents/Category";
import Sort from "../components/MainComponents/Sort";
import PizzaBlock from "../components/PizzaBlock";
import { sortType } from "../utitlitis";

export default function Main() {
  let [pizzasList, setPizzasList] = useState([]);
  let [filteredPizza, setFilteredPizza] = useState([]);
  let [category, setCategory] = useState(0);
  let [sortS, setSort] = useState(0);



  useEffect(() => {
    getPizzas(setPizzasList);
  }, []);

  useEffect(() => {
    let temp = [...pizzasList];
    let filteredPizzas;
    if (category === 0) {
      let filteredPizzas = sortBy(temp, sortType[sortS]);
      setFilteredPizza(filteredPizzas);
      return;
    }

    filteredPizzas = temp.filter((i) => i.category === category);
    setFilteredPizza(sortBy(filteredPizzas, sortType[sortS]));
  }, [category, pizzasList, sortS]);

  function sortBy(arr, sort) {
    return arr.sort((a, b) => (a[sort] > b[sort] ? 1 : -1));
  }

  function categoryHandler(category) {
    setCategory(category);
  }

  return (
    <div className="content">
      <div className="container">
        <div className="content__top">
          <Category clickHandler={categoryHandler} category={category} />
          <Sort sort={sortS} setSort={setSort} />
        </div>
        <h2 className="content__title">Все пиццы</h2>
        <div className="content__items">
          {filteredPizza.map((i) => {
            return (
              <PizzaBlock
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
            );
          })}
        </div>
      </div>
    </div>
  );
}
