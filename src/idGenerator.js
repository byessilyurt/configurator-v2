const IDGenerator = (mod) => {
  const model = mod
  let currentIDs = [];
  model.steps.map((step) => {
    currentIDs.push(step.id);
    step.option_groups.map((optG) => {
      currentIDs.push(optG)
      if(optG.options !== undefined){
        optG.options.map((opt) => {
          currentIDs.push(opt)
        })
      }
    })
  });
    let randomID;
    do {
      randomID = Math.floor(Math.random() * 10000);
    }
    while (currentIDs.find((el) => el === randomID ))
    return randomID
};

export default IDGenerator