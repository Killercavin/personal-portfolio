import styles from './About.module.css';

function About(){

    return(
        <section className={styles.container} id='About'>
            <h2 className={styles.title}>About</h2>
            <div className={styles.content}>
                <img src={'/images/about/aboutImage.png'} alt="about-img" className={styles.aboutImg} />
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={'/images/about/cursorIcon.png'} alt="cursor icon" />
                        <div className={styles.aboutItemText}>
                            <h3>FrontEnd Developer</h3>
                            <p>I am a client side developer with experience in developing responsive, optimized web applications using various frontend technologies.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={'images/about/serverIcon.png'} alt="sever icon" />
                        <div className={styles.aboutItemText}>
                            <h3>BackEnd Developer</h3>
                            <p>I am a server side developer with beginner skills in back-end technologies and APIs which I inspire to build robust and scalable systems.</p>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
}

export default About;