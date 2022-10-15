import React, { useState } from "react";
import { Contract, ContractStatus, ListContractsQuery } from "../API";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { Options } from "../types";
import Skeleton from "@mui/material/Skeleton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Chip from "@mui/material/Chip";
import formatTableDate from "../lib/formatTableDate";
import { grey } from "@mui/material/colors";
import getOptions from "../lib/getOptions";
import formatCurrency from "../lib/formatCurrency";
import useSWR from "swr";
import { API } from "aws-amplify";
import { listContracts } from "../graphql/queries";

interface Props {
  contracts: Contract[];
}

const columns: String[] = [
  "Title",
  "Start Date",
  "Type",
  "Department",
  "Supplier",
  "Budget (Ksh)",
  "Status",
];

const months: String[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export default function ContractsTable({ contracts }: Props) {
  const [contractStatus, setContractStatus] = useState<string>();
  const [contractMonth, setContractMonth] = useState<string>();
  const [contractOrganization, setContractOrganization] = useState<string>();

  //Handle Pagination
  const [page, setPage] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(5);

  const handleChangePage = (e: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  const status = getOptions(ContractStatus);

  return (
    <Box py={2} display="flex" flexDirection="column" gap={2}>
      <Paper component={Box} elevation={1} p={2}>
        <Grid
          container
          xs={12}
          direction="row"
          pb={2}
          alignItems="center"
          columnSpacing={2}
        >
          <Grid xs={1.5} mr="auto">
            <Typography sx={{ fontSize: 25 }}>Contracts</Typography>
          </Grid>
          <Grid xs={3}>
            <TextField
              defaultValue=""
              value={contractOrganization}
              onChange={(e) => setContractOrganization(e.target.value)}
              label="Search by Organization"
              size="small"
              fullWidth
            />
          </Grid>
          <Grid xs={1.5}>
            <TextField
              select
              fullWidth
              size="small"
              defaultValue=""
              value={contractStatus}
              onChange={(e) => setContractStatus(e.target.value)}
              label="Status"
            >
              {status.map((status: Options, index) => (
                <MenuItem key={index} value={status.name}>
                  {status.value}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid xs={2}>
            <TextField
              select
              fullWidth
              size="small"
              defaultValue=""
              value={contractMonth}
              onChange={(e) => setContractMonth(e.target.value)}
              label="Month"
            >
              {months.map((month: string, index) => (
                <MenuItem key={index} value={month}>
                  {month}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
        </Grid>
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
            {contracts.map((contract) => (
              <TableRow key={contract.id}>
                <TableCell sx={{ width: "20%" }}>{contract.title}</TableCell>
                <TableCell sx={{ width: "10%" }}>
                  {formatTableDate(contract.createdAt)}
                </TableCell>
                <TableCell>{contract.type}</TableCell>
                <TableCell>{contract.department}</TableCell>
                <TableCell sx={{ width: "15%" }}>
                  {contract.company?.organizationName ?? "Unavailable"}
                </TableCell>
                <TableCell sx={{ width: "15%" }}>
                  {formatCurrency(contract.budget)}
                </TableCell>
                <TableCell>
                  <Chip
                    label={contract.status ?? "Pending"}
                    color={
                      ((!contract.status || contract.status === "Draft") &&
                        "primary") ||
                      (contract.status === "In_Progress" && "success") ||
                      (contract.status === "Ended" && "error") ||
                      "default"
                    }
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={contracts.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </Box>
  );
}
