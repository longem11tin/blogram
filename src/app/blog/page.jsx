
import styles from './blogPost.module.css';
import Menu from '@/components/Menu/Menu';
import CardList from '@/components/cardList/CardList';


const BlogPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;
  return (
    <div className={styles.container}>
      <div className={styles.center}>
        <h1 className={styles.title}>{cat} Blog</h1>
      </div>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  )
}

export default BlogPage;