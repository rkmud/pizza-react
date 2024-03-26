import "../Header/Header.scss";
import cartImg from "../../img/cart.svg";
import { Link, useLocation } from "react-router-dom";
import Search from "../Search/Search";
import { useSelector } from "react-redux";
import { selectCart } from "../../store/cartSlice";
import { useEffect, useRef } from "react";

export default function Header() {
  const { item, totalPrice, totalCount} = useSelector(selectCart);
  const location = useLocation();
  const isMounted = useRef();

  useEffect(() => {
     if(isMounted) {
      const json = JSON.stringify(item);
      localStorage.setItem('cart', json)
     }
     isMounted.current = true;
  }, [item])
  return (
    <div className="header">
      <div className="container">
        <Link to="/" className="header__logo">
          <img
            src="https://react-pizza-v2.vercel.app/static/media/pizza-logo.56ac87032d8f6fdf863326acd06c0d97.svg"
            alt="logo"
          />
          <div className="header__logo--text">
            <h1>REACT PIZZA</h1>
            <p>самая вкусная пицца во вселенной</p>
          </div>
        </Link>
      
        <div className="header__cart">
          {location.pathname !== '/cart' && 
            <Search /> &&
            <Link to="/cart" className="button button__cart">
              <span>{totalPrice} ₽</span>
              <div className="button__delimited"></div>
              <img src={cartImg} alt="cart-logo" />
              <span>{totalCount}</span>
            </Link>
          }
        </div>
      </div>
    </div>
  );
}
