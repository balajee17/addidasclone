import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import LoginPage from "./pages/auth/login/LoginPage";
import HelpPage from "./pages/help/HelpPage";
import OrderandreturnsPage from "./pages/orderandreturns/OrderandreturnsPage";
import ProductDetail from "./content/Product/ProductDetail";
import CartDetail from "./content/Cart/CartPop";
import CartIndex from "./content/Cart/CartIndex";
import SignupPage from "./pages/auth/sign up/SignupPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/login" Component={LoginPage} />
          <Route path="/help" Component={HelpPage} />
          <Route path="/order-tracker" Component={OrderandreturnsPage} />
          <Route path="/product-detail" Component={ProductDetail} />
          <Route path="card-detail" Component={CartDetail} />
          <Route path="cart-index" Component={CartIndex} />
          <Route path="signup" Component={SignupPage} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
