import { useState } from "react";
import "./PizzaItem.scss";
import { addItem } from "../../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function PizzaItem({ id, imageUrl, name, types, sizes, price }) {
  const [activeType, setActiveType] = useState(0);
  const [activeSize, setActiveSize] = useState(0);
  const typeNames = ["тонкое", "традиционное"];
  const cartItem = useSelector((state) =>
    state.cart.item.find((obj) => obj.id === id),
  );
  const addedCount = cartItem ? cartItem.count : 0;
  const dispatch = useDispatch();
  function addPizza() {
    const item = {
      id,
      imageUrl,
      name,
      price: price[activeSize],
      type: typeNames[activeType],
      size: sizes[activeSize],
    };
    dispatch(addItem(item));
  }
  return (
    <div className="pizza-block">
      <li className="pizza-item">
        <img className="pizza-item__img" src={imageUrl} alt="pizza-img" />
        <p className="pizza-item__title">{name}</p>
        <div className="pizza-item__selector">
          <ul className="pizza-item__types">
            {types.map((typeId) => (
              <li
                key={typeId}
                className={activeType === typeId ? "active" : ""}
                onClick={() => setActiveType(typeId)}
              >
                {typeNames[typeId]}
              </li>
            ))}
          </ul>
          <ul className="pizza-item__sizes">
            {sizes.map((size, index) => (
              <li
                key={index}
                className={activeSize === index ? "active" : ""}
                onClick={() => setActiveSize(index)}
              >
                {size}
              </li>
            ))}
          </ul>
        </div>
        <div className="pizza-item__bottom" onClick={addPizza}>
          <p>{price[activeSize]} ₽</p>
          <div className="pizza-item__bottom-btn">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="12"
              height="12"
              viewBox="0 0 12 12"
              fill="none"
            >
              <path
                d="M10.8 4.8H7.2V1.2C7.2 0.5373 6.6627 0 6 0C5.3373 0 4.8 0.5373 4.8 1.2V4.8H1.2C0.5373 4.8 0 5.3373 0 6C0 6.6627 0.5373 7.2 1.2 7.2H4.8V10.8C4.8 11.4627 5.3373 12 6 12C6.6627 12 7.2 11.4627 7.2 10.8V7.2H10.8C11.4627 7.2 12 6.6627 12 6C12 5.3373 11.4627 4.8 10.8 4.8Z"
                fill="#EB5A1E"
              />
            </svg>
            <p>Добавить</p>
            {addedCount !== 0 ? (
              <span className="pizza-item__bottom-btn-count">{addedCount}</span>
            ) : null}
          </div>
        </div>
      </li>
    </div>
  );
}
