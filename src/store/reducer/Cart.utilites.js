export function containsPizza(pizza,pizzasList){
    let existingPizza = pizzasList.find(i=>i.id===pizza.id);
    
    if(existingPizza){
        return pizzasList.map(pizza =>{
            return pizza.id === existingPizza.id
            ? {...pizza,quantity:pizza.quantity+1}
            : pizza
        })
    }else{
        return [...pizzasList,{...pizza,quantity:1}]
    }
}

export function getTotalSumm(pizzasList){
    return pizzasList.reduce((acc,pizza)=>acc+(pizza.price*pizza.quantity),0)
}