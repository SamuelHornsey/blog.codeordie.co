import React from "react";

import styles from "./index.module.css";

export default function Container(props) {
  return (
    <div className={styles.container}>
      { props.children }
    </div>
  );
}