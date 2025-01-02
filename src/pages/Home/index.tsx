import styles from "./index.module.css";
import image from "../../images/main.gif";

function Home() {
  return (
      <div className={styles.home_container}>
        <img src={image} alt="" />
        <div className={styles.info}>
          <h1 className={styles.h1}>Welcome to the World of Jelly Belly:</h1>
          <p>A Rainbow of Flavors Awaits!</p>
        </div>
      </div>
  );
}

export default Home;
