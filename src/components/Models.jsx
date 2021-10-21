import { Card, Table, TableBody, TableCell, TableHead, TableRow } from '@mui/material'
import React, { useState, useEffect } from 'react'
import axios from 'axios'
import '../styles/models.css';
import Model from './Model.jsx';
import Loading from './Loading.jsx';
import { useModelStore } from '.././modelContext';

function Models() {
  const [loadingModels, setLoadingModels] = useState(false)
  const [loadingModel, setLoadingModel] = useState(false)
  const [models, setModels] = useState()
  const [clickedModel, setClickedModel] = useState()
  const modelStore = useModelStore()
  useEffect(() => {
    const axiosPosts = async () => {
      setLoadingModels(true)
      const response = await axios("https://api.nimbusflorida.theonemarineturkey.com/models?_sort=sorting:asc")
      setModels(response.data)
      setLoadingModels(false)
    };
    axiosPosts();
  }, []);
  const getModelDetail = async (model) => {
    setLoadingModel(true)
    const response = await axios(`https://api.nimbusflorida.theonemarineturkey.com/models/byslug/${model.slug}`)
    const modelDetail = response.data
    modelStore.updateModel(modelDetail)
    setClickedModel(modelDetail)
    setLoadingModel(false)
  }
  return (
    <div>
      {loadingModels ? (<Loading />) : (
        <Card className="card" >
          <Table>
            <TableHead>
              <TableRow align={"center"} >
                <span style={{ fontSize: "24px" }}> Edit Your <b style={{ fontSize: "24px" }}>Nimbus</b> </span>
              </TableRow>
            </TableHead>
            {loadingModel && <Loading />}
            <TableBody >
              <div className="models-info-container">
                {models &&
                  models.map((model) => {
                    return (
                      <TableCell key={model.id} className="models" onClick={() => {
                        getModelDetail(model)
                        setLoadingModel(true)
                      }}
                      >
                        <div align={"center"}>
                          <img src={`https://api.nimbusflorida.theonemarineturkey.com/${model.picture.url}`} style={{ width: "90%", height: "60px" }} />
                          <div style={{ textAlign: "center", marginTop: "10px" }}>
                            {model.name}
                          </div>
                        </div>
                      </TableCell>
                    )
                  })

                }
              </div>
            </TableBody>
          </Table>
        </Card>
      )}
      {clickedModel && (
        <div>
          <Model />
        </div>)
      }
    </div>
  )
}
export default Models;
