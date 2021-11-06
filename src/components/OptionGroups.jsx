import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import * as React from "react";
import "../styles/optionGroups.css";
import OptionGroupInfoForm from "./OptionGroupInfoForm";
import Options from "./Options.jsx";
import OptionGroupAdd from "./AddForms/OptionGroupAdd";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { useModelStore } from "../modelContext";

export default function OptionGroups(props) {
  const step = props.step;
  const modelStore = useModelStore();
  const model = modelStore.model;
  const removeOptionGroup = modelStore.removeOptionGroup;
  const stepInStore = model.steps.find((el) => el.id === step.id);
  return (
    <div style={{ width: "96%", margin: "auto" }}>
      <Typography style={{ marginBottom: "20px" }}>
        <b style={{ fontSize: "16px" }}> Option Groups </b>
      </Typography>
      {step.option_groups !== undefined &&
        step.option_groups.map((option_group) => {
          const optionGroupInStore = stepInStore.option_groups.find(
            (el) => el.id === option_group.id
          );
          return (
            <div>
              <Accordion className="accordion-option-groups">
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  sx={{ border: "none", outline: "none" }}
                >
                  <Typography
                    className="option-group-title"
                    style={{ margin: "auto" }}
                  >
                    {optionGroupInStore.title.length > 0
                      ? optionGroupInStore.title.toLowerCase()
                      : "Type title"}
                  </Typography>
                  <IconButton
                    aria-label="delete"
                    onClick={(event) => {
                      event.stopPropagation();
                      removeOptionGroup(
                        step,
                        step.option_groups.find(
                          (el) => el.id === optionGroupInStore.id
                        )
                      );
                    }}
                  >
                    <DeleteIcon />
                  </IconButton>
                </AccordionSummary>
                <AccordionDetails>
                  <OptionGroupInfoForm option_group={optionGroupInStore} />
                  <Options option_group={optionGroupInStore} model={model} />
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })}
      <OptionGroupAdd step={stepInStore} />
    </div>
  );
}
