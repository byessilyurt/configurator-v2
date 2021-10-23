import React, { useEffect } from "react";
import Select from "react-select";

const RelatedOptions = (props) => {
  const steps = props.steps;
  const optionInStore = props.optionInStore;
  const allOptionsInModel = [];
  let relatedOptionsInStore = [];
  const getAllOptionsInModel = () => {
    steps.map((step) => {
      step.option_groups.map((option_group) => {
        option_group.options.map((option) => {
          allOptionsInModel.push(option);
        });
      });
    });
  };
  const getRelatedOptionsInStore = () => {
    if (optionInStore.related_option != null) {
      optionInStore.related_option.options.map((option) => {
        relatedOptionsInStore.push(option);
      });
    } else {
      console.log("no related option");
    }
  };
  useEffect(() => {
    getAllOptionsInModel();
    getRelatedOptionsInStore();
    return {};
  }, []);
  console.log(relatedOptionsInStore);

  return (
    <Select
      isMulti
      getOptionLabel={(option) => option.title}
      getOptionValue={(option) => option.title}
      options={allOptionsInModel}
      defaultValue={(allOptionsInModel[0], allOptionsInModel[5])}
    />
  );
};

export default RelatedOptions;
