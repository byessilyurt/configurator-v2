import { Card, Typography } from "@material-ui/core";
import TextField from "@mui/material/TextField";
import { useObserver } from "mobx-react";
import React from "react";

function ModelInfoForm(props) {
  const model = props.model;
  return useObserver(() => (
    <Card>
      <div className="card model-info-container">
        <Typography style={{ marginBottom: "20px" }}>
          {" "}
          <b style={{ fontSize: "16px" }}> Edit Model Info </b>{" "}
        </Typography>
        <div></div>
        <div></div>
        <TextField
          className="model-info"
          label="ID"
          disabled
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          value={model.id}
        ></TextField>
        <TextField
          className="model-info"
          label="Slug"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          onChange={(e) => {
            model.slug = e.target.value;
          }}
          value={model.slug}
        ></TextField>
        <TextField
          className="model-info"
          label="Name"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          onChange={(e) => {
            model.name = e.target.value;
          }}
          value={model.name}
        ></TextField>
        <TextField
          className="model-info"
          label="Flat Name"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          onChange={(e) => {
            model.flat_name = e.target.value;
          }}
          value={model.flat_name}
        ></TextField>
        <TextField
          className="model-info"
          label="Sorting"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          type="number"
          onChange={(e) => {
            model.sorting = e.target.value;
          }}
          value={model.sorting}
        ></TextField>
        <TextField
          className="model-info"
          label="Starting From"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          type="number"
          onChange={(e) => {
            model.starting_from.usd = e.target.value;
          }}
          value={model.starting_from.usd}
        ></TextField>
        <TextField
          className="model-info"
          label="Standards"
          rows={4}
          multiline
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          onChange={(e) => {
            model.standards = e.target.value;
          }}
          value={model.standards}
        ></TextField>
        <TextField
          className="model-info"
          label="Standard Rich"
          rows={4}
          multiline
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          onChange={(e) => {
            model.standards_rich = e.target.value;
          }}
          value={model.standards_rich}
        ></TextField>
        <TextField
          className="model-info"
          label="Prefix"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          onChange={(e) => {
            model.prefix = e.target.value;
          }}
          value={model.prefix}
        ></TextField>
      </div>
      <div className="card model-info-container">
        <Typography style={{ marginBottom: "5px" }}>
          Standard Specifications
        </Typography>
        <div></div>
        <div></div>
        <TextField
          className="spec-info"
          label="Passengers"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          onChange={(e) => {
            model.standard_spec.passengers = e.target.value;
          }}
          value={model.standard_spec.passengers}
        ></TextField>
        <TextField
          className="spec-info"
          label="Beam"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          onChange={(e) => {
            model.standard_spec.beam = e.target.value;
          }}
          value={model.standard_spec.beam}
        ></TextField>
        <TextField
          className="spec-info"
          label="Draft"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          onChange={(e) => {
            model.standard_spec.draft = e.target.value;
          }}
          value={model.standard_spec.draft}
        ></TextField>
        <TextField
          className="spec-info"
          label="Displacement"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          onChange={(e) => {
            model.standard_spec.displacement = e.target.value;
          }}
          value={model.standard_spec.displacement}
        ></TextField>
        <TextField
          className="spec-info"
          label="Berth"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          onChange={(e) => {
            model.standard_spec.berth = e.target.value;
          }}
          value={model.standard_spec.berth}
        ></TextField>
        <TextField
          className="spec-info"
          label="Fuel"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          onChange={(e) => {
            model.standard_spec.fuel = e.target.value;
          }}
          value={model.standard_spec.fuel}
        ></TextField>
        <TextField
          className="spec-info"
          label="Classification"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          onChange={(e) => {
            model.standard_spec.classification = e.target.value;
          }}
          value={model.standard_spec.classification}
        ></TextField>
        <TextField
          className="spec-info"
          label="Speed"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          onChange={(e) => {
            model.standard_spec.speed = e.target.value;
          }}
          value={model.standard_spec.speed}
        ></TextField>
        <TextField
          className="spec-info"
          label="Range"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          onChange={(e) => {
            model.standard_spec.range = e.target.value;
          }}
          value={model.standard_spec.range}
        ></TextField>
      </div>
      <div className="card model-info-container">
        <Typography style={{ marginBottom: "5px" }}>Engine 1</Typography>
        <div></div>
        <div></div>
        <TextField
          className="spec-info"
          label="Type"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          onChange={(e) => {
            model.standard_spec.engine1_type = e.target.value;
          }}
          value={model.standard_spec.engine1_type}
        ></TextField>
        <TextField
          className="spec-info"
          label="Propulsion"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          onChange={(e) => {
            model.standard_spec.engine1_propulsion = e.target.value;
          }}
          value={model.standard_spec.engine1_propulsion}
        ></TextField>
        <TextField
          className="spec-info"
          label="Fuel Type"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          onChange={(e) => {
            model.standard_spec.engine1_fueltype = e.target.value;
          }}
          value={model.standard_spec.engine1_fueltype}
        ></TextField>
        <TextField
          className="spec-info"
          label="Engine"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          onChange={(e) => {
            model.standard_spec.engine1_engine = e.target.value;
          }}
          value={model.standard_spec.engine1_engine}
        ></TextField>
        <TextField
          className="spec-info"
          label="Speed"
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          onChange={(e) => {
            model.standard_spec.engine1_speed = e.target.value;
          }}
          value={model.standard_spec.engine1_speed}
        ></TextField>
      </div>
    </Card>
  ));
}
export default ModelInfoForm;
