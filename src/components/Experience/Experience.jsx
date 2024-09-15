import styles from './Experience.module.css';
import skills from '../Data/skills.json';
import career from '../Data/career.json';

const Experience = () => {
    return (
        <section className={styles.container} id="Experience">
            <h2 className={styles.title}>Skills & Experience</h2>
            <div className={styles.content}>
                <div className={styles.skills}>
                    {skills.map((skill, id) => {
                        return (
                            <div key={id} className={styles.skill}>
                                <div className={styles.skillImageContainer}>
                                    <img src={skill.imageSrc} alt={skill.title} />
                                </div>
                                <p>{skill.title}</p>
                            </div>
                        );
                    })}
                </div>
                {<ul className={styles.career}>
                    {career.map((careerItem, id) => {
                        return (
                            <li key={id} className={styles.careerItem}>
                                <img
                                    src={careerItem.imageSrc}
                                    alt={`${careerItem.organisation} Logo`}
                                />
                                <div className={styles.careerItemDetails}>
                                    <h3>{careerItem.role}, {careerItem.organisation}</h3>
                                    <p>{careerItem.startDate} - {careerItem.endDate}</p>
                                    <ul>
                                        <li>
                                            {careerItem.experiences.map((experience, id) => {
                                                return <li key={id}>{experience}</li>;
                                            })}
                                        </li>
                                    </ul>
                                </div>
                            </li>
                        );
                    })}
                </ul>}
            </div>
        </section>
    );
}

export default Experience;