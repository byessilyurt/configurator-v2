export function createModelStore() {
  return {
    model: [],
    updateModel(model) {
      this.model = model;
    },
    updateModelDetail(field, value) {
      this.model[field] = value;
    },
    updateModelDetailOneSubfield(field, subField, value) {
      this.model[field][subField] = value;
    },
    updateStepDetail(step, field, value) {
      this.model.steps.find((el) => el.id === step.id)[field] = value;
    },
    updateOptionGroupDetail(step, option_group, field, value) {
      this.model.steps
        .find((el) => el.id === step)
        .option_groups.find((el) => el.id === option_group.id)[field] = value;
    },
    updateOptionDetail(step, option_group, option, field, value) {
      this.model.steps
        .find((el) => el.id === step)
        .option_groups.find((el) => el.id === option_group.id)
        .options.find((el) => el.id === option.id)[field] = value;
    },
    addStep(stepInfo) {
      this.model.steps.push(stepInfo);
    },
    addOptionGroup(stepID, optionGroupInfo) {
      this.model.steps
        .find((el) => el.id === stepID)
        .option_groups.push(optionGroupInfo);
    },
    removeOptionGroup(step, optionGroup) {
      const og = this.model.steps
        .find((el) => el.id === step.id)
        .option_groups.find((el) => el.id === optionGroup.id);
      const index = this.model.steps
        .find((el) => el.id === step.id)
        .option_groups.findIndex((el) => el.id === og.id);
      if (index > -1) {
        this.model.steps.find((el) => el.id === step.id).option_groups.slice(index, 1);
        console.log(this.model.steps.find((el) => el.id === step.id).option_groups);
      } else {
        console.log("index error" + index);
      }
    },
  };
}
