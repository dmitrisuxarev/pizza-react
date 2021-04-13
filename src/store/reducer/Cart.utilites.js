export function AddPizzaOrQuantity(pizza, pizzasList) {
  let existingPizza =
    typeof pizza === "number"
      ? pizzasList.find((i) => i.id === pizza)
      : pizzasList.find((i) => i.id === pizza.id);

  if (existingPizza) {
    return pizzasList.map((pizza) => {
      return pizza.id === existingPizza.id
        ? { ...pizza, quantity: pizza.quantity + 1 }
        : pizza;
    });
  } else {
    return [...pizzasList, { ...pizza, quantity: 1 }];
  }
}
export function removeOnePizzaFromList(id, pizzasList) {
  let existingPizza = pizzasList.find((i) => i.id === id);

  if (existingPizza.quantity - 1 !== 0) {
    return pizzasList.map((pizza) => {
      return pizza.id === existingPizza.id
        ? { ...pizza, quantity: pizza.quantity - 1 }
        : pizza;
    });
  } else {
    return pizzasList.filter((pizza) => pizza.id !== existingPizza.id);
  }
}

export function removePizzaFromList(id, pizzasList) {
  return pizzasList.filter((pizza) => pizza.id !== id);
}

export function getTotalSumm(pizzasList) {
  return pizzasList.reduce(
    (acc, pizza) => acc + pizza.price * pizza.quantity,0);
}
export function getQuantity(pizzasList) {
  return pizzasList.reduce((acc, pizza) => acc + pizza.quantity, 0);
}
