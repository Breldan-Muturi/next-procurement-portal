import React, { useState } from "react";
import { Action } from "../API";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import Pagination from "@mui/material/Pagination";
import TableRow from "@mui/material/TableRow";
import { grey } from "@mui/material/colors";
import Link from "next/link";
import { blue } from "../theme";
import formatTableDate from "../lib/formatTableDate";

interface Props {
  actions: Action[];
}

const columns: String[] = ["Title", "Type", "Date"];

export default function ActionsTable({ actions }: Props) {
  //Handle Pagination
  const [page, setPage] = useState<number>(0);

  return (
    <Box py={2} display="flex" flexDirection="column" gap={2}>
      <Paper component={Box} elevation={1} p={2}>
        <Typography sx={{ fontSize: 24 }}>Actions</Typography>
        <Table>
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: grey[200],
                "& .MuiTableCell-root": { borderBottom: "none" },
                "& .MuiTableCell-root:first-of-type": {
                  borderRadius: "6px 0 0 6px",
                },
                "& .MuiTableCell-root:last-of-type": {
                  borderRadius: "0 6px 6px 0",
                },
              }}
            >
              {columns.map((column: string, index) => (
                <TableCell size="small" key={index}>
                  {column}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {actions.map((action) => (
              <TableRow key={action.id}>
                <TableCell sx={{ width: "50%" }}>{action.title}</TableCell>
                <TableCell>{action.type}</TableCell>
                <TableCell>{formatTableDate(action.createdAt)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Grid
          container
          direction="row"
          xs={12}
          mt={2}
          justifyContent="space-between"
        >
          <Grid xs={5}>
            <Link href="/registration">
              <Typography
                color={blue}
                sx={{ textDecoration: "underline", cursor: "pointer" }}
              >{`View All Actions >`}</Typography>
            </Link>
          </Grid>
          <Grid xs="auto">
            <Pagination
              variant="outlined"
              shape="rounded"
              count={actions.length / 3}
              onChange={(_, value) => setPage(value)}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
