import React from "react";
import {
  Grid,
  Typography,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button
} from "@mui/material";

function Places() {
  const card = (
    <>
      <CardMedia
        component="img"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </>
  );
  return (
    <Box sx={{ width: "100%" }}>
      <Grid container direction="row" justifyContent="center" spacing={2}>
        <Grid item xs={10} md={6} sx={{ height: "auto" }}>
          <Card variant="outlined">{card} </Card>
        </Grid>
        <Grid item xs={10} md={6} sx={{ height: "auto" }}>
          <Card variant="outlined">{card} </Card>
        </Grid>
        <Grid item xs={10} md={6} sx={{ height: "auto" }}>
          <Card variant="outlined">{card} </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Plac;
