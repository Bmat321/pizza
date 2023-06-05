import React from "react";
import styles from "../styles/Add.module.css";

const AddButton = ({ setClose }) => {
  return (
    <div className={styles.mainButton} onClick={() => setClose(false)}>
      Add New Pizaa
    </div>
  );
};

export default AddButton;
