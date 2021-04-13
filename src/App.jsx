import Header from "./components/Header";
import Main from "./pages/Main";
import Cart from "./pages/Cart";
import { Switch, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import EmptyCart from "./pages/EmptyCart";

function App() {
  let IsEmptyCart = !useSelector((state) => state.items).length;

  return (
    <div className="wrapper">
      <Header />
      <Switch>
        <Route exact path="/" component={Main} />
        {IsEmptyCart 
        ? (<Route exact path="/cart" component={EmptyCart} />) 
        : (<Route exact path="/cart" component={Cart} />)}
      </Switch>
    </div>
  );
}

export default App;
