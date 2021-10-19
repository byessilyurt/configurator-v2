import React from 'react'
import { Fab, Zoom } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";

import { useModelStore } from '.././modelContext';
import axios from 'axios';

function SaveButton() {
  const modelStore = useModelStore()
  const model = modelStore.model
  const handleClick = (model) => {
    const response = axios.put("", model)
  }

  return (
    <div>
      <Zoom in={true} timeout={{ enter: 500, exit: 500 }} unmountOnExit>
        <Fab onClick={handleClick(model)} color="primary" variant="extended" size="large" style={{position:"fixed",zIndex:1, bottom:40, marginLeft:"70%"}}>
          <SaveIcon/>
          Save
        </Fab>
      </Zoom>
    </div>
  )
}

export default SaveButton
