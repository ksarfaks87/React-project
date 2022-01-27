import React from "react";
import styles from "./MyInput.module.sass";

//React.forwardRef нужно обернуть весь компонент чтобы получать данные с неуправляемого инпута через ref

const MyInput = React.forwardRef((props, ref) => {
  return <input ref={ref} className={styles.myInp} {...props} />;
});

export default MyInput;
