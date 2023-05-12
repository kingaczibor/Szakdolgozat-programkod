import { React } from "react";

import {
  Table,
  TableCell,
  TableHead,
  TableBody,
  TableRow
} from "@mui/material";

export default function DashboardRepair(props) {
  return (
    <Table>
      <TableHead>
        <TableRow>
          {Object.keys(props.repairs[0] ?? {}).map((key) => (
            <TableCell>{key}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {props.repairs.map((row) => {
          return (
            <TableRow>
              {Object.keys(row ?? {}).map((key) => (
                <TableCell>{row[key]}</TableCell>
              ))}
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
