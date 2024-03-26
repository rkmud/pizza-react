import { useSelector } from "react-redux";
import PizzaItem from "../PizzaItem/PizzaItem";
import "./PizzaList.scss";
import Skeleton from "./Skeleton";
import { sortList } from "../Sort/Sort";
import { categories } from "../Categories/Categories";
import { Link } from "react-router-dom";

export default function PizzaList() {
  const categoryId = useSelector(state => state.filter.categoryId);
  const {items, status} = useSelector(state => state.pizza)
  const skeletons = [...new Array(8)].map((_, index) => (
    <Skeleton key={index} />
  ));
  const pizzas = items.map((obj) => (
    //<Link to={`/pizza/${obj.id}`} key={obj.id}> <PizzaItem  {...obj} /></Link>
   <PizzaItem  {...obj}  key={obj.id}/>
   
  ));
  return (
    <>
      <h3 className="pizza-category">{categories[categoryId]} пиццы</h3>
      <ul className="pizza-list">{status === 'loading' ? skeletons : pizzas}</ul>;
    
    </>
  )
}
