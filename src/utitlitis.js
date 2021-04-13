export let pizzaType = ["тонкое", "традиционное"];
export let sortType = ["rating", "price", "name"];
export let sortList = ["популярности", "цене", "алфавиту"];
export let categoryList = ["Все","Мясные","Вегетарианская","Гриль","Острые","Закрытые"];

export function getLiIndex(e) {
    return [...e.target.parentNode.children].indexOf(e.target);
  }
