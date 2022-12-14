import type { NextPage } from "next";
import Image from "next/image";

import { Card } from "@ui/components/Card";
import { Grid, GridItem } from "@ui/layout/Grid";
import { Heading } from "@ui/components/Heading";

import { withLayout } from "@shared/hocs/withLayout";
import { SearchRentForm } from "@main/components/SearchRentForm";

const Home: NextPage = () => {
  return (
    <Grid>
      <GridItem col={6}>
        <Heading size="3xl">Need to Rent a House?</Heading>
        <Heading>Well help you find your next home</Heading>
        <section className="rentForm">
          <Card>
            <Heading mb={6}>For Current estimate, please provide the following</Heading>
            <SearchRentForm />
          </Card>
        </section>
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

      <style jsx>
        {`
          .rentForm {
            position: absolute;
            top: 40%;
            left: 30%;
            width: 900px;
            height: 285px;
            z-index: 1;
          }
        `}
      </style>
    </Grid>
  );
};

export default withLayout(Home, "main");
