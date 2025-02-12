import styles from "./Contact.module.css"

export default function Contact() {
  return (
    <section id="contact" className={styles.contact}>
      <h2 className={`${styles.title} playfair`}>Get in Touch</h2>
      <form className={styles.form}>
        <input type="text" placeholder="Your Name" className={styles.input} />
        <input type="email" placeholder="Your Email" className={styles.input} />
        <textarea placeholder="Your Message" className={styles.textarea}></textarea>
        <button type="submit" className={styles.submit}>
          Send Message
        </button>
      </form>
    </section>
  )
}

