import type { NextPage } from "next";
import { Button } from "../ui/forms/Button";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Button>Submit</Button>
    </div>
  );
};

export default Home;
