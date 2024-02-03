import React from "react";
import styles from "./menu.module.css";
import MenuPost from "../MenuPost/MenuPost";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.subtitle}>{"What's a hot!"}</h2>
      <h1 className={styles.title}>Most Popular</h1>
      <MenuPost withImage={false}/>
      <h2 className={styles.subtitle}>Discover by topic</h2>
      <h1 className={styles.title}>Category</h1>
      <MenuCategory />
      <h2 className={styles.subtitle}>Choosen by editor</h2>
      <h1 className={styles.title}>Editor picks</h1>
      <MenuPost withImage={true}/>
    </div>
  )
}

export default Menu