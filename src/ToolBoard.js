import { useState } from "react";

import TopNav from "./TopNav";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import CategoryMenu from "./CategoryMenu";
import BodySearch from "./BodySearch";
import JobList from "./ToolList";
import { MainBody } from "./StyledComponents";

export default function ToolBoard({ allTools }) {
  const [selectedCategory, setSelectedCategory] = useState("");

  const categories = [];


  for (let tool of allTools) {
    if (!categories.includes(tool.category)) {
      categories.push(tool.category);
    }
  }

  return (
    <>
      <TopNav />
      <MainBody>
        <Box sx={{ width: "30%" }}>
          <Typography
            bottomGutter
            variant="h5"
            component="div"
            sx={{ marginBottom: "30px" }}
          >
             Tools and Services
          </Typography>
          <Typography variant="h6" component="div">
            Tools
          </Typography>
          <CategoryMenu
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            categories={categories}
          />
        </Box>
        <Box sx={{ width: "70%" }}>
          <BodySearch />
          <JobList
            tools={all.filter((tool) => {
              if (!selectedCategory) {
                return true;
              }
              return tool.category === selectedCategory;
            })}
          />
        </Box>
      </MainBody>
    </>
  );
}