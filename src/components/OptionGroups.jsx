import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Accordion from "@mui/material/Accordion";
import AccordionDetails from "@mui/material/AccordionDetails";
import AccordionSummary from "@mui/material/AccordionSummary";
import Typography from "@mui/material/Typography";
import * as React from "react";
import "../styles/optionGroups.css";
import OptionGroupInfoForm from "./OptionGroupInfoForm";
import Options from "./Options.jsx";

export default function OptionGroups(props) {
  const step = props.step;
  const model = props.model;
  const stepInStore = model.steps.find((el) => el.id === step.id);
  return (
    <div style={{width:"96%", margin:"auto"}}>
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
                  <Typography className="option-group-title">
                    {optionGroupInStore.title.toLowerCase()}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <OptionGroupInfoForm option_group={optionGroupInStore} />
                  <Options option_group={optionGroupInStore} model={model} />
                </AccordionDetails>
              </Accordion>
            </div>
          );
        })}
    </div>
  );
}
