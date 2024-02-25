import React from "react";
import styles from "./featured.module.css";
import Image from "next/image";

const Featured = () => {
  return (
    <>
      <div className={styles.container}>
        <div className={styles.title}>
          <p> <b>Hello world</b> Discover stories and creative ideas </p>
        </div>
        <div className={styles.post}>
          <div className={styles.imgContainer}>
            <Image className={styles.img} src="/coding.png" alt="culture" fill/>
          </div>
          <div className={styles.textContainer}>
            <h1 className={styles.postTitle}>A post in blogram</h1>
            <p className={styles.postDesc}>2</p>
            <button className={styles.button}>Read more</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Featured