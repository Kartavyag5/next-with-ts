import styles from '../styles/Navbar.module.css';
import Image from 'next/image';
import imageLoader from '../imageLoader';
import logo from '../public/logo.png';

const Navbar = ()=>{
    return (
        <>
            <div className={styles.nav}>
                <Image
                    loader={imageLoader} unoptimized
                    src = {logo}
                    alt = "logo"
                    width = "50px"
                    height = "50px"
                    className={styles.logo}
                />
                <a className={styles.navLink} href="https://github.com" target="_blank">Github</a>
                <a className={styles.navLink} href="http://stackoverflow.com" target="_blank">Stackoverflow</a>
                <a className={styles.navLink} href="https://in.linkedin.com" target="_blank">LinkedIn</a>
                <a className={styles.navLink} href="https://codepen.io" target="_blank">Codepen</a>
                <a className={styles.navLink} href="https://jsfiddle.net" target="_blank">JsFiddle</a>
            </div>
        </>
    );
}

export default Navbar