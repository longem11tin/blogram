
import styles from "./simplePage.module.css";
import Menu from "@/components/Menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";

const getData = async (slug) => {
  const res = await fetch(`https://blogram-eqr6eb9oo-longem11tin.vercel.app/api/posts/${slug}`, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed");
  }

  return res.json();
};


const SimplePage = async ({ params }) => {
  const { slug } = params;

  const data = await getData(slug);

  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>{data?.title}</h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image
                className={styles.avatar}
                src={data?.user?.image}
                alt={data?.user?.name}
                fill
              />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}>{data.user.name}</span>
              <span className={styles.date}>
                {data.createdAt.substring(0, 10)}
              </span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src={data.img} alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div
            className={styles.desc}
            dangerouslySetInnerHTML={{ __html: data?.desc }}
          />
          <Comments postSlug={slug}/>
        </div>
        <Menu />
      </div>
    </div>
  );
};

export default SimplePage;
