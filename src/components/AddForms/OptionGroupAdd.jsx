import React, { useState, useLayoutEffect, useRef } from "react";
import { Button } from "@material-ui/core";
import AddIcon from "@mui/icons-material/Add";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import OptionGroupInfoAdd from "./OptionGroupInfoAdd";
import OptionsTableAdd from "./OptionsTableAdd";
import { useModelStore } from "../../modelContext";
import IDGenerator from "../../IDGenerator";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

function OptionGroupAdd(props) {
  const [optionGroupCount, setOptionGroupCount] = useState(0);
  const buttonColor = optionGroupCount > 0 ? "#3F51B5" : "#fafafa";
  const modelStore = useModelStore();
  const model = modelStore.model;
  const removeOptionGroup = modelStore.removeOptionGroup;
  const addOptionGroup = modelStore.addOptionGroup;
  const step = props.step;
  const [ID, setID] = useState(() => {
    const initialID = IDGenerator(model);
    return initialID;
  });
  const [optionGroupInfo, setOptionGroupInfo] = useState({
    id: ID,
    name: "",
    title: "",
    grid_size: "",
    type: "",
    sorting: null,
    description: "",
    group_title: "",
    show_group_title: false,
    required: false,
    hide_title: false,
    has_additional: false,
  });
  const [optionGroupList, setOptionGroupList] = useState([]);

  const ShowAccordions = () => {
    return (
      <Accordion className="accordion-option-groups">
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{ border: "none", outline: "none" }}
        >
          <Typography className="option-group-title" style={{ margin: "auto" }}>
            {step.option_groups.find((el) => el.id === ID).title.length > 0
              ? step.option_groups.find((el) => el.id === ID).title
              : "Type Title"}
          </Typography>
          <IconButton
            aria-label="delete"
            onClick={(event) => {
              event.stopPropagation();
              removeOptionGroup(
                step,
                step.option_groups.find((el) => el.id === ID)
              );
            }}
          >
            <DeleteIcon />
          </IconButton>
        </AccordionSummary>
        <AccordionDetails>
          <OptionGroupInfoAdd ID={ID} step={step} />
          <OptionsTableAdd />
        </AccordionDetails>
      </Accordion>
    );
  };
  const styles = {
    buttonStyles: {
      float: "left",
      marginRight: "0px",
      marginTop: "10px",
      color: "inherit",
      backgroundColor: "white",
      borderColor: `${buttonColor}`,
      boxShadow: "none",
      border: "0.7px solid #ccc",
    },
    iconStyles: {
      color: "#3F51B5",
    },
  };

  return (
    <div>
      {optionGroupList}
      <Button
        variant="contained"
        endIcon={<AddIcon style={styles.iconStyles} />}
        style={styles.buttonStyles}
        onClick={async () => {
          setOptionGroupCount((prev) => (prev = prev + 1));
          let id = IDGenerator(model);
          setID(id);
          setOptionGroupInfo({ ...optionGroupInfo, id: id });
          setOptionGroupList(
            optionGroupList.concat(
              <ShowAccordions key={optionGroupList.length} />
            )
          );
          addOptionGroup(step.id, optionGroupInfo);
        }}
      >
        Add Option Group
      </Button>
    </div>
  );
}

export default OptionGroupAdd;
