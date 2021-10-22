import React from 'react'
import Card from "@material-ui/core/Card";
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function OptionGroupInfo() {
  return (
    <Card className="card" style={{ marginLeft: "0px", marginTop: "10px", outline: "none", boxShadow: "none" }}>
    <div className="option-group-info-container">
      <TextField className="option-group-form" label="ID"  disabled variant="outlined" />
      <TextField className="option-group-form" label="Name" onChange={(e) => {}}  variant="outlined" />
      <TextField className="option-group-form" label="Title" onChange={(e) => {  }}  variant="outlined" />
      <TextField className="option-group-form" type="number" label="Grid Size" onChange={(e) => {  }}  variant="outlined" />
      <TextField className="option-group-form" label="Has Additional" onChange={(e) => {  }}  variant="outlined" />
      <TextField className="option-group-form" type="number" label="Sorting" onChange={(e) => {  }}  variant="outlined" />
      <FormControl>
        <InputLabel id="type">Type</InputLabel>
        <Select
          labelId="type"
          id="demo-simple-select-helper"
         
          label="Age"
          
        >
          <MenuItem value={"single"}>Single</MenuItem>
          <MenuItem value={"multi"}>Multi</MenuItem>
          <MenuItem value={"singleImage"}>Single Image</MenuItem>
          <MenuItem value={"multiImage"}>Multi Image</MenuItem>
          <MenuItem value={"picker"}>Picker</MenuItem>
        </Select>
      </FormControl>
      <div className="form-control-label-container">
        <FormControlLabel className="form-control-label" label="Required" labelPlacement="start" control={<Switch  onChange={(e) => {}} />} />
        <FormControlLabel className="form-control-label" label="Hide Title" labelPlacement="start" control={<Switch  onChange={(e) => {}} />} />
      </div>
      <TextField className="option-group-form" label="Description" onChange={(e) => {}}  variant="outlined" multiline rows={4} />
    </div>
  </Card>
  )
}

export default OptionGroupInfo
