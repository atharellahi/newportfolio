import styles from './navbar.module.css'

const Navbar = () => {

    return (
        <>
            <div className={styles.navbar}>
                <div className={styles.logoholder}>
                    <img className={styles.logo} src='/logo/logo.svg'/>
                </div>
                <div className={styles.sectiontoggles}>
                    <div className={styles.section}>Stack</div>
                    <div className={styles.section}>Projects</div>
                    <div className={styles.section}>Services</div>
                    <div className={styles.section}>About</div>
                </div>
            </div>
        </>
    )
}


export default Navbar;