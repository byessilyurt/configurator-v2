export function createModelStore() {
  return {
    model: [],
    updateModel(model) {
      this.model = model;
    },
  };
}
