import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { useObserver } from "mobx-react";
import React from "react";
import "../styles/options.css";
import OptionEditModal from "./OptionEditModal";

function createData(
  title,
  name,
  id,
  sorting,
  required,
  price,
  pictureURL,
  selected,
) {
  return { title, name, id, sorting, required, price, pictureURL, selected };
}
function Options(props) {
  const option_group = props.option_group;
  const model = props.model;
  let setRows = new Set();
  option_group.options.map((option) => {
    return setRows.add(
      createData(
        option.title,
        option.name,
        option.id,
        option.sorting,
        option.required,
        option.price.usd,
        option.picture.url,
        option.selected,
      ),
    );
  });
  return useObserver(() => (
    <TableContainer>
      <Table className="options-table">
        <TableHead>
          <TableRow>
            <TableCell>
              {option_group.title.split(" ").map((e) => {
                return (
                  e.toLowerCase().charAt(0).toUpperCase() +
                  e.slice(1).toLowerCase() +
                  " "
                );
              })}
            </TableCell>
            <TableCell>ID</TableCell>
            <TableCell>Price</TableCell>
            <TableCell>Selected</TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {[...setRows].map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.title}
              </TableCell>
              <TableCell>{row.id}</TableCell>
              <TableCell>{row.price === -4 ? "Standart" : row.price}</TableCell>
              <TableCell align="left" style={{ paddingLeft: "30px" }}>
                {row.selected === true ? "✓" : ""}
              </TableCell>
              <TableCell>
                <OptionEditModal
                  option={row}
                  option_group={option_group}
                  model={model}
                />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  ));
}
export default Options;
