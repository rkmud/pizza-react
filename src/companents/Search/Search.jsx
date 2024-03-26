import { useCallback, useRef, useState } from "react";
import styles from "./Search.module.scss";
import debounce from "lodash.debounce";
import { useDispatch } from "react-redux";
import { setSearchValue } from "../../store/filterSlice";
const Search = () => {
  const [value, setValue] = useState("");
  const inputRef = useRef();
  const dispatch = useDispatch();
  const onClickClear = () => {
    dispatch(setSearchValue(""));
    setValue("");
    inputRef.current.focus();
  };

  const onChangeInput = (e) => {
    setValue(e.target.value);
    updateSearchValue(e.target.value);
  };

  const updateSearchValue = useCallback(
    debounce((value) => {
      dispatch(setSearchValue(value));
    }, 250),
    [debounce, setSearchValue],
  );
  return (
    <div className={styles.wrapper}>
      <svg
        className={styles.searchIcon}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        width="32px"
        height="32px"
      >
        <path d="M 19 3 C 13.488281 3 9 7.488281 9 13 C 9 15.394531 9.839844 17.589844 11.25 19.3125 L 3.28125 27.28125 L 4.71875 28.71875 L 12.6875 20.75 C 14.410156 22.160156 16.605469 23 19 23 C 24.511719 23 29 18.511719 29 13 C 29 7.488281 24.511719 3 19 3 Z M 19 5 C 23.429688 5 27 8.570313 27 13 C 27 17.429688 23.429688 21 19 21 C 14.570313 21 11 17.429688 11 13 C 11 8.570313 14.570313 5 19 5 Z" />
      </svg>
      <input
        ref={inputRef}
        onChange={(e) => onChangeInput(e)}
        value={value}
        type="text"
        placeholder="Поиск пиццы ..."
      />
      {value && (
        <svg
          onClick={() => onClickClear()}
          className={styles.closeIcon}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 50 50"
          width="50px"
          height="50px"
        >
          <path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z" />
        </svg>
      )}
    </div>
  );
};

export default Search;
