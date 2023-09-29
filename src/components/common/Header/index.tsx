import Link from 'next/link';

import styles from './style.module.scss';

export const Header = (): JSX.Element => {
  return (
    <header className={styles.header}>
      <div className={styles.headerCenter}>
        <Link href="/post" className={styles.link}>
          記事一覧
        </Link>
      </div>
      <div className={styles.headerLeft}>
        <Link href="/" className={styles.logo}>
          AppGram
        </Link>
      </div>
      <div className={styles.headerRight}>
        <Link href="#" className={styles.contactPageLink}>
          ご相談はこちら
        </Link>
      </div>
    </header>
  );
};
