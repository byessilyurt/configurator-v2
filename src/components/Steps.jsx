import { Box, Button } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Tab from "@material-ui/core/Tab";
import Tabs from "@material-ui/core/Tabs";
import Typography from "@material-ui/core/Typography";
import AddIcon from "@mui/icons-material/Add";
import React, { useState } from "react";
import StepInfoAdd from "./AddForms/StepInfoAdd";
import OptionGroups from "./OptionGroups";
import StepInfoForm from "./StepInfoForm";

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <Typography
      component="div"
      role="tabpanel"
      hidden={value !== index}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      <Box p={3}>{children}</Box>
    </Typography>
  );
}

export default function Steps(props) {
  const [value, setValue] = useState(0);
  const [buttonActive, setButtonActive] = useState(false);
  const buttonColor = buttonActive ? "#3F51B5" : "#fafafa";
  function handleChange(event, newValue) {
    setValue(newValue);
  }
  const model = props.model;
  const styles = {
    buttonStyles: {
      float: "left",
      marginRight: "20px",
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
    <Card className="card">
      <Button
        variant="contained"
        endIcon={<AddIcon style={styles.iconStyles} />}
        style={styles.buttonStyles}
        onClick={() => {
          setValue(null);
          setButtonActive(true);
        }}
      >
        Add Step
      </Button>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
      >
        {model ? (
          model.steps.map((step) => {
            return (
              <Tab
                label={step.title}
                onClick={() => {
                  setButtonActive(false);
                }}
              />
            );
          })
        ) : (
          <div>No data</div>
        )}
      </Tabs>
      {buttonActive ? (
        <StepInfoAdd />
      ) : model ? (
        model.steps.map((step, index) => {
          return (
            <div key={step.id}>
              {index === value && (
                <>
                  <TabPanel
                    value={value}
                    index={0}
                    style={{ display: index === value ? "block" : "none" }}
                  >
                    <StepInfoForm step={step} model={model} />
                  </TabPanel>
                  <Box style={{ display: index === value ? "block" : "none" }}>
                    <OptionGroups step={step} model={model} />
                  </Box>
                </>
              )}
            </div>
          );
        })
      ) : (
        <div>No data yet.</div>
      )}
    </Card>
  );
}
