import { Fab, Zoom } from "@mui/material";
import React from "react";
import "../styles/modelCard.css";

function ModelCard(props) {
  const modelName = props.name;
  return (
    <div className="model-card-container">
      <Zoom in={true} timeout={{ enter: 500, exit: 500 }} unmountOnExit>
        <Fab
          variant="extended"
          disabled
          className="model-card"
          size="large"
          style={{
            position: "fixed",
            color: "#3F51B5",
            backgroundColor: "white",
            zIndex: 3000,
            top: 8,
            left: 20,
          }}
        >
          Editing {modelName}
        </Fab>
      </Zoom>
    </div>
  );
}
export default ModelCard;
