import styles from './HeroStyles.module.css';
import heroImg from '../../assets/assets/hero-img-ansh-2.png'
import githubLight from '../../assets/assets/github-light.svg';
import githubDark from '../../assets/assets/github-dark.svg';
import RESUME from '../../assets/assets/Ansh_Gandhi_Resume_S24-links.pdf';
import linkedinLight from '../../assets/assets/linkedin-light.svg';
import linkedinDark from '../../assets/assets/linkedin-dark.svg';
import sun from '../../assets/assets/sun.svg';
import moon from '../../assets/assets/moon.svg';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme } = useTheme();
    const themeIcon = theme === 'light' ? sun:moon;
    const linkedinIcon = theme === 'light' ? linkedinLight:linkedinDark;
    const githubIcon = theme === 'light' ? githubLight:githubDark;

    return (
        <section id="hero" className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img src={heroImg} alt="Ansh Gandhi's Profile Picture" className={styles.hero} />
                <img src={themeIcon} alt="Color mode Icon" className={styles.colorMode} onClick={toggleTheme} />
            </div>
            <div className={styles.info}>
                <h1>
                    Ansh <br /> Gandhi
                </h1>
                <h2>Computer Science Student</h2>
                <span>
                    <a href="https://github.com/anshgandhi17/" target="_blank">
                        <img src={githubIcon} alt="github icon" />
                    </a>
                    <a href="https://www.linkedin.com/in/ansh-gandhi17/" target="_blank">
                        <img src={linkedinIcon} alt="linkedin icon" />
                    </a>
                </span>
                <p>I enjoy caffeine and coding (in that order).</p>
                <a href={RESUME} download>
                    <button className="hover">Resume</button>
                </a>
            </div>
        </section>
    );
}

export default Hero;
