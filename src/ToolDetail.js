import * as React from 'react';
import TopNav from "./TopNav";
import { useParams, Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import { styled } from "@mui/material/styles";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import PinDropIcon from "@mui/icons-material/PinDrop";
import Button from "@mui/material/Button";
import { ThemeProvider, createTheme } from '@mui/system';

import {useState} from "react";
import { milling_data, spread_rate } from './mData';
import BasicTable, { createData } from './DataDisplay';
import  SelectTextFields from "./dropDowns"

import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

import TextInput from "./TextInput";


import {
  MainBody,
  PRIMARY_GREEN,
  PrimaryButton,
  SecondaryButton,
  OtherButton,
  BLACK
} from "./StyledComponents";
import { blue } from '@mui/material/colors';

export const SpacerBox = styled(Box)(() => ({
  padding: "20px"
}));

export default function ToolDetail({ allTools }) {
  let { id: idFromURL } = useParams();

  const selectedTool = allTools.find((tool) => {
    return tool.id === Number(idFromURL);
  });

  const [values, setValues] = React.useState({
    amount: '',
    password: '',
    weight: '',
    weightRange: '',
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };


 
  //general milling input useState variables 

  const [map, setMap] = useState("");
  const [tons, setTons] = useState(1);
  const [yards, setYards] = useState(1);
  const [depth, setDepth] = useState(1.5);
  const [station, setStation] = useState(1);
  const [length, setLength] = useState(1);
  const [width, setWidth] = useState(1);
  const [fill, setFill] = useState("material");



  // use state variables for spread rate, per inch and total (div by depth and normal)
  const [sr, setSr] = useState(100);
  const [sr2, setSr2] = useState(168);


  // tons estimator use state variables 

  const [etons, setEtons] = useState(5000);


  //ayards are allotted yards 
  const [ayards, setAyards] = useState(1);
  //area
  const [area, setArea] = useState(length*width); 


  function handleClick() {
    setSr(spread_rate[0]);
    setSr2(Math.round(sr * depth));
    setArea(Math.round(length * width));
    setEtons(Math.round(sr2*area/(2000*9)));
    setAyards(tons * 2000/sr2);
    setFill(fill);
    console.log(fill);


    //alert("clcie");
  }




  return (
    <>
      <TopNav />
      <MainBody>
        <Box sx={{ width: "60%" }}>
          <Typography
            bottomGutter
            variant="h5"
            component="div"
            sx={{ marginBottom: "30px" }}
          >
            {selectedTool.title}
          </Typography>
          <Divider />
          <Box sx={{ padding: "20px 0" }}>
            <Typography
              sx={{ color: PRIMARY_GREEN }}
              variant="subtitle2"
              gutterBottom
              component="div"
            >
              {selectedTool.category}
            </Typography>
            <Typography
              sx={{ fontWeight: 400 }}
              variant="subtitle2"
              gutterBottom
              component="div"
            >
              Put Tool Description Here Later {selectedTool.instructions}
            </Typography>
            <Typography variant="subtitle2" gutterBottom component="div">
              <img
                alt="location"
                src="https://assets.codepen.io/6060109/location-icon.png"
                style={{ height: "13px", marginRight: "5px" }}
              />
              {selectedTool.remote ? "Location will display here, " : ""}
              {selectedTool.location}
            </Typography>
          </Box>
          <Divider />
          <h3>Enter Data Below</h3>
          <Box
          
          sx = {{ m: 5, border: 1}}
          
          >


          
          <h4> Milling Depth</h4>  
          <TextInput updateValue={setDepth}  />
          <h4>Alloted Tons</h4>
          <TextInput updateValue={setTons} placeholder={ayards*sr2/2000} />
          <h4>Alloted Square Yards</h4>
          <TextInput updateValue={setAyards} placeholder={tons*2000/sr2}/>
          <h4>Choose Material </h4>  
          <div
          onClick = {handleClick}
          >
          <SelectTextFields updateLabel={setFill} />
          
          </div>
          <Box
            sx = {{border: 1, borderColor: BLACK}}
          >
          <p
           onChange = {(sr) => setSr2(sr)}
          >Spread Rate Per Inch: {sr
          
          
          
          } (lbs/sy/in)</p>
          </Box>
          <Box
            sx = {{border: 1, borderColor: BLACK}}
          >
          <p
           
          >Spread Rate: {sr2
          
          
          
          }(lbs/sy)</p>
          </Box>
          <h4>Map Number</h4>
          <TextInput updateValue={setMap} />
          <h4>Name</h4>
          <TextInput/>
          <h4>Station Number</h4>
          <TextInput updateValue={setStation} />
          <h4>Length</h4>  
          <TextInput updateValue={setLength} />
          <h4>Width</h4>
          <TextInput updateValue={setWidth} />
          
              

          </Box>
        
          <PrimaryButton
          sx={{
            textTransform: "none",
            fontWeight: 400,
            fontSize: "12px",
            width: "100%",
            maxWidth: 300,
            m: 2
          }}
          onClick={() => {
            //console.log(milling_data[5]);
            milling_data.push(
              createData(map, tons, yards, depth, fill, station, length, width, area, patched)
            );
          }}
        >
          Add Data 
        </PrimaryButton>
        <PrimaryButton
          sx={{
            textTransform: "none",
            fontWeight: 400,
            fontSize: "12px",
            width: "100%",
            maxWidth: 300,
            bgcolor: PRIMARY_GREEN 
          }}
          onClick={handleClick}
        >
          Calculate 
        </PrimaryButton>
     
          
          <Divider />
          <Box>
              <BasicTable/>





        </Box>

        </Box>

        <Box
          sx = {{
            
                  borderColor: BLACK,
                  marginBottom: "10%",
                  marginRight: "5%",
                  marginTop: "50%"
                
                
                }}
        
        >

             <Box
                 sx = {{border: 1, borderColor: BLACK}}
             >
                <h4>Estimated Tons:</h4>
                 <p
           
                 > {etons
                 }(Tons)</p>
              </Box>


              <Box
                   sx = {{border: 1, borderColor: BLACK, marginBottom: 2}}
             >
                <h4>Square Yards:</h4>
                 <p
           
                 > {ayards
              
              } (Yards ^ 2)</p>
             </Box>

      


        </Box>


      
    






       








       



        
      </MainBody>
    </>
  );
}