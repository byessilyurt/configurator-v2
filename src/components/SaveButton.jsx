import { Fab, Zoom } from "@material-ui/core";
import SaveIcon from "@material-ui/icons/Save";
import axios from "axios";
import React from "react";
import { useModelStore } from ".././modelContext";

function SaveButton() {
  const modelStore = useModelStore();
  const model = modelStore.model;
  const modelInfo = {
    slug: model.slug,
    id: model.id,
    name: model.name,
    flat_name: model.flat_name,
    sorting: model.sorting,
    standards: model.standards,
    standards_rich: model.standards_rich,
    standard_spec: {
      passengers: model.standard_spec.passengers,
      beam: model.standard_spec.beam,
      draft: model.standard_spec.draft,
      displacement: model.standard_spec.displacement,
      berth: model.standard_spec.berth,
    },
  };

  const handleClick = async (model) => {
    await axios
      .post(`http://localhost:8000/models/`, modelInfo)
      .then((response) => console.log(response.data));
    model.steps.map(async (step) => {
      await axios
        .post("http://localhost:8000/steps/", step)
        .then((response) => console.log(response));
      step.option_groups.map(async (option_group) => {
        await axios
          .post("http://localhost:8000/option-groups/", option_group)
          .then((response) => console.log(response));
        option_group.options.map(async (option) => {
          await axios
            .post("http://localhost:8000/options/", option)
            .then((response) => console.log(response));
        });
      });
    });
    window.location.reload();
  };
  return (
    <div>
      <Zoom in={true} timeout={{ enter: 500, exit: 500 }} unmountOnExit>
        <Fab
          onClick={() => handleClick(model)}
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
