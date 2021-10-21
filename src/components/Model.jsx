import React from 'react';

import '../styles/model.css';
import Steps from './Steps.jsx';
import ModelInfoForm from './ModelInfoForm';
import SaveButton from './SaveButton';
import ModelPicture from './ModelPicture';
import { useModelStore } from '../modelContext';
import { useObserver } from 'mobx-react';
import ModelCard from './ModelCard';



export default function Model() {
  const modelStore = useModelStore()
  const model = modelStore.model
  const pictureURL = model.picture.url
  const coverURL = model.cover.url
  const fieldRef = React.useRef(null);
  React.useEffect(() => {
      fieldRef.current.scrollIntoView({
        behavior: "smooth",
      });
  }, [model]);
  
  return useObserver(() => (
    <div id="Model" className="field" ref={fieldRef}>
      <SaveButton />
      <ModelCard name={model.name} />
      <ModelInfoForm model={model}/>
      <ModelPicture pictureURL={pictureURL} coverURL={coverURL} />
      <Steps model={model} />
    </div>
  ));
}
