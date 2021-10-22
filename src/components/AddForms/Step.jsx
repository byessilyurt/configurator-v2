import React, {useState} from 'react';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OptionGroup from './OptionGroup';
import { Button } from '@material-ui/core';

function Step(props) {
  const model = props.model
  const steps = model.steps
  const [stepInfo, setStepInfo] = useState({
    name:"",
    title:"",
    type:"",
    sorting:undefined,
    required:false,
  })
  return (
    <div>
      <Button variant="outlined" style={{ backgroundColor: "lightyellow" ,float: "right" }} onClick={()=>{steps.push(stepInfo); setStepInfo({name:"", title:"", type:"", required:false, sorting:"",})}}> Save </Button>
      <Typography variant="h5" component="h1" style={{ margin: "10px 10px" }}>Add New Step</Typography>
      <div className="step-info-container">
        <TextField id="standard-basic" label="Name" value={stepInfo.name} onChange={(e) => {setStepInfo({...stepInfo,name:e.target.value})}} variant="outlined">
        </TextField>
        <TextField id="standard-basic" label="Title" value={stepInfo.title} onChange={(e) => {setStepInfo({...stepInfo,title:e.target.value})}} variant="outlined" >
        </TextField>
        <FormControl>
          <InputLabel id="type">Type</InputLabel>
          <Select
            labelId="type"
            id="demo-simple-select-helper"
            label="Age"
            value={stepInfo.title}
            onChange={(e)=>{setStepInfo({...stepInfo,type:e.target.value})}}
          >
            <MenuItem value={"Image"}>Image</MenuItem>
            <MenuItem value={"Grid"}>Grid</MenuItem>
          </Select>
        </FormControl>
        <TextField id="standard-basic" label="Sorting" type="number" value={stepInfo.sorting} onChange={(e) => setStepInfo({...stepInfo,sorting:e.target.value})} variant="outlined">
        </TextField>
        <div className="form-control-label-container">
          <FormControlLabel className="form-control-label" label="Required" value={stepInfo.required} labelPlacement="top" control={<Switch onClick={(e, checked) => {setStepInfo({...stepInfo,required:e.target.value})}} />} />
        </div>
      </div>
      <OptionGroup />
    </div>
  )
}

export default Step
