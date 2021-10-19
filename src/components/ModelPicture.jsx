import { useObserver } from 'mobx-react'
import React, { useState } from 'react'
import TextField from '@mui/material/TextField';
import { Card, Typography } from '@material-ui/core';
import { useModelStore } from '../modelContext';


function ModelPicture(props) {
  const modelStore = useModelStore()
  const pictureURL = props.pictureURL
  const coverURL = props.coverURL
  const [upload, setUpload] = useState({
    picture: null,
    cover: null,
  })

  const pictureChangedHandler = (event) => {
    setUpload({ selectedFile: event.target.files[0] })
  }
  const pictureUploadHandler = () => {
    const formData = new FormData()
    formData.append(
      'myFile',
      upload.picture,
    )
    console.log(modelStore.model.picture)
    modelStore.model.picture = formData
    console.log(modelStore.model.picture)
  }

  return useObserver(() => (
    <Card className="card image-container">
      <div>
        <Typography>Picture </Typography>
        <img src={`https://api.nimbusflorida.theonemarineturkey.com/${pictureURL}`} alt="picture">
        </img>
        <input type="file" onChange={pictureChangedHandler} />
        <button onClick={pictureUploadHandler}>Upload!</button>

      </div>
      <div>
        <Typography >Cover </Typography>
        <img src={`https://api.nimbusflorida.theonemarineturkey.com/${coverURL}`} alt="cover">
        </img>
      </div>
    </Card>
  ))
}

export default ModelPicture
