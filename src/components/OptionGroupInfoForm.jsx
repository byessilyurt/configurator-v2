import Card from "@material-ui/core/Card";
import TextField from '@mui/material/TextField';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import '../styles/optionGroupInfoForm.css';
import { useObserver } from 'mobx-react';

function OptionGroupInfoForm(props) {
  const option_group = props.option_group
  const handleChange = (event) => {
    option_group.type = event.target.value;
  };
  return useObserver(() => (
    <Card className="card" style={{ marginLeft: "0px", marginTop: "10px", outline: "none", boxShadow: "none" }}>
      <div className="option-group-info-container">
        <TextField className="option-group-form" label="ID" value={option_group.id} disabled variant="outlined" />
        <TextField className="option-group-form" label="Name" onChange={(e) => { option_group.name = e.target.value }} value={option_group.name} variant="outlined" />
        <TextField className="option-group-form" label="Title" onChange={(e) => { option_group.title = e.target.value }} value={option_group.title} variant="outlined" />
        <TextField className="option-group-form" type="number" label="Grid Size" onChange={(e) => { option_group.grid_size = e.target.value }} value={option_group.grid_size} variant="outlined" />
        <TextField className="option-group-form" label="Has Additional" onChange={(e) => { option_group.has_additional = e.target.value }} value={option_group.has_additional} variant="outlined" />
        <TextField className="option-group-form" type="number" label="Sorting" onChange={(e) => { option_group.sorting = e.target.value }} value={option_group.sorting} variant="outlined" />
        <FormControl>
          <InputLabel id="type">Type</InputLabel>
          <Select
            labelId="type"
            id="demo-simple-select-helper"
            value={option_group.type}
            label="Age"
            onChange={handleChange}
          >
            <MenuItem value={"single"}>Single</MenuItem>
            <MenuItem value={"multi"}>Multi</MenuItem>
            <MenuItem value={"singleImage"}>Single Image</MenuItem>
            <MenuItem value={"multiImage"}>Multi Image</MenuItem>
            <MenuItem value={"picker"}>Picker</MenuItem>
          </Select>
        </FormControl>
        <div className="form-control-label-container">
          <FormControlLabel className="form-control-label" label="Required" labelPlacement="start" control={<Switch checked={option_group.required} onChange={(e, checked) => { option_group.required = e.target.checked }} />} />
          <FormControlLabel className="form-control-label" label="Hide Title" labelPlacement="start" control={<Switch checked={option_group.hide_title} onChange={(e, checked) => { option_group.hide_title = e.target.checked }} />} />
        </div>
        <TextField className="option-group-form" label="Description" onChange={(e) => { option_group.description = e.target.value }} value={option_group.description} variant="outlined" multiline rows={4} />
      </div>
    </Card>
  ))
}
export default OptionGroupInfoForm;