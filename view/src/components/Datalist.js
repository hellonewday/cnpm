import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  row: {
    "&:hover": {
      backgroundColor: "#f7f7f0",
      cursor: "pointer",
    },
    "&::-webkit-scrollbar": {
      width: 10,
    },
  },
});

export default function Datalist({ data }) {
  const classes = useStyles();
  return (
    <div>
      {data.length > 0 ? (
        <TableContainer className="scrollbar">
          <Table
            style={{ width: 1500 }}
            className={classes.table}
            aria-label="simple table"
          >
            <TableHead>
              <TableRow>
                <TableCell align="left">Từ chuyên ngành</TableCell>
                <TableCell align="center">Chương</TableCell>
                <TableCell align="center">Số bản dịch</TableCell>
                <TableCell align="left">Bản dịch tiêu biểu</TableCell>
                <TableCell align="left">Lần đầu tạo</TableCell>
                <TableCell align="left">Cập nhật lần cuối</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map((row) => (
                <TableRow className={classes.row} key={row.id}>
                  <TableCell component="th" align="left">
                    <Link
                      style={{ textDecoration: "none", color: "inherit" }}
                      to={`/text/${row.text}`}
                    >
                      {row.text}{" "}
                    </Link>
                  </TableCell>
                  <TableCell component="th" align="center">
                    {row.chapter}
                  </TableCell>
                  <TableCell component="th" align="center">
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
      ) : (
        <p>Chưa có dữ liệu</p>
      )}
    </div>
  );
}
