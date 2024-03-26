import "../Categories/Categories.scss";
export const categories = [
  "Все",
  "Мясные",
  "Вегетарианская",
  "Гриль",
  "Острые",
  "Закрытые",
];
export default function Categories({ value, onClickCategory }) {
  return (
    <ul className="category__list">
      {categories.map((category, index) => (
        <li
          key={index}
          onClick={() => onClickCategory(index)}
          className={`category__item${value === index ? "--active" : ""}`}
        >
          {category}
        </li>
      ))}
    </ul>
  );
}
