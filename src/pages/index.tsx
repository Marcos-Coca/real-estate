import type { NextPage } from "next";
import Image from "next/image";

import { Grid, GridItem } from "@ui/layout/Grid";
import { Heading } from "@ui/components/Heading";

import { withLayout } from "@shared/hocs/withLayout";
import { Center } from "@ui/layout/Center";
import { SearchRentForm } from "@main/components/SearchRentForm/SearchRentForm";

const Home: NextPage = () => {
  return (
    <Grid>
      <GridItem col={6}>
        <Center>
          <Heading size="3xl">Need to Rent a House?</Heading>
          <Heading>Well help you find your next home</Heading>

          <SearchRentForm />
        </Center>
      </GridItem>
      <GridItem col={6}>
        <Image
          src="/images/landing-house-image.png"
          width="100%"
          height="80%"
          layout="responsive"
          objectFit="cover"
          alt="house"
        />
      </GridItem>
    </Grid>
  );
};

export default withLayout(Home, "main");
