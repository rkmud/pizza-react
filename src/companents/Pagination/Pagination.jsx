import React from "react";
import ReactPaginate from "react-paginate";
import styles from "./Pagination.module.scss";

import { setCurrentPage } from "../../store/filterSlice";
import { useDispatch, useSelector } from "react-redux";

const Pagination = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector((state) => state.filter.currentPage);
  return (
    <ReactPaginate
      className={styles.wrapper}
      breakLabel="..."
      previousLabel="<"
      nextLabel=">"
      onPageChange={(e) => dispatch(setCurrentPage(e.selected + 1))}
      pageRangeDisplayed={2}
      pageCount={2}
      forcePage={currentPage - 1}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
