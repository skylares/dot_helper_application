import { useState } from "react";

import TopNav from "./TopNav";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import CategoryMenu from "./CategoryMenu";
import BodySearch from "./BodySearch";
import JobList from "./JobList";
import { MainBody } from "./StyledComponents";
import {Divider} from "@mui/material";





export default function AboutPage() {
    return (
        <>
          <TopNav />
          <MainBody>
            <Box sx={{ width: "25%", color: "red" }}>
              <Typography
                bottomGutter
                variant="h5"
                component="div"
                sx={{ marginBottom: "50px" }}
              ></Typography>
              <Typography variant="p" component="div"></Typography>
            </Box>
            <Box sx={{ width: "50%" }}>
              <Typography
                bottomGutter
                variant="h5"
                component="div"
                sx={{ marginBottom: "50px" }}
              >
                About Us
              </Typography>
              <Typography variant="p" component="div" sx={{ marginBottom: "10px" }}>
                I'm baby mukbang mixtape tacos, 8-bit brunch williamsburg coloring
                book distillery green juice jean shorts cold-pressed slow-carb
                snackwave. Man braid gochujang waistcoat sus, bicycle rights mixtape
                meggings shoreditch godard hot chicken roof party migas cornhole.
                Put a bird on it yuccie fingerstache deep v pork belly 90's blue
                bottle post-ironic distillery mumblecore iPhone chicharrones. Small
                batch heirloom coloring book kombucha cornhole stumptown actually
                neutra bodega boys. Bruh franzen tacos tbh, man braid synth affogato
                DIY drinking vinegar vibecession enamel pin hashtag wayfarers banjo
                letterpress.
              </Typography>
    
              <Typography varian="p" component="div" sx={{marginBottom: "10px"}}>
                Dummy text? More like dummy thicc text, amirite?
              </Typography>
              <Divider />
            </Box>
            <Box sx={{ width: "25%", color: "red" }}>
              <Typography
                bottomGutter
                variant="h5"
                component="div"
                sx={{ marginBottom: "50px" }}
              ></Typography>
              <Typography variant="p" component="div"></Typography>
              
            </Box>
          </MainBody>
        </>
      );
}