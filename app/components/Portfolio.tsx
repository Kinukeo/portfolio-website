import styles from "./Portfolio.module.css"

const projects = [
  { id: 1, title: "E-commerce Website", category: "Web Development" },
  { id: 2, title: "Mobile Banking App", category: "Mobile Development" },
  { id: 3, title: "Social Media Dashboard", category: "UI/UX Design" },
  { id: 4, title: "Task Management Tool", category: "Web Development" },
  { id: 5, title: "Fitness Tracking App", category: "Mobile Development" },
  { id: 6, title: "Restaurant Booking System", category: "Web Development" },
]

export default function Portfolio() {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <h2 className={`${styles.title} playfair`}>My Work</h2>
      <div className={styles.grid}>
        {projects.map((project) => (
          <div key={project.id} className={styles.card}>
            <h3 className={`${styles.projectTitle} playfair`}>{project.title}</h3>
            <p className={`${styles.category} nunito`}>{project.category}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

