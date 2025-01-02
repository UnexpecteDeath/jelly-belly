import { useState } from "react";
import { BurgerMenu } from "../burger";
import styles from "./index.module.css";
import { Link } from "react-router-dom";

export default function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.container}>
      <BurgerMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      {isOpen ? (
        <div className={styles.wrapper}>
          <nav>
            <Link onClick={()=>setIsOpen(!isOpen)} to="/beans">Beans</Link>
            <Link onClick={()=>setIsOpen(!isOpen)} to="facts">Facts</Link>
            <Link onClick={()=>setIsOpen(!isOpen)} to="recipies">Recipes</Link>
            <Link onClick={()=>setIsOpen(!isOpen)} to="combinations">Combinations</Link>
            <Link onClick={()=>setIsOpen(!isOpen)} to="history">History</Link>
            <Link onClick={()=>setIsOpen(!isOpen)} to="about">About</Link>
          </nav>
        </div>
      ) : null}
    </div>
  );
}
