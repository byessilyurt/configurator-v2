import React, { useState } from 'react'
import { Button } from "@material-ui/core";
import AddIcon from '@mui/icons-material/Add';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import OptionGroupInfo from './OptionGroupInfo';
import OptionsTable from './OptionsTable';




function OptionGroup() {
  const [optionGroupCount, setOptionGroupCount] = useState(0)
  const buttonColor = optionGroupCount > 0 ? "#3F51B5" : "#fafafa"

  const showAccordions = () => {
    let accordions = []
    for (let i = 0; i < optionGroupCount; i++) {
      accordions.push(
        <Accordion className="accordion-option-groups">
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            sx={{ border: "none", outline: "none" }}
          >
            <Typography className="option-group-title">OPTION GROUP TITLE {i + 1}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <OptionGroupInfo />
            <OptionsTable />
          </AccordionDetails>
        </Accordion>
      )
    }
    return accordions || null;
  }

  const styles = {
    buttonStyles: {
      float: "left",
      marginRight: "0px",
      marginTop: "10px",
      color: "inherit",
      backgroundColor: "white",
      borderColor: `${buttonColor}`,
      boxShadow: "none",
      border: "0.7px solid #ccc"
    },
    iconStyles: {
      color: "#3F51B5"
    }
  }
  return (
    <div>
      <div>
        {showAccordions()}
      </div>
      <Button variant="contained"
        endIcon={<AddIcon style={styles.iconStyles} />}
        style={styles.buttonStyles}
        onClick={() => { setOptionGroupCount((prev) => prev = prev + 1); console.log(optionGroupCount) }}
      >
        Add Option Group
      </Button>

    </div>
  )
}

export default OptionGroup
