import React from "react";
import styles from "./MyInput.module.sass";

const MyInput = (props) => {
  return <input className={styles.myInp} {...props} />;
};

export default MyInput;
