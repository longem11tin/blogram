import React from "react";
import styles from "./categoryList.module.css";
import Link from "next/link";
import Image from "next/image";

const getData = async () => {
  
  const res = await fetch("http:localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Goi API failt roi em giai");
  }

  return res.json();
};

const CategoryList = async ({ page, cat }) => {
  const data = await getData();

  return (
    <>
      <div className={styles.container}>
        <h1 className={styles.title}>Catergories</h1>
        <div className={styles.categories}>
          {data?.map((item) => (
            <Link
              href="/blog?cat=style"
              className={`${styles.category} ${styles[item.slug]}`}
              key = {item._id}
            >
              {item.img && <Image
                src={item.img}
                alt="bcsd lbnga"
                width={32}
                height={32}
                className={styles.img}
              />}
              {item.title}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryList;
