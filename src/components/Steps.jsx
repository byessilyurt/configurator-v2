import React, {useState} from "react";
import Card from "@material-ui/core/Card";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { Box,Button } from "@material-ui/core";
import StepInfoForm from './StepInfoForm';
import OptionGroups from "./OptionGroups";
import AddIcon from '@mui/icons-material/Add';
import AddStepForm from './AddStepForm';


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
  const [buttonActive, setButtonActive] = useState(false)
  const buttonColor = buttonActive ? "#3f51b5" :"#fafafa"
  const [newForm, setNewForm] = useState(false)
  function handleChange(event, newValue) {
    setValue(newValue);
  }
  const model = (props.model);
  const buttonStyles = {
  float:"left",
  marginRight:"0px",
  marginTop:"10px",
  backgroundColor:`${buttonColor}`,
  boxShadow:"none" ,
  border:"0.4px solid #ccc"
}
  return (
    <Card className="card" >
      <Button variant="contained"
      endIcon={<AddIcon style={{color:"#3F51B5"}} />}
      style={buttonStyles}
      onClick={() => {setNewForm(true); setValue(null); setButtonActive(true); console.log(buttonActive)}}
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
        {
          model ? model.steps.map((step) => {
            return (
              <Tab label={step.title}
              onClick={() => {setNewForm(false);setButtonActive(false)}}
              />
            )
          })
            :
            (
              <div>
                No data
              </div>
            )}
      </Tabs>
      {newForm ? (<AddStepForm/>) :( 
      model ? model.steps.map((step, index) => {
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
      
      )}
    </Card>
  )
}
