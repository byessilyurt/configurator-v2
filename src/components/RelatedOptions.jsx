import React, { useEffect } from "react";
import Select from "react-select";

const RelatedOptions = (props) => {
  const steps = props.steps;
  const optionInStore = props.optionInStore;
  const allOptionsInModel = [];
  let relatedOptionsInStore = [];
  /* FINDS RELATED OPTIONS IN A MODEL, not working. 
  const findDefaultVal = () => {
    if (relatedOptionsInStore) {
      relatedOptionsInStore.map((relOp) => {
        allOptionsInModel.find((allOp) => {
          allOp.title === relOp.title && setDefaultVal([...defaultVal, allOp]);
        });
      });
    }
  };
*/
  const getAllOptionsInModel = () => {
    steps.map((step) => {
      if (step.option_groups) {
        step.option_groups.map((option_group) => {
          option_group.options.map((option) => {
            allOptionsInModel.push(option);
          });
        });
      }
    });
  };
  const getRelatedOptionsInStore = () => {
    try {
      optionInStore.related_option.options.map((option) => {
        relatedOptionsInStore.push(option);
      });
    } catch {
      optionInStore.related_option = {
        options: {},
      };
      console.log("no related option");
    }
  };
  useEffect(() => {
    getAllOptionsInModel();
    getRelatedOptionsInStore();
    return {};
  }, []);
  const handleChange = (selectedOptions) => {
    if (optionInStore.related_option != null)
      optionInStore.related_option.options = selectedOptions;
    //console.log(optionInStore.related_option.options)
    return null;
  };

  return (
    <Select
      isMulti
      onChange={(e) => handleChange(e)}
      backspaceRemovesValue
      placeholder={"Related Options"}
      getOptionLabel={(option) => option.title}
      getOptionValue={(option) => option.id}
      options={allOptionsInModel}
      defaultValue={"WHITE HULL"}
    />
  );
};

export default RelatedOptions;
