import React from "react";

function AddButton(props) {
  const whereToAdd = props.whereToAdd
  const whatStateToAdd = props.whatStateToAdd
  return (
    <div>
      <Button
        variant="outlined"
        style={{ backgroundColor: "white", float: "right" }}
        onClick={() => {
          whereToAdd.push(whatStateToAdd);
          setStepInfo({
            name: "",
            title: "",
            type: "",
            required: false,
            sorting: "",
          });
        }}
      >
        Save
      </Button>
    </div>
  );
}

export default AddButton;
