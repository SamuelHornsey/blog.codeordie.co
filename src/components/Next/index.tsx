'use client';

import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'

import styles from "./index.module.css";

export default function Next() {
  const router = useRouter();
  const [frame, setFrame] = useState(1);

  useEffect(() => {
    const animate = () => {
      setFrame(frame => {
        if (frame === 6) {
          return 0
        } else {
          return frame + 1;
        }
      });
    }

    const interval = setInterval(animate, 350);

    return () => clearInterval(interval);
  }, [frame])

  const onClick = () => {
    router.push('/archive');
  }

  return (
    <div onClick={onClick} className={styles.next}>
      <h4 className={`${styles.text} ${styles.to} ${frame > 0 ? styles.show : ''}`}>TO</h4>
      <h4 className={`${styles.text} ${styles.view} ${frame > 1 ? styles.show : ''}`}>view</h4>
      <h4 className={`${styles.text} ${styles.more} ${frame > 2 ? styles.show : ''}`}>MORE</h4>
      <h4 className={`${styles.text} ${styles.posts} ${frame > 3 ? styles.show : ''}`}>POSTS</h4>
      <h4 className={`${styles.text} ${styles.click} ${frame > 4 ? styles.show : ''}`}>CLICK</h4>
      <h4 className={`${styles.text} ${styles.here} ${frame > 5 ? styles.show : ''}`}>HERE</h4>
    </div>
  )
}