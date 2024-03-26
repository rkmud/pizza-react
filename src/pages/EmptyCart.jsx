import React from "react";
import shoppingCart from "../img/shopping-cart.svg";
import "./Cart.scss";
const EmptyCart = () => {
  return (
    <div className="cart__empty">
      <h2>
        Корзина пустая
        <span>😕</span>
      </h2>
      <p>
        Вероятней всего, вы не заказывали ещё пиццу. <br />
        Для того, чтобы заказать пиццу, перейди на главную страницу.
      </p>
      <img src={shoppingCart} alt="" />
      <a href="/">Вернуться назад</a>
    </div>
  );
};

export default EmptyCart;
