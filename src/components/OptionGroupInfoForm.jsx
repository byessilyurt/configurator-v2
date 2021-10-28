import Card from "@material-ui/core/Card";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Switch from "@mui/material/Switch";
import TextField from "@mui/material/TextField";
import { useObserver } from "mobx-react";
import "../styles/optionGroupInfoForm.css";
import { useModelStore } from "../modelContext";

function OptionGroupInfoForm(props) {
  const modelStore = useModelStore();
  const updateOptionGroupDetail = modelStore.updateOptionGroupDetail;
  const option_group = props.option_group;
  return useObserver(() => (
    <Card
      className="card"
      style={{
        marginLeft: "0px",
        marginTop: "10px",
        outline: "none",
        boxShadow: "none",
      }}
    >
      <div className="option-group-info-container">
        <TextField
          className="option-group-form"
          label="ID"
          value={option_group.id}
          disabled
          variant="outlined"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          className="option-group-form"
          label="Name"
          onChange={(e) => {
            updateOptionGroupDetail(
              option_group.step,
              option_group,
              "name",
              e.target.value
            );
          }}
          value={option_group.name}
          variant="outlined"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          className="option-group-form"
          label="Title"
          onChange={(e) => {
            updateOptionGroupDetail(
              option_group.step,
              option_group,
              "title",
              e.target.value
            );
          }}
          value={option_group.title}
          variant="outlined"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          className="option-group-form"
          type="number"
          label="Grid Size"
          onChange={(e) => {
            updateOptionGroupDetail(
              option_group.step,
              option_group,
              "grid_size",
              e.target.value
            );
          }}
          value={option_group.grid_size}
          variant="outlined"
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          className="option-group-form"
          type="number"
          label="Sorting"
          onChange={(e) => {
            updateOptionGroupDetail(
              option_group.step,
              option_group,
              "sorting",
              e.target.value
            );
          }}
          value={option_group.sorting}
          variant="outlined"
          InputLabelProps={{ shrink: true }}
        />
        <FormControl>
          <InputLabel id="type">Type</InputLabel>
          <Select
            labelId="type"
            id="demo-simple-select-helper"
            value={option_group.type}
            label="Age"
            onChange={(e) => {
              updateOptionGroupDetail(
                option_group.step,
                option_group,
                "type",
                e.target.value
              );
            }}          >
            <MenuItem value={"single"}>Single</MenuItem>
            <MenuItem value={"multi"}>Multi</MenuItem>
            <MenuItem value={"singleImage"}>Single Image</MenuItem>
            <MenuItem value={"multiImage"}>Multi Image</MenuItem>
            <MenuItem value={"picker"}>Picker</MenuItem>
          </Select>
        </FormControl>
        <div className="form-control-label-container">
          <FormControlLabel
            className="form-control-label"
            label="Required"
            labelPlacement="top"
            control={
              <Switch
                checked={option_group.required}
                onChange={(e,checked) => {
                  updateOptionGroupDetail(
                    option_group.step,
                    option_group,
                    "required",
                    e.target.checked
                  );
                }}
              />
            }
          />
          <FormControlLabel
            className="form-control-label"
            label="Hide Title"
            labelPlacement="top"
            control={
              <Switch
                checked={option_group.hide_title}
                onChange={(e,checked) => {
                  updateOptionGroupDetail(
                    option_group.step,
                    option_group,
                    "hide_title",
                    e.target.checked
                  );
                }}
              />
            }
          />
          <FormControlLabel
            className="form-control-label"
            label="Has Additional"
            labelPlacement="top"
            control={
              <Switch
                checked={option_group.has_additional}
                onChange={(e,checked) => {
                  updateOptionGroupDetail(
                    option_group.step,
                    option_group,
                    "has_additional",
                    e.target.checked
                  );
                }}
              />
            }
          />
        </div>
        <TextField
          className="option-group-form"
          label="Description"
          onChange={(e) => {
            updateOptionGroupDetail(
              option_group.step,
              option_group,
              "description",
              e.target.value
            );
          }}
          value={option_group.description}
          variant="outlined"
          InputLabelProps={{ shrink: true }}
          multiline
          rows={4}
        />
        <div>
          <TextField
            className="option-group-form"
            label="Group Title"
            onChange={(e) => {
              updateOptionGroupDetail(
                option_group.step,
                option_group,
                "group_title",
                e.target.value
              );
            }}
            value={option_group.group_title}
            variant="outlined"
            InputLabelProps={{ shrink: true }}
          />
          <FormControlLabel
            className="form-control-label"
            label="Show Group Title"
            labelPlacement="end"
            control={
              <Switch
                checked={option_group.show_group_title}
                onChange={(e,checked) => {
                  updateOptionGroupDetail(
                    option_group.step,
                    option_group,
                    "show_group_title",
                    e.target.checked
                  );
                }}
              />
            }
          />
        </div>
      </div>
    </Card>
  ));
}
export default OptionGroupInfoForm;
