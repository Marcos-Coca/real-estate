import React from "react";

import { Card } from "@ui/components/Card";
import { Button } from "@ui/forms/Button";
import { Input } from "@ui/forms/Input";
import { Grid } from "@ui/layout/Grid/Grid";
import { GridItem } from "@ui/layout/Grid/GridItem";

export const SearchRentForm = () => {
  return (
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
  );
};
