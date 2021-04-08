export function getPizzas(setFn){
    fetch("http://localhost:3004/pizzas")
    .then(json=>json.json())
    .then(data=>setFn(data))
}