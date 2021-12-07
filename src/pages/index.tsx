import type { NextPage } from "next";
import { Button } from "../ui/atoms/Button";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Button></Button>
    </div>
  );
};

export default Home;
