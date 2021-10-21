import { useObserver } from 'mobx-react'
import React from 'react'
import TextField from '@mui/material/TextField';
import { Card, Typography } from '@material-ui/core';

function ModelInfoForm(props) {
  const model = props.model
  return useObserver(() => (
    <Card className="card model-info-container">
      <Typography style={{ marginBottom: "20px" }}> <b style={{ fontSize: "16px" }}> Edit Model Info </b> </Typography>
      <div></div>
      <div></div>
      <TextField className="model-info" label="ID" disabled variant="outlined" value={model.id}>
      </TextField>
      <TextField className="model-info" label="Slug" variant="outlined" onChange={(e) => { model.slug = e.target.value }} value={model.slug}>
      </TextField>
      <TextField className="model-info" label="Name" variant="outlined" onChange={(e) => { model.name = e.target.value }} value={model.name}>
      </TextField>
      <TextField className="model-info" label="Flat Name" variant="outlined" onChange={(e) => { model.flat_name = e.target.value }} value={model.flat_name}>
      </TextField>
      <TextField className="model-info" label="Sorting" variant="outlined" type="number" onChange={(e) => { model.sorting = e.target.value }} value={model.sorting}>
      </TextField>
      <br />
      <TextField className="model-info" label="Standards" rows={4} multiline variant="outlined" onChange={(e) => { model.standards = e.target.value }} value={model.standards}>
      </TextField>
      <TextField className="model-info" label="Standart Specifications" rows={4} multiline variant="outlined" onChange={(e) => { model.standards_rich = e.target.value }} value={model.standards_rich}>
      </TextField>
      <br />
      <TextField className="spec-info" label="Passengers" variant="outlined" onChange={(e) => { model.standard_spec.passengers = e.target.value }} value={model.standard_spec.passengers}>
      </TextField>
      <TextField className="spec-info" label="Beam" variant="outlined" onChange={(e) => { model.standard_spec.beam = e.target.value }} value={model.standard_spec.beam}>
      </TextField>
      <TextField className="spec-info" label="Draft" variant="outlined" onChange={(e) => { model.standard_spec.draft = e.target.value }} value={model.standard_spec.draft}>
      </TextField>
      <TextField className="spec-info" label="Displacement" variant="outlined" onChange={(e) => { model.standard_spec.displacement = e.target.value }} value={model.standard_spec.displacement}>
      </TextField>
      <TextField className="spec-info" label="Berth" variant="outlined" onChange={(e) => { model.standard_spec.berth = e.target.value }} value={model.standard_spec.berth}>
      </TextField>
    </Card>
  ))
}
export default ModelInfoForm
