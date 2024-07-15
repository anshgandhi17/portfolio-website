import styles from './Projects.module.css'
import project_1_img from '../../assets/assets/project-1.png' 
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section id="projects" className={styles.container}>
    <h1 className="sectionTitle">Projects</h1>
    <div className={styles.projectsContainer}>
      <ProjectCard
        src={project_1_img}
        link="https://github.com/anshgandhi17/Body_Energy_Club_Java_Personal_Project"
        h3="Body Energy Club - Java Project"
        p="Smoothie Builder and Calorie Tracker"
      />
        </div>
    </section>
  )
}

export default Projects