import styles from './style.module.scss';

export const Footer = (): JSX.Element => {
  return (
    <footer className={styles.footer}>
      <div className={styles.titleWrapper}>
        <p className={styles.title}>AppGram(managed by Hirokei)</p>
      </div>
    </footer>
  );
};
