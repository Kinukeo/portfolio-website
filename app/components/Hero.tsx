import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.content}>
        <h1 className={`${styles.title} playfair`}>
          Hi, I'm Kim Lida – a Creative Designer & Developer.
        </h1>
        <p className={`${styles.subtitle} nunito`}>
          Turning ideas into beautiful, functional websites.
        </p>
        <button className={styles.cta}>Get in Touch</button>
      </div>
    </section>
  );
}
