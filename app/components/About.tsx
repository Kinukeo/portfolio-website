import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.content}>
        <div className={styles.imageContainer}>
          <Image
            src="/placeholder.svg"
            alt="Your Name"
            width={300}
            height={300}
            className={styles.image}
          />
        </div>
        <div className={styles.text}>
          <h2 className={`${styles.title} playfair`}>About Me</h2>
          <p className={`${styles.description} quicksand`}>
            I'm a passionate software developer with a keen eye for design. I
            love creating beautiful, functional websites and applications that
            provide great user experiences. With expertise in front-end
            technologies and a solid foundation in back-end development, I bring
            ideas to life through clean, efficient code.
          </p>
          <div className={styles.skills}>
            <span className={styles.skill}>React</span>
            <span className={styles.skill}>Next.js</span>
            <span className={styles.skill}>TypeScript</span>
            <span className={styles.skill}>Node.js</span>
          </div>
        </div>
      </div>
    </section>
  );
}
