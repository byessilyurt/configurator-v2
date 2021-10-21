import { useObserver } from 'mobx-react'
import React, { useState } from 'react'
import { Card, Typography } from '@material-ui/core';
import { useModelStore } from '../modelContext';
import Button from '@mui/material/Button';

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
        <div style={{ width: "90%" }}>
          <Typography style={{ float: "left" }}>Picture </Typography>
          <label htmlFor="upload-picture" style={{float:"right"}}>
            <input id="upload-picture" type="file" onChange={pictureChangedHandler} style={{display:"none"}} />
            <Button variant="contained" color="inherit" component="span">
              Upload Picture
            </Button>
          </label>
        </div>
        <img src={`https://api.nimbusflorida.theonemarineturkey.com/${pictureURL}`} alt="picture">
        </img>
      </div>
      <div>
        <div style={{ width: "90%" }}>
          <Typography style={{ float: "left" }}>Cover </Typography>
          <label htmlFor="upload-cover"  style={{float:"right"}}>
            <input id="upload-cover" type="file" style={{display:"none"}} />
            <Button variant="contained" color="inherit" component="span">
              Upload Cover
            </Button>
          </label>
        </div>
        <img src={`https://api.nimbusflorida.theonemarineturkey.com/${coverURL}`} alt="cover">
        </img>
      </div>
    </Card>
  ))
}
export default ModelPicture
