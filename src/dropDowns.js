import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import  {spread_rate} from "./mData";

const materials = [
 {
    value: 100,
    label: 'SA-1',
  },
  {
    value: 110,
    label: 'S4.75A'
  },
  {
    value: 110,
    lavel: 'SF9.5A'
  },
  {
    value: 112,
    label: 'S9.5B',

  },
  {
    value: 112,
    label: 'S9.5C'
  },
  {
    value: 112,
    label: 'S9.5D'
  },
  {
    value: 112,
    label: 'S12.5C'
  },
  {
    value: 112,
    label: 'S12.5D'
  },

  {
    value: 114,
    label: 'I19.0B',
  },
  {
    value: 114, 
    label: 'I19.0C'
  },
  {
    value: 114,
    label: 'I19.0D'
  },
  {
    value: 114,
    label: 'B25.0B'
  },
  {
    value: 114,
    label: 'B25.0C',
  },
];

export default function SelectTextFields() {
  const [material, setMaterial] = React.useState(100);

  const handleChange = (event) => {
    setMaterial(event.target.value);
    
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          id="outlined-select-currency"
          select
          label="Select"
          value={material}
          onChange={handleChange}
          helperText="Please select your Material"
        >
          {materials.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
            
            
          ),
          //console.log(spread_rate),
          spread_rate.push(material),
          spread_rate.shift()
          
          

          //spread_rate.push(currency)
          
          )}
        </TextField>
        
      </div>
    </Box>
    
  );
}
