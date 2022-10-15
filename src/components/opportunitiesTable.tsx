import React, { useState } from "react";
import { ListOpportunitiesQuery, Opportunity, OpportunityStatus } from "../API";
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
import Pagination from "@mui/material/Pagination";
import TableRow from "@mui/material/TableRow";
import Chip from "@mui/material/Chip";
import { grey } from "@mui/material/colors";
import getOptions from "../lib/getOptions";
import formatCurrency from "../lib/formatCurrency";
import Link from "next/link";
import { blue } from "../theme";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import { listOpportunities } from "../graphql/queries";
import { API } from "aws-amplify";
import useSWR from "swr";

interface Props {
  opportunities: Opportunity[];
}

interface TableCellProps {
  value: any;
  width: number;
}

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

export default function OpportunitiesTable({ opportunities }: Props) {
  const [opportunityStatus, setOpportunityStatus] = useState<string>();
  const [opportunityMonth, setOpportunityMonth] = useState<string>();

  //Table Props Definition
  const headerRow: TableCellProps[] = [
    { value: "Title", width: 20 },
    { value: "Type", width: 30 },
    { value: "Department", width: 20 },
    { value: "Budget (Ksh)", width: 15 },
    { value: "Status", width: 15 },
  ];

  //Handle Pagination
  const [page, setPage] = useState<number>(0);

  const status = getOptions(OpportunityStatus);

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
          <Grid xs={3.1}>
            <Typography sx={{ fontSize: 24 }}>Opportunities</Typography>
          </Grid>
          <Grid xs={4.2}>
            <Button variant="contained" startIcon={<AddIcon />}>
              Add Opportunity
            </Button>
          </Grid>
          <Grid xs={2} ml="auto">
            <TextField
              select
              fullWidth
              size="small"
              defaultValue=""
              value={opportunityStatus}
              onChange={(e) => setOpportunityStatus(e.target.value)}
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
              value={opportunityMonth}
              onChange={(e) => setOpportunityMonth(e.target.value)}
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
                display: "flex",
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
              {headerRow.map((row: TableCellProps, index) => (
                <TableCell
                  size="small"
                  key={index}
                  sx={{ width: `${row.width}%` }}
                >
                  {row.value}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {opportunities.map((opportunity) => {
              const bodyRow: TableCellProps[] = [
                {
                  value: opportunity.title,
                  width: 20,
                },
                {
                  value: `${opportunity.type.substring(0, 15)}${
                    opportunity.type.length > 15 ? "..." : ""
                  }`,
                  width: 30,
                },
                {
                  value: opportunity.department,
                  width: 20,
                },
                {
                  value: formatCurrency(opportunity.budget),
                  width: 15,
                },
                {
                  value: (
                    <Chip
                      label={opportunity.status ?? "Pending"}
                      color={
                        ((!opportunity.status ||
                          opportunity.status === "Draft") &&
                          "primary") ||
                        (opportunity.status === "In_Progress" && "success") ||
                        (opportunity.status === "Closed" && "error") ||
                        "default"
                      }
                    />
                  ),
                  width: 15,
                },
              ];
              return (
                <TableRow key={opportunity.id} sx={{ display: "flex" }}>
                  {bodyRow.map((row) => (
                    <TableCell sx={{ width: `${row.width}%` }}>
                      {row.value}
                    </TableCell>
                  ))}
                </TableRow>
              );
            })}
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
              >{`View Active Opportunities >`}</Typography>
            </Link>
          </Grid>
          <Grid xs="auto">
            <Pagination
              variant="outlined"
              shape="rounded"
              count={Math.ceil(opportunities.length / 3)}
              onChange={(_, value) => setPage(value)}
            />
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
}
