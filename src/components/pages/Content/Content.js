import React from "react";
import Places from "./places/Places";
import {
  Grid,
  Box,
  Card,
  CardHeader,
  CardContent,
  TextField
} from "@mui/material";

function Content() {
  const card = (
    <>
      <CardHeader title="Tour Places" sx={{ textAlign: "center" }}></CardHeader>

      <CardContent>
        <TextField variant="standard" fullWidth placeholder="search a place" />
      </CardContent>
    </>
  );
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container direction="row" justifyContent="center" spacing={2}>
        <Grid item xs={10} md={7} sx={{ height: "auto" }}>
          <Card variant="outlined">{card}</Card>
          <card>
            <Places />
          </card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Content;
