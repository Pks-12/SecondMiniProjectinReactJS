import styles from './Nav.module.css';
function Nav(){
    return(
        <nav className={`${styles.navigation}container`}>
            <div>
                <img className={`${styles.logoimage}`} src="/images/logo.png" alt="Puma logo"/>
            </div>
            <ul>
                <li>Home</li>
                <li>Contact</li>
                <li>About</li>
            </ul>
        </nav>
    );
}
export default Nav