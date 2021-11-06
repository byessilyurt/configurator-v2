import { TextField } from "@material-ui/core";
import EditIcon from "@mui/icons-material/Edit";
import { IconButton } from "@mui/material";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import FormControlLabel from "@mui/material/FormControlLabel";
import Switch from "@mui/material/Switch";
import { useObserver } from "mobx-react";
import * as React from "react";
import "../../styles/optionEditModal.css";
import Dependency from "../Dependency";
import PriceSelect from "../PriceSelect";
import RelatedOptions from "../RelatedOptions";
import { useModelStore } from "../../modelContext";
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';


export default function OptionEditModal(props) {
  const modelStore = useModelStore();
  const model = modelStore.model;
  const option_group = props.option_group;
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const descriptionElementRef = React.useRef(null);
  React.useEffect(() => {
    if (open) {
      const { current: descriptionElement } = descriptionElementRef;
      if (descriptionElement !== null) {
        descriptionElement.focus();
      }
    }
  }, [open]);
  return useObserver(() => (
    <div>
      <IconButton aria-label="edit" onClick={handleClickOpen()}>
        <AddCircleOutlineIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
        <DialogTitle id="scroll-dialog-title">
        Title
        </DialogTitle>
        <DialogContent>
          <div>
            <div>
              <h4 style={{ marginTop: "3px", marginBottom: "3px" }}>
                Option Picture
              </h4>
            </div>
            <img
              alt="option-img"
              className="option-img"
            />
          </div>
          
            <div>
              <div>
                <h5> Cover Picture </h5>
              </div>
              <img
                alt="option-img"
                className="option-img"
              />
            </div>
          <div className="option-modal-container">
            <TextField
              label="ID"
              value={""}
              disabled
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Title"
              value={""}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Name"
              value={""}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Sorting"
              type="number"
              onWheel={(e) => e.target.blur()}
              value={""}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
            {/* <PriceSelect option_group={option_group} option={option} /> */}
            <TextField
              label="Description"
              onChange={(e) => {
              }}
              value={""}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
          </div>
          <div className="related-dependency-container">
            {/* <RelatedOptions optionInStore={optionInStore} steps={model.steps} />
            <Dependency optionInStore={optionInStore} steps={model.steps} /> */}
          </div>
          <div style={{ margin: 20 }}></div>
          <div className="form-control-label-container">
            <FormControlLabel
              className="form-control-label"
              label="Required"
              labelPlacement="top"
              control={
                <Switch
                  checked={false}
                  onChange={(e, checked) => {
                  }}
                />
              }
            />
            <FormControlLabel
              className="form-control-label"
              label="Selected"
              labelPlacement="top"
              control={
                <Switch
                  checked={true}
                  onChange={(e, checked) => {
                  }}
                />
              }
            />
            <FormControlLabel
              className="form-control-label"
              label="Hidden"
              labelPlacement="top"
              control={
                <Switch
                  checked={false}
                  onChange={(e, checked) => {

                  }}
                />
              }
            />
            <FormControlLabel
              className="form-control-label"
              label="Image Top"
              labelPlacement="top"
              control={
                <Switch
                  checked={true}
                  onChange={(e, checked) => {
                  }}
                />
              }
            />
            <FormControlLabel
              className="form-control-label"
              label="Additional"
              labelPlacement="top"
              control={
                <Switch
                  checked={false}
                  onChange={(e, checked) => {
                  }}
                />
              }
            />
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  ));
}
