import type { NextPage } from "next";
import { Button } from "../ui/forms/Button";
import styles from "../styles/Home.module.css";
import { Grid } from "../ui/layout/Grid/Grid";
import { GridItem } from "../ui/layout/Grid/GridItem";
import { Input } from "../ui/forms/Input";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Grid>
        <GridItem col={6}>
          Address
          <Input type="text"></Input>
        </GridItem>
        <GridItem col={3}>
          Unit
          <Input type="text"></Input>
        </GridItem>
        <GridItem col={12}>
          <Button>Submit</Button>
        </GridItem>
      </Grid>
    </div>
  );
};

export default Home;
