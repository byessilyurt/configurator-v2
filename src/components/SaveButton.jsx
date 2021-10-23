import { Fab, Zoom } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import React from "react";
import { useModelStore } from ".././modelContext";

function SaveButton() {
  const modelStore = useModelStore();
  const model = modelStore.model;
  const handleClick = (model) => {
    //const response = await axios.put(``, model)
    // ayrıca models endpoint'ine de istek atmalı. (model info + picture, cover verileriyle)
  };
  return (
    <div>
      <Zoom in={true} timeout={{ enter: 500, exit: 500 }} unmountOnExit>
        <Fab
          onClick={handleClick(model)}
          color="primary"
          variant="extended"
          size="large"
          style={{
            position: "fixed",
            color: "#3F51B5",
            backgroundColor: "white",
            zIndex: 3000,
            top: 8,
            marginLeft: "75%",
          }}
        >
          <SaveIcon />
          Save
        </Fab>
      </Zoom>
    </div>
  );
}
export default SaveButton;
