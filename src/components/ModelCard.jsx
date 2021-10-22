import React from 'react'
import { Zoom } from '@mui/material';
import { Fab } from '@mui/material';

function ModelCard(props) {
  const modelName = props.name
  return (
    <div className="model-card">
     <Zoom in={true} timeout={{ enter: 500, exit: 500 }} unmountOnExit>
        <Fab variant="extended"  disabled size="large" style={{position:"fixed",color:"#3F51B5",backgroundColor:"white",zIndex:3000, top:8, marginLeft:"63%"}}>
          Editing {modelName}
        </Fab>
      </Zoom>
    </div>
  )
}
export default ModelCard
