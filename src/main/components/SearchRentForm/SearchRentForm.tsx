import React from "react";

import { Button } from "@ui/forms/Button";
import { Input } from "@ui/forms/Input";
import { Grid, GridItem } from "@ui/layout/Grid";
import { Flex } from "@ui/layout/Flex";

export const SearchRentForm = () => {
  return (
    <Grid>
      <GridItem col={6}>
        <Input label="Address" type="text"></Input>
      </GridItem>
      <GridItem col={3}>
        <Input label="Unit" type="text"></Input>
      </GridItem>
      <GridItem col={4}>
        <Input label="Property Type" type="text"></Input>
      </GridItem>
      <GridItem col={2}>
        <Input label="SQFT" type="text"></Input>
      </GridItem>
      <GridItem col={2}>
        <Input label="Beds" type="text"></Input>
      </GridItem>
      <GridItem col={2}>
        <Input label="Bath" type="text"></Input>
      </GridItem>
      <GridItem col={2}>
        <Flex align="flex-end" h="100%">
          <Button>Submit</Button>
        </Flex>
      </GridItem>
    </Grid>
  );
};
