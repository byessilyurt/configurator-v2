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
  };
}
