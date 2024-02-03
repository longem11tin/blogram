
import Image from "next/image";
import Link from "next/link";
import styles from "./card.module.css";

const Card = ({ key , item }) => {
  return (
    <Link href={`/posts/${item.slug}`}> 
      <div className={styles.container} key={key}>
        {item.img && (
          <div className={styles.imgContainer}>
            <Image src={item.img} alt="" fill className={styles.image} />
          </div>
        )}
        <div className={styles.textContainer}>
          <div className={styles.detail}>
            <span className={styles.date}>{item.createdAt.substring(0,10)} - {" "}</span>
            <span className={styles.category}>{item.catSlug}</span>
          </div>
          <h1 className={styles.title}>{item.title}</h1> 
          <p className={styles.desc}> {item.desc.substring(0, 60)} </p>
          {/* <Link href={`/posts/${item.slug}`} className={styles.link}>Read More</Link> */}
        </div>
      </div>
    </Link>
  );
};

export default Card;