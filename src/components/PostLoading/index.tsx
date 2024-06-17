import React from "react";

import styles from './index.module.css';

export default function PostLoading() {
  return (
    <div className={styles.post}>
      <h4 className={styles.heading}>Content Loading...</h4>
      <p className={styles.loading}>***please wait***</p>
    </div>
  )
}