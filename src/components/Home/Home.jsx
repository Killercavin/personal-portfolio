import styles from './Home.module.css';

const Home = () => {
    const heroHeading = "Hello, I'm Cavin Larry";
    const heroParagraph = "Experienced web developer with intermediate frontend development skills, specializing in scaling web applications to meet the needs of both clients and end users. I am passionate about building scalable and responsive web applications that are optimized for performance and user experience.";
    return (
        <section className={styles.container} id='Home'>
            <div className={styles.content}>
                <h1 className={styles.title}>{heroHeading}</h1>
                <p className={styles.description}>{heroParagraph}</p>
                <a href={'/files/CavinLarryResume.pdf'} className={styles.contactBtn} target={'_blank'}>View Resume</a>
            </div>
            <img src={'/images/home/homeImage.png'} alt="hero-img" className={styles.heroImg} />

            <div className={styles.topBlur}></div>
            <div className={styles.bottomBlur}></div>
        </section>
    );
}

export default Home;