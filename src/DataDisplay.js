import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import TopNav from "./TopNav";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextInput from "./TextInput";
import { milling_data } from "./mData.js";

import Typography from "@mui/material/Typography";

import { MainBody, PrimaryButton } from "./StyledComponents";
import { Divider } from "@mui/material";

export function createData(
  map,
  tons,
  yards,
  depth,
  fill,
  station,
  length,
  width,
  area,
  reqTons
) {
    
  return {
    map,
    tons,
    yards,
    depth,
    fill,
    station,
    length,
    width,
    area,
    reqTons
  };
}

let rows = [createData("Map 1", 159, 6.0, 24, "material", 5, 6, 7.0)];

export let test = ["test1", "test2"];

export default function BasicTable() {
  const [map, setMap] = useState("");
  const [tons, setTons] = useState("");
  const [yards, setYards] = useState("");
  const [depth, setDepth] = useState("");
  const [fill, setFill] = useState("");
  const [station, setStation] = useState("");
  const [length, setLength] = useState("");
  const [width, setWidth] = useState("");

  const [newData, setData] = useState("");
  return (
    <>
      
      <MainBody>
        <Box sx={{ width: "100%" }}></Box>
      
        <Box sx={{ width: "100%", color: "red" }}>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  <TableCell>Map Number</TableCell>
                  <TableCell align="right">Alloted Tons</TableCell>
                  <TableCell align="right">Alloted Square Yards</TableCell>
                  <TableCell align="right">Milling Depth</TableCell>
                  <TableCell align="right">Fill Material</TableCell>
                  <TableCell align="right">Starting Station</TableCell>
                  <TableCell align="right">Length</TableCell>
                  <TableCell align="right">Width</TableCell>
                  <TableCell align="right">Required Sq Yards</TableCell>
                  <TableCell align="right">Tons Required</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {milling_data.map((mill) => (
                  <TableRow
                    key={mill.map}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {mill.map}
                    </TableCell>
                    <TableCell align="right">{mill.tons}</TableCell>
                    <TableCell align="right">{mill.yards}</TableCell>
                    <TableCell align="right">{mill.depth}</TableCell>
                    <TableCell align="right">{mill.fill}</TableCell>
                    <TableCell align="right">{mill.station}</TableCell>
                    <TableCell align="right">{mill.length}</TableCell>
                    <TableCell align="right">{mill.width}</TableCell>
                    <TableCell align="right">{mill.area}</TableCell>
                    <TableCell align="right">{mill.reqTons}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
          

        
        </Box>
   
      </MainBody>
    </>
  );
}
