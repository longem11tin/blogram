import React from 'react';
import styles from './menuPost.module.css';
import Image from 'next/image';
import Link from 'next/link';

const MenuPost = ({ withImage }) => {
  return (
    <div className={styles.items}>

      {/* 1 */}
      <Link href="" className={styles.item}>
        { withImage && <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="bcsd lbnga" fill className={styles.image}/>
        </div> }
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.travel}`}>Travel</span>
          <h3 className={styles.postTitle}>This is a post</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Long em</span>
            <span className={styles.date}> - 14.10.2024</span>
          </div>
        </div> 
      </Link>
      {/* 2 */}
      <Link href="" className={styles.item}>
        { withImage && <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="bcsd lbnga" fill className={styles.image}/>
        </div> }
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.style}`}>Style</span>
          <h3 className={styles.postTitle}>This is a post</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Long em</span>
            <span className={styles.date}> - 14.10.2024</span>
          </div>
        </div> 
      </Link>
      {/* 3 */}
      <Link href="" className={styles.item}>
        { withImage && <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div> }
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.coding}`}>Coding</span>
          <h3 className={styles.postTitle}>This is a post</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Long em</span>
            <span className={styles.date}> - 14.10.2024</span>
          </div>
        </div> 
      </Link>
      {/* 4 */}
      <Link href="" className={styles.item}>
        { withImage && <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image}/>
        </div> }
        <div className={styles.textContainer}>
          <span className={`${styles.category} ${styles.fashion}`}>Fashion</span>
          <h3 className={styles.postTitle}>This is a post</h3>
          <div className={styles.detail}>
            <span className={styles.username}>Long em</span>
            <span className={styles.date}> - 14.10.2024</span>
          </div>
        </div> 
      </Link>
    </div>
  )
}

export default MenuPost