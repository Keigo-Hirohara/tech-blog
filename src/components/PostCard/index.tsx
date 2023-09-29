import Link from 'next/link';
import Image from 'next/image';
import styles from './style.module.scss';

type PropType = {
  post: any;
};

export const PostCard = ({ post }: PropType): JSX.Element => {
  return (
    <div className={styles.postCard}>
      <Link className={styles.postCardLink} href={`/post/${post.slug}`}>
        <div className={styles.postCardImageWrapper}>
          <Image
            src={`/${post.data.image}`}
            layout="fill"
            alt={post.title}
            className={styles.postCardImage}
            objectFit="contain"
          />
        </div>
        <p className={styles.postTitle}>{post.data.title}</p>
        <p className={styles.postDescription}>{post.content}</p>
      </Link>
    </div>
  );
};
