import type { NextPage } from "next";
import { Heading } from "@ui/components/Heading";
import { Card } from "@ui/components/Card";
import { Button } from "@ui/forms/Button";
import { Grid } from "@ui/layout/Grid/Grid";
import { GridItem } from "@ui/layout/Grid/GridItem";
import { Input } from "@ui/forms/Input";

const Home: NextPage = () => {
  return (
    <>
      <Heading isShaded={true} size="3xl">
        Need to Rent a House?
      </Heading>
      <Heading isShaded={true}>Well help you find your next home</Heading>
      <Card>
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
      </Card>
    </>
  );
};

export default Home;
