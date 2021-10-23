import FormControl from "@mui/material/FormControl";
import React, { useEffect } from "react";
import Select from "react-dropdown-select";

function RelatedOption(props) {
  const optionInStore = props.optionInStore;
  const steps = props.steps;
  const allOptionsInModel = [];
  let relatedOptionsInStore = [];
  const getRelatedOptionsInStore = () => {
    if (optionInStore.related_option != null) {
      optionInStore.related_option.options.map((option) => {
        relatedOptionsInStore.push(option);
      });
    }
  };
  const getAllOptionsInModel = () => {
    steps.map((step) => {
      step.option_groups.map((option_group) => {
        option_group.options.map((option) => {
          allOptionsInModel.push(option);
        });
      });
    });
  };
  useEffect(() => {
    getRelatedOptionsInStore();
    getAllOptionsInModel();
    return {};
  }, []);
  // const findMatch = (optionInStore) => {
  //   const match = allOptionsInModel.find(
  //     (option) => option.title === optionInStore.title,
  //   );
  //   return match;
  // };
  // const matchRelated = () => {
  //   let matches = [];
  //   relatedOptionsInStore.map((optionInStore) => {
  //     matches.push(findMatch(optionInStore));
  //   });
  //   return matches;
  // };
  // const values = matchRelated();
  // console.log

  const options = [1, 2, 2, 3, 4, 5, 6, 7, 7, 3];
  return (
    <FormControl>
      <Select
        searchable
        options={allOptionsInModel}
        values={[]}
        onChange={(values) => (relatedOptionsInStore = values)}
      />
    </FormControl>
  );
}
export default RelatedOption;
