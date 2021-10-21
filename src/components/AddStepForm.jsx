import React from 'react';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function AddStepForm() {
  return (
    <div>
      <Typography variant="h5" component="h1" style={{marginTop:"10px"}}>Add New Step</Typography>
    <div className="step-info-container">
      <TextField id="standard-basic" label="Name" onChange={(e) => { }} variant="outlined">
      </TextField>
      <TextField id="standard-basic" label="Title" onChange={(e) => { }} variant="outlined" >
      </TextField>
      <FormControl>
        <InputLabel id="type">Type</InputLabel>
        <Select
          labelId="type"
          id="demo-simple-select-helper"
          label="Age"
        >
          <MenuItem value={"Image"}>Image</MenuItem>
          <MenuItem value={"Grid"}>Grid</MenuItem>
        </Select>
      </FormControl>
      <TextField id="standard-basic" label="Sorting" type="number" onChange={(e) => { }} variant="outlined">
      </TextField>
      <div className="form-control-label-container">
        <FormControlLabel className="form-control-label" label="Required" labelPlacement="top" control={<Switch onClick={(e, checked) => { }} />} />
      </div>
    </div>
    </div>
  )
}

export default AddStepForm
