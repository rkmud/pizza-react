import {  useEffect, useRef, useCallback } from "react";
import Categories from "../companents/Categories/Categories";
import PizzaList from "../companents/PizzaList/PizzaList";
import Sort from "../companents/Sort/Sort";
import Pagination from "../companents/Pagination/Pagination";
import "../scss/style.scss";
import qs from 'qs';
import { useDispatch, useSelector } from "react-redux";
import { setCategoryId, setFilters } from "../store/filterSlice";
import { useNavigate } from "react-router-dom";

import { sortList } from "../companents/Sort/Sort";
import { fetchPizzas } from "../store/pizzaSlice";
import NotFound from "./NotFound";

const Home = () => {
  const { searchValue, categoryId, currentPage, sort } = useSelector((state) => state.filter);
  const status= useSelector(state => state.pizza.status)
  const dispatch = useDispatch();
  const isMounted = useRef(false);
  const navigate = useNavigate();
  const isSearch = useRef(false);

  const onChangeCategory = useCallback(
    (ind) => {
      dispatch(setCategoryId(ind));
    }, [] 
  );
  const getPizza = async () => {
    if (!isSearch.current) {
      const order = sort.sortProperty.includes("-") ? "asc" : "desc";
      const category = categoryId > 0 ? `&category=${categoryId}` : "";
      const sortBy = sort.sortProperty.replace("-", "");
      const search = searchValue ? `&filter=${searchValue}` : "";

      dispatch(fetchPizzas({
        order,
        category,
        sortBy,
        search,
        currentPage
      }))
    }

  }

  useEffect(() => {
      getPizza();
  }, [categoryId, sort.sortProperty, searchValue, currentPage]);

  useEffect(() => {
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1));

      const sort = sortList.find(
        (obj) => obj.sortProperty === params.sortProperty,
      );

      dispatch(
        setFilters({
          ...params,
          sort,
        }),
      );
     // isSearch.current = true;
    }
  }, []);

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        sortProperty: sort.sortProperty,
        categoryId,
        currentPage,
      });
      navigate(`?${queryString}`);
    }
    isMounted.current = true;
  }, [categoryId, sort.sortProperty, currentPage]);
  console.log(categoryId)
  return (
    <>
      <div className="content__top">
        <Categories
          value={categoryId}
          onClickCategory={(id) => onChangeCategory(id)}
        />
        <Sort />
      </div>
      { status === 'error' ? <NotFound/> : <PizzaList/>} 
      <Pagination />
    </>
  );
};

export default Home;