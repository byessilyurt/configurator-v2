import { Button } from "@material-ui/core";
import { Typography } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import OptionGroupAdd from "./OptionGroupAdd";
import { useModelStore } from "../../modelContext";
import { useObserver } from "mobx-react-lite";
import IDGenerator from "../../IDGenerator";

function StepInfoAdd() {
  const modelStore = useModelStore();
  const addStep = modelStore.addStep;
  const model = modelStore.model;
  const [stepInfo, setStepInfo] = useState({
    model: `${model}`,
    id: "",
    name: "",
    title: "",
    type: "",
    sorting: undefined,
    required: false,
  });
  return useObserver(() => (
    <div>
      <div className="step-info-container">
        <div style={{ display: "flex" }}>
          <Typography
            variant="h5"
            component="h1"
            style={{ margin: "10px 10px" }}
          >
            Add New Step
          </Typography>
          <Button
            variant="outlined"
            style={{ backgroundColor: "white", float: "right" }}
            onClick={() => {
              addStep(stepInfo);
              setStepInfo({
                name: "",
                title: "",
                type: "",
                required: false,
                sorting: "",
              });
            }}
          >
            Save
          </Button>
        </div>
        <div></div>
        <div></div>
        <TextField
          id="standard-basic"
          label="Name"
          value={24}
          onChange={(e) => {
            setStepInfo({ ...stepInfo, name: e.target.value });
          }}
          variant="outlined"
        ></TextField>
        <TextField
          id="standard-basic"
          label="Title"
          value={stepInfo.title}
          onChange={(e) => {
            setStepInfo({ ...stepInfo, title: e.target.value });
          }}
          variant="outlined"
        ></TextField>
        <FormControl>
          <InputLabel id="type">Type</InputLabel>
          <Select
            labelId="type"
            id="demo-simple-select-helper"
            label="Age"
            value={stepInfo.type}
            onChange={(e) => {
              setStepInfo({ ...stepInfo, type: e.target.value });
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
          value={stepInfo.sorting}
          onChange={(e) =>
            setStepInfo({ ...stepInfo, sorting: e.target.value })
          }
          onWheel={(e) => e.target.blur()}
          autoComplete="off"
          variant="outlined"
        ></TextField>
        <div className="form-control-label-container">
          <FormControlLabel
            className="form-control-label"
            label="Required"
            value={stepInfo.required}
            labelPlacement="top"
            control={
              <Switch
                onClick={(e, checked) => {
                  setStepInfo({ ...stepInfo, required: e.target.value });
                }}
              />
            }
          />
        </div>
      </div>
      <OptionGroupAdd />
    </div>
  ));
}

export default StepInfoAdd;
