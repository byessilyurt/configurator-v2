import React from "react";
import Card from "@material-ui/core/Card";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Box } from "@material-ui/core";

import StepInfoForm from './StepInfoForm';
import OptionGroups from "./OptionGroups";




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
  const [value, setValue] = React.useState(0);

  function handleChange(event, newValue) {
    setValue(newValue);
  }
  const model = (props.model);


  return (
    <Card className="card">
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        variant="scrollable"
        scrollButtons="auto"
      >
        {
          model ? model.steps.map((step) => {
            return (
              <Tab label={step.title} />
            )
          })
            :
            (
              <div>
                No data
              </div>
            )}
      </Tabs>
      {model ? model.steps.map((step, index) => {
        return (

          <div key={step.id}>
            {index === value && (
              <>
                <TabPanel value={value} index={0} style={{ display: index === value ? 'block' : 'none' }} >
                  <StepInfoForm step={step} model={model} />
                </TabPanel>
                <Typography style={{ marginLeft: "3%", marginTop: "1%", marginBottom: "2%", fontWeight: 600, }}>
                  OPTION GROUPS
                </Typography>
                <Box style={{ display: index === value ? 'block' : 'none' }}>
                  <OptionGroups step={step} model={model} />
                </Box>

              </>
            )}
          </div>

        )
      }) : <div>
        No data yet.
      </div>
      }

    </Card>
  )
}
