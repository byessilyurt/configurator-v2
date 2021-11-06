import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import { Typography } from "@material-ui/core";
import { useObserver } from "mobx-react";
import React from "react";
import "../styles/stepInfoForm.css";
import { useModelStore } from "../modelContext";

function StepInfoForm(props) {
  const modelStore = useModelStore();
  const model = modelStore.model;
  const updateStepDetail = modelStore.updateStepDetail;

  const step = props.step;
  const stepInStore = model.steps.find((el) => el.id === step.id);

  return useObserver(() => (
    <div>
      <Typography style={{ marginBottom: "20px" }}>
        <b style={{ fontSize: "16px" }}> Edit Step Info </b>
      </Typography>
      <div className="step-info-container">
        <TextField
          id="standard-basic"
          label="Name"
          onChange={(e) => {
            updateStepDetail(stepInStore, "name", e.target.value);
          }}
          value={step.name}
          variant="outlined"
        ></TextField>
        <TextField
          id="standard-basic"
          label="Title"
          onChange={(e) => {
            updateStepDetail(stepInStore, "title", e.target.value);
          }}
          value={step.title}
          variant="outlined"
        ></TextField>
        <FormControl>
          <InputLabel id="type">Type</InputLabel>
          <Select
            labelId="type"
            id="demo-simple-select-helper"
            value={stepInStore.type}
            label="Age"
            onChange={(e) => {
              updateStepDetail(stepInStore, "type", e.target.value);
            }}
          >
            <MenuItem value={"Image"}>Image</MenuItem>
            <MenuItem value={"Grid"}>Grid</MenuItem>
          </Select>
        </FormControl>
        <TextField
          id="standard-basic"
          label="Sorting"
          type="number"
          onChange={(e) => {
            updateStepDetail(stepInStore, "sorting", e.target.value);
          }}
          onWheel={(e) => e.target.blur()}
          value={step.sorting}
          variant="outlined"
        ></TextField>
        <div className="form-control-label-container">
          <FormControlLabel
            className="form-control-label"
            label="Required"
            labelPlacement="top"
            control={
              <Switch
                checked={stepInStore.required}
                onClick={(e) => {
                  updateStepDetail(stepInStore, "required", e.target.checked);
                }}
              />
            }
          />
          <FormControlLabel
            className="form-control-label"
            label="Check Scroll"
            labelPlacement="top"
            control={
              <Switch
                checked={stepInStore.check_scroll}
                onClick={(e) => {
                  updateStepDetail(
                    stepInStore,
                    "check_scroll",
                    e.target.checked
                  );
                }}
              />
            }
          />
        </div>
      </div>
    </div>
  ));
}
export default StepInfoForm;
