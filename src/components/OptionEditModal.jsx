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
import "../styles/optionEditModal.css";
import Dependency from "./Dependency";
import PriceSelect from "./PriceSelect";
import RelatedOptions from "./RelatedOptions";

export default function OptionEditModal(props) {
  const model = props.model;
  const option = props.option;
  const option_group = props.option_group;
  const optionInStore = option_group.options.find((el) => el.id === option.id);
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
        <EditIcon />
      </IconButton>
      <Dialog open={open} onClose={handleClose} fullWidth="true">
        <DialogTitle id="scroll-dialog-title">
          {optionInStore.title}
        </DialogTitle>
        <DialogContent>
          <div>
            <div>
              <h4 style={{ marginTop: "3px", marginBottom: "3px" }}>
                Option Picture
              </h4>
            </div>
            <img
              src={`https://api.nimbusflorida.theonemarineturkey.com/${optionInStore.picture.url}`}
              alt="option-img"
              className="option-img"
            />
          </div>
          {optionInStore.cover_picture && (
            <div>
              <div>
                <h5> Cover Picture </h5>
              </div>
              <img
                src={`https://api.nimbusflorida.theonemarineturkey.com/${optionInStore.cover_picture.url}`}
                alt="option-img"
                className="option-img"
              />
            </div>
          )}
          <div className="option-modal-container">
            <TextField
              label="ID"
              value={optionInStore.id}
              disabled
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Title"
              onChange={(e) => {
                optionInStore.title = e.target.value;
              }}
              value={optionInStore.title}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Name"
              onChange={(e) => {
                optionInStore.name = e.target.value;
              }}
              value={optionInStore.name}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
            <TextField
              label="Sorting"
              type="number"
              onChange={(e) => {
                optionInStore.sorting = e.target.value;
              }}
              value={optionInStore.sorting}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
            <PriceSelect option_group={option_group} option={option} />
            <TextField
              label="Description"
              onChange={(e) => {
                optionInStore.description = e.target.value;
              }}
              value={optionInStore.description}
              variant="outlined"
              InputLabelProps={{ shrink: true }}
            />
            <RelatedOptions optionInStore={optionInStore} steps={model.steps} />
            <Dependency optionInStore={optionInStore} steps={model.steps} />
            <div></div>
            <div className="form-control-label-container">
              <FormControlLabel
                className="form-control-label"
                label="Required"
                labelPlacement="top"
                control={
                  <Switch
                    checked={optionInStore.required}
                    onChange={(e, checked) => {
                      optionInStore.required = e.target.checked;
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
                    checked={optionInStore.selected}
                    onChange={(e, checked) => {
                      optionInStore.selected = e.target.checked;
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
                    checked={optionInStore.hidden}
                    onChange={(e, checked) => {
                      optionInStore.hidden = e.target.checked;
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
                    checked={optionInStore.image_top}
                    onChange={(e, checked) => {
                      optionInStore.image_top = e.target.checked;
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
                    checked={optionInStore.additional}
                    onChange={(e, checked) => {
                      optionInStore.additional = e.target.checked;
                    }}
                  />
                }
              />
            </div>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>OK</Button>
        </DialogActions>
      </Dialog>
    </div>
  ));
}
