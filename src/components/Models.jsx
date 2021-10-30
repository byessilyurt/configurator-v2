import {
  Card,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useModelStore } from ".././modelContext";
import "../styles/models.css";
import Loading from "./Loading.jsx";
import Model from "./Model.jsx";

function Models() {
  const [loadingModels, setLoadingModels] = useState(false);
  const [loadingModel, setLoadingModel] = useState(false);
  const [models, setModels] = useState();
  const [clickedModel, setClickedModel] = useState();
  const modelStore = useModelStore();
  useEffect(() => {
    const axiosPosts = async () => {
      setLoadingModels(true);
      const response = await axios(
        "https://api.nimbusflorida.theonemarineturkey.com/models?_sort=sorting:asc"
      );
      setModels(response.data);
      setLoadingModels(false);
    };
    axiosPosts();
  }, []);
  const getModelDetail = async (model) => {
    setLoadingModel(true);
    const response = await axios(
      `https://api.nimbusflorida.theonemarineturkey.com/models/byslug/${model.slug}`
    );
    const modelDetail = response.data;
    modelStore.updateModel(modelDetail);
    setClickedModel(modelDetail);
    setLoadingModel(false);
  };
  return (
    <div>
      {loadingModels ? (
        <Loading />
      ) : (
        <div>
          {loadingModel && <Loading />}
          <Card className="card">
            <Table>
              <TableHead>
                <TableRow align="center">
                  <span style={{ fontSize: "24px" }}>
                    Edit Your <b style={{ fontSize: "24px" }}>Nimbus</b>
                  </span>
                </TableRow>
              </TableHead>

              <TableBody>
                <div className="models-info-container">
                  {models &&
                    models.map((model) => {
                      return (
                        <TableCell
                          key={model.id}
                          className="models"
                          onClick={() => {
                            getModelDetail(model);
                            setLoadingModel(true);
                          }}
                        >
                          <div align="center">
                            <img
                              src={`https://api.nimbusflorida.theonemarineturkey.com/${model.picture.url}`}
                              style={{ width: "60%", height: "30%" }}
                            />
                            <div style={{ textAlign: "center" }}>
                              {model.name}
                            </div>
                          </div>
                        </TableCell>
                      );
                    })}
                </div>
              </TableBody>
            </Table>
          </Card>
        </div>
      )}
      {clickedModel && (
        <div>
          <Model />
        </div>
      )}
    </div>
  );
}
export default Models;
