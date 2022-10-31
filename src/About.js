import { useState } from "react";

import TopNav from "./TopNav";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import CategoryMenu from "./CategoryMenu";
import BodySearch from "./BodySearch";
import JobList from "./ToolList";
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
              Let’s face it, we are LAZY… well not really, we just don’t want to spend extra time doing things that are unnecessary. In the world of Government Civil Engineering, there are countless tedious tasks that, frankly, are stuck in the stone age. Surely there’s a better solution than searching for that handwritten, miscalculated, note that has been stored in the bottom of a file cabinet for the last 6 years.
              </Typography>
    
              <Typography varian="p" component="div" sx={{marginBottom: "10px"}}>
              That’s where we come in. We strive to automate as many tasks as possible into one centralized location, in a way that just makes sense. Imagine a system where a contractor can survey a road and the data calculated is immediately and automatically compiled into a standardized format, and then generated into a bid for DOT to approve. Once approved, DOT/CEI employees will have access to the same exact data, leaving no room for miscommunication. While the work is being done, quantities are automatically updated in real time, and any erroneous items are flagged before they can become an issue. All areas from start to finish under one single system operating in harmony. 
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