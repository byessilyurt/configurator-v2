import TextField from '@mui/material/TextField';
import React from 'react';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';

import '../styles/stepInfoForm.css';
import { useObserver } from 'mobx-react';


function StepInfoForm(props) {
  const step = props.step
  const model = props.model
  const stepInStore = model.steps.find(el => el.id === step.id)


  return useObserver(() => (
    <div >
      <h4> {stepInStore.title} </h4>
      <div className="step-info-container">
        <TextField id="standard-basic" label="Name" onChange={(e) => { stepInStore.name = e.target.value }} value={step.name} variant="outlined">
        </TextField>
        <TextField id="standard-basic" label="Title" onChange={(e) => { stepInStore.title = e.target.value }} value={step.title} variant="outlined" >
        </TextField>
        <TextField id="standard-basic" label="Type" onChange={(e) => { stepInStore.type = e.target.value }} value={step.type} variant="outlined">
        </TextField>
        <TextField id="standard-basic" label="Sorting" type="number" onChange={(e) => { stepInStore.sorting = e.target.value }} value={step.sorting} variant="outlined">
        </TextField>
        <div className="form-control-label-container">
        <FormControlLabel className="form-control-label" label="Required" labelPlacement="top" control={<Switch checked={stepInStore.required} onClick={(e,checked) => {stepInStore.required = e.target.checked}}/>}/>
        </div>
      </div>
    </div>
  ))
}


export default StepInfoForm;