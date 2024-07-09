"use client";

import type { NextPage } from "next";
import Image from "next/image";

import { Card } from "@ui/components/Card";
import { Grid, GridItem } from "@ui/layout/Grid";
import { Heading } from "@ui/components/Heading";

import { SearchRentForm } from "@main/components/SearchRentForm";

const Home: NextPage = () => {
  return (
    <div>
      <Grid h="100vh">
        <GridItem col={6}>
          <Heading as="h1" size="3xl">
            Need to Rent a House?
          </Heading>
          <Heading as="h2">Well help you find your next home</Heading>
          <div className="search-form-container">
            <Card>
              <Heading as="h2" mb="6">
                For Current estimate, please provide the following
              </Heading>
              <SearchRentForm />
            </Card>
          </div>
        </GridItem>
        <GridItem pt="4" col={6}>
          <Image fill src="/images/landing-house-image.png" alt="" />
        </GridItem>
      </Grid>

      <style jsx>
        {`
          .search-form-container {
            position: absolute;
            top: 40%;
            left: 30%;
            z-index: 1;
            width: 100%;
          }
        `}
      </style>
    </div>
  );
};

export default Home;
