import React from "react";
import PlaceItems from "./placeItems";
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
  return (
    <Box sx={{ width: "100%", mt: 3 }}>
      <Grid container direction="row" justifyContent="center" spacing={1}>
        {PlaceItems.map((content) => (
          <Grid item xs={12} md={6} sx={{ height: "auto" }}>
            <Card variant="outlined">
              <CardMedia
                component="img"
                height="i40"
                image={content.imgSrc}
                alt={content.alt}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {content.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {content.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Book</Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default Places;
