import Divider from "@mui/material/Divider";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

import { Link } from "react-router-dom";

export default function JobList({ jobs }) {
  console.log({ jobs });

  return (
    <Paper>
      {jobs.map((job) => {
        return (
          <Box key={job.id}>
            <Box sx={{ padding: "20px", p: 2, }}>
              <Link
                style={{ color: "black", textDecoration: "none" }}
                to={`/job/${job.id}`}
              >
                <Typography
                  variant="h6"
                  component="div"
                  sx={{ marginBottom: "15px" }}
                >
                  {job.title}
                </Typography>
              </Link>
              <Typography variant="subtitle2" gutterBottom component="div">
                Entry/Output Fields: {job.hourlyUSD}
              </Typography>
              <Typography variant="subtitle2" gutterBottom component="div">
                Brief Tool Description Here 
              </Typography>
              <Typography variant="subtitle2" gutterBottom component="div">
                <img
                  alt="location"
                  src="https://assets.codepen.io/6060109/location-icon.png"
                  style={{ height: "13px", marginRight: "5px" }}
                />
                {job.remote ? "Choose Job Site " : ""}
              </Typography>
              <Typography variant="body2" gutterBottom component="div">

                <img 
                    alt="tool preview"
                    src={""+jobs.description}
                    style={{ height: "100px", marginRight: "50px" }}
                />
              </Typography>
            </Box>
            <Divider />
          </Box>
        );
      })}
    </Paper>
  );
}