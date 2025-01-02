import { Link } from "react-router-dom";
import Mobile from "../../hook";
import logo from "../../images/logo.png";
import DesktopMenu from "./desktopMenu";
import styles from "./index.module.css"
import MobileMenu from "./mobileMenu";


function Header() {

const isMobile = Mobile()

  return (
    <header className={styles.header}>
        <div className={ styles.container }>
                <Link to='/'><img src={logo} alt="" className={styles.logo}></img></Link>
            {isMobile ? <MobileMenu/> : <DesktopMenu />}
        </div>
    </header>
  );
}

export default Header;
