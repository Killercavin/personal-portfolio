import Copyright from "./Copyright/Copyright";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.container}>
      <hr className={styles.divider} />
      <div className={styles.content}>
        <div className={styles.links}>
          <a href={"/"} className={styles.link}>Home</a>
          <a href={"/About"} className={styles.link}>About</a>
          <a href={"/Experience"} className={styles.link}>Experience</a>
          <a href={"/Projects"} className={styles.link}>Projects</a>
        </div>
      </div>
      <Copyright />
    </section>
  );
};

export default Footer;
