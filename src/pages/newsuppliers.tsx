import React, { useState } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import { Options } from "../types";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import Chip from "@mui/material/Chip";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {
  Company,
  ListCompaniesQuery,
  OrganizationType,
  Ownership,
  Status,
} from "../API";
import getOptions from "../lib/getOptions";
import { API } from "aws-amplify";
import { listCompanies } from "../graphql/queries";
import useSWR from "swr";
import { grey } from "@mui/material/colors";
import formatTableDate from "../lib/formatTableDate";
import { useRouter } from "next/router";
import Skeleton from "@mui/material/Skeleton";

const columns: String[] = [
  "Organization Name",
  "Office Building",
  "Ownership",
  "Contact Person",
  "Phone Number",
  "Application Date",
  "Status",
];

//Fetch Companies with SWR
const fetcher = async () => {
  const allCompanies = (await API.graphql({ query: listCompanies })) as {
    data: ListCompaniesQuery;
    errors: any[];
  };

  if (allCompanies.data) {
    return allCompanies.data.listCompanies.items as Company[];
  } else {
    throw new Error("Something went wrong, could not get companies");
  }
};

export default function NewSuppliers() {
  //Render Fetched Companies
  const {
    data: companies,
    isValidating,
    error,
  } = useSWR("listCompanies", fetcher);

  // Filter Input States
  const [applicantStatus, setApplicantStatus] = useState<string>();
  const [applicantNationality, setApplicantNationality] = useState<string>();
  const [applicantOrganizationType, setApplicantOrganizationType] =
    useState<string>();
  const [applicantSearch, setApplicantSearch] = useState<string>("");

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

  //Derive options from API
  const status = getOptions(Status);
  const nationalities = getOptions(Ownership);
  const organizationTypes = getOptions(OrganizationType);

  //Add routing
  const router = useRouter();

  let content: any;

  if (error) {
    return;
  }

  if (isValidating) {
    content = (
      <>
        <Skeleton
          variant="text"
          animation="pulse"
          width="100%"
          sx={{ fontSize: 25 }}
        />
        <Skeleton
          variant="rounded"
          width="100%"
          animation="pulse"
          height={320}
        />
      </>
    );
  }

  if (companies) {
    if (!companies.length) {
      content = (
        <Typography color="red">
          There are no registered companies at this time
        </Typography>
      );
    }
    if (companies.length) {
      content = (
        <>
          <Paper elevation={1}>
            <Grid
              container
              xs={12}
              direction="row"
              p={2}
              alignItems="center"
              columnSpacing={2}
            >
              <Grid xs={1.5}>
                <TextField
                  select
                  fullWidth
                  defaultValue=""
                  size="small"
                  value={applicantStatus}
                  onChange={(e) => setApplicantStatus(e.target.value)}
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
                  defaultValue=""
                  size="small"
                  value={applicantNationality}
                  onChange={(e) => setApplicantNationality(e.target.value)}
                  label="Nationality"
                >
                  {nationalities.map((nationality: Options, index) => (
                    <MenuItem key={index} value={nationality.name}>
                      {nationality.value}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid xs={2.5}>
                <TextField
                  value={applicantOrganizationType}
                  defaultValue=""
                  size="small"
                  onChange={(e) => setApplicantOrganizationType(e.target.value)}
                  label="Organization Type"
                  select
                  fullWidth
                >
                  {organizationTypes.map((organizationType: Options, index) => (
                    <MenuItem key={index} value={organizationType.name}>
                      {organizationType.value}
                    </MenuItem>
                  ))}
                </TextField>
              </Grid>
              <Grid xs={2}>
                <Button variant="outlined">Export Report</Button>
              </Grid>
              <Grid xs={3} ml="auto">
                <TextField
                  value={applicantSearch}
                  onChange={(e) => setApplicantSearch(e.target.value)}
                  label="Search Applicant"
                  size="small"
                  fullWidth
                />
              </Grid>
            </Grid>
          </Paper>
          <Paper component={Box} elevation={1} p={2}>
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
                      {index === 0 ? (
                        <FormControlLabel
                          label={column}
                          componentsProps={{
                            typography: { variant: "inherit" },
                          }}
                          control={<Checkbox size="small" defaultChecked />}
                        />
                      ) : (
                        column
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {companies.map((company) => (
                  <TableRow key={company.id}>
                    <TableCell sx={{ width: "20%" }}>
                      <FormControlLabel
                        label={company.organizationName}
                        componentsProps={{ typography: { variant: "inherit" } }}
                        control={<Checkbox size="small" defaultChecked />}
                      />
                    </TableCell>
                    <TableCell>
                      {company.addressDetails.items[0]?.officeBuilding}
                    </TableCell>
                    <TableCell>{company.ownership}</TableCell>
                    <TableCell sx={{ width: "15%" }}>
                      {company.addressDetails.items[0]?.fullName ??
                        "Unavailable"}
                    </TableCell>
                    <TableCell>
                      {company.addressDetails.items[0]?.phoneNumber ??
                        "Unavailable"}
                    </TableCell>
                    <TableCell sx={{ width: "15%" }}>
                      {formatTableDate(company.createdAt)}
                    </TableCell>
                    <TableCell>
                      <Chip
                        label={company.status ?? "Pending"}
                        onClick={() => router.push(`/company/${company.id}`)}
                        color={
                          ((!company.status || company.status === "Pending") &&
                            "primary") ||
                          (company.status === "Rejected" && "error") ||
                          (company.status === "Approved" && "success") ||
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
              count={companies.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </Paper>
        </>
      );
    }
  }

  return (
    <Box p={5} display="flex" flexDirection="column" gap={2}>
      <Typography sx={{ fontSize: 30 }}>New Supplier Applications</Typography>
      {content}
    </Box>
  );
}
