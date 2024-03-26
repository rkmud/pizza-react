import React from "react";
import styles from "./NotFoundInfo.module.scss";

const NotFoundInfo = () => {
  return (
    <div className={styles.wrapper}>
      <h1>
        <span>😕</span>
        <br />
        Ничего не найдено
      </h1>
    </div>
  );
};

export default NotFoundInfo;
