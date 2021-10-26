import React, {useEffect} from "react";
import Select from "react-select";


function Dependency(props) {
  const steps = props.steps;
  const optionInStore = props.optionInStore;
  const allOptionsInModel = [];
  let dependentOptionsInStore = [];
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
  const getDependentOptionsInStore = () => {
    try {
      optionInStore.dependency.options.map((option) => {
        dependentOptionsInStore.push(option);
        optionInStore.dependency = {
          options: [],
        };    
      });
    } catch {
      console.log("no dependent option");
    }
  };
  useEffect(() => {
    getAllOptionsInModel();
    getDependentOptionsInStore();
    return {};
  }, []);
  const handleChange = (selectedOptions) => {
    optionInStore.dependency.options = selectedOptions;
    //console.log(optionInStore.dependency.options)
  };
  return (
    <Select
      isMulti
      placeholder={'Dependent Options'}
      onChange={(e) => handleChange(e)}
      backspaceRemovesValue
      getOptionLabel={(option) => option.title}
      getOptionValue={(option) => option.id}
      options={allOptionsInModel}
      defaultValue={"WHITE HULL"}
    />
  );
}
export default Dependency;
