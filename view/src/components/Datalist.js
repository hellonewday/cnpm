import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const useStyles = makeStyles({
  table: {
    minWidth: 850,
  },
});

export default function Datalist({ data }) {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table
        style={{ width: 1500 }}
        className={classes.table}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell>Id</TableCell>
            <TableCell align="left">Từ chuyên ngành</TableCell>
            <TableCell align="left">Chương</TableCell>
            <TableCell align="left">Số bản dịch</TableCell>
            <TableCell align="left">Bản dịch tiêu biểu</TableCell>
            <TableCell align="left">Lần đầu tạo</TableCell>
            <TableCell align="left">Cập nhật lần cuối</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.id}>
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell component="th" align="left">
                {row.text}
              </TableCell>
              <TableCell component="th" align="left">
                {row.chapter}
              </TableCell>
              <TableCell component="th" align="left">
                {row.meaning_counts}
              </TableCell>
              <TableCell component="th" align="left">
                {row.meaning[0]}
              </TableCell>
              <TableCell component="th" align="left">
                {row.created_at}
              </TableCell>
              <TableCell component="th" align="left">
                {row.updated_at}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
