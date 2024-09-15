import styles from './Copyright.module.css';
import socials from '../../Data/socials.json';
function Copyright() {
    return (
        <div className={styles.container}>
            <span className={styles.text}>
                &copy; {new Date().getFullYear()}
                <a href={"/"} className={styles.link}>CalaTech</a>
            </span>
            <div className={styles.socialIcons}>
                {socials.map((link, index) => (
                    <a
                        key={index}
                        href={link.href}
                        target={'_blank'}
                        rel={'noopener noreferrer'}
                        className={styles.socialIcon}
                    >
                        <img src={link.imgSrc} alt={link.alt} />
                        <span className={styles.srOnly}>{link.srOnly}</span>
                    </a>
                ))}
            </div>
        </div>
    );
}

export default Copyright;