import React from "react";
import { GetStaticProps, GetStaticPaths } from "next";
import { API, withSSRContext } from "aws-amplify";
import {
  getCompany,
  listCompanies,
  listOpportunities,
} from "../../graphql/queries";
import {
  Company,
  GetCompanyQuery,
  ListCompaniesQuery,
  ListOpportunitiesQuery,
  ModelOpportunityFilterInput,
  Opportunity,
  Status,
  UpdateCompanyInput,
  UpdateCompanyMutation,
} from "../../API";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { blue } from "../../theme";
import Link from "next/link";
import { DashInfo, Options } from "../../types";
import DashCard from "../../components/dashCard";
import ContractsTable from "../../components/contractsTable";
import { grey } from "@mui/material/colors";
import OpportunitiesTable from "../../components/opportunitiesTable";
import useSWR from "swr";
import Skeleton from "@mui/material/Skeleton";
import TextField from "@mui/material/TextField";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { companyApproval } from "../../validators/companyValidators";
import { updateCompany } from "../../graphql/mutations";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/auth";
import MenuItem from "@mui/material/MenuItem";
import getOptions from "../../lib/getOptions";
import Button from "@mui/material/Button";
import VerifiedIcon from "@mui/icons-material/Verified";
import { useRouter } from "next/router";

interface Props {
  company: Company;
  opportunities?: Opportunity[];
}

const dashInfo: DashInfo[] = [
  {
    icon: "DomainAdd",
    link: "/registration",
    linkText: "View New Applications >",
    title: "New Supplier Applications",
    count: 10,
  },
  {
    icon: "FolderOpen",
    link: "/registration",
    linkText: "View Active Opportunities >",
    title: "Active Opportunities",
    count: 12,
  },
  {
    icon: "WorkOutlineRounded",
    link: "/registration",
    linkText: "View Active Jobs >",
    title: "Active Jobs",
    count: 8,
  },
  {
    icon: "TextSnippetOutlined",
    link: "/registration",
    linkText: "View Active Invoices >",
    title: "Active Invoices",
    count: 9,
  },
];

export default function RegisteredCompany({ company, opportunities }: Props) {
  const router = useRouter();
  const companyInfo: Options[] = [
    {
      name: "Organization Name",
      value: company.organizationName,
    },
    {
      name: "Organization Type",
      value: company.organizationType,
    },
    {
      name: "Registration Date",
      value: company.organizationRegistrationDate,
    },
    {
      name: "Registration Number",
      value: company.organizationRegistrationNumber,
    },
    {
      name: "Organization City",
      value: company.addressDetails.items[0]?.city,
    },
    {
      name: "Organization Email",
      value: company.addressDetails.items[0]?.emailAddress,
    },
    {
      name: "Contact Person",
      value: company.addressDetails.items[0]?.fullName,
    },
  ];

  const {
    register,
    watch,
    control,
    formState: { errors },
    handleSubmit,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(companyApproval),
  });

  const statusOptions = getOptions(Status);

  const onSubmit: SubmitHandler<UpdateCompanyInput> = async (data) => {
    try {
      const updateCurrentCompanyInput: UpdateCompanyInput = {
        id: company.id,
        status: data.status,
        response: data.response,
      };
      const updateCurrentCompany = (await API.graphql({
        query: updateCompany,
        variables: { input: updateCurrentCompanyInput },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as { data: UpdateCompanyMutation };
    } catch (error) {
      throw new Error(error);
    }
  };

  let content: any;

  if (router.isFallback) {
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
  } else {
    content = (
      <>
        <Typography sx={{ fontSize: 30 }}>
          {company.organizationName}
        </Typography>
        <Grid container direction="row" justifyContent="space-between">
          <Grid xs={6} pr={2} pt={2}>
            <Paper>
              <Box p={2}>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  mb={2}
                >
                  <Typography sx={{ fontSize: 24 }}>Company Profile</Typography>
                  <Link href="#">
                    <Typography color={blue} sx={{ cursor: "pointer" }}>
                      Send A Message
                    </Typography>
                  </Link>
                </Stack>
                {companyInfo.map((companyData, index) => (
                  <Grid key={index} container direction="row" pb={1}>
                    <Grid xs={4} pl={1}>
                      <Typography
                        sx={{ fontWeight: "500" }}
                      >{`${companyData.name}:`}</Typography>
                    </Grid>
                    <Grid xs={8}>
                      <Typography sx={{ bgcolor: grey[100], pl: 1 }}>
                        {companyData.value}
                      </Typography>
                    </Grid>
                  </Grid>
                ))}
                <Stack
                  direction="row"
                  alignItems="center"
                  justifyContent="flex-end"
                  mt={2}
                  gap={2}
                >
                  <Typography color={blue} sx={{ cursor: "pointer" }}>
                    {"< Previous"}
                  </Typography>
                  <Typography color={blue} sx={{ cursor: "pointer" }}>
                    {"Next >"}
                  </Typography>
                </Stack>
              </Box>
            </Paper>
          </Grid>
          <Grid container xs={6} direction="row">
            {dashInfo.map((dashInfo, index) => (
              <Grid key={index} xs={6} pr={2} pt={2}>
                <DashCard key={index} {...dashInfo} />
              </Grid>
            ))}
          </Grid>
        </Grid>
        {company.status !== "Approved" && (
          <Box component={Paper} my={2} p={2}>
            <form
              style={{ display: "flex", flexDirection: "column" }}
              onSubmit={handleSubmit(onSubmit)}
            >
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
              >
                <Typography sx={{ fontSize: 24 }}>
                  Applicant Approval
                </Typography>
                <Controller
                  name="status"
                  control={control}
                  defaultValue=""
                  render={({ field: { ref, ...field } }) => (
                    <TextField
                      size="small"
                      label="Approval Status"
                      select
                      required
                      inputRef={ref}
                      value={field.value}
                      onChange={(status) => field.onChange(status)}
                      error={!!errors.status}
                      helperText={errors.status?.message.toString()}
                      sx={{ width: "20%" }}
                      {...field}
                    >
                      {statusOptions.map((statusOption: Options, index) => (
                        <MenuItem key={index} value={statusOption.name}>
                          {statusOption.value}
                        </MenuItem>
                      ))}
                    </TextField>
                  )}
                />
              </Stack>
              <TextField
                margin="normal"
                fullWidth
                required
                label="Add Approval status first and then add response"
                multiline
                minRows={3}
                error={!!errors.response}
                helperText={errors.response?.message.toString()}
                {...register("response")}
              />
              <Button
                type="submit"
                startIcon={<VerifiedIcon />}
                variant="contained"
                sx={{ width: "20%", ml: "auto", mt: 1 }}
              >
                Submit Approval
              </Button>
            </form>
          </Box>
        )}
        {company.status === "Approved" && (
          <ContractsTable contracts={company.contracts.items} />
        )}
        {opportunities && company.status === "Approved" && (
          <OpportunitiesTable opportunities={opportunities} />
        )}
      </>
    );
  }

  return (
    <Box p={5} display="flex" flexDirection="column">
      {content}
    </Box>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const SSR = withSSRContext();
  const allCompanies = (await SSR.API.graphql({ query: listCompanies })) as {
    data: ListCompaniesQuery;
    errors: any[];
  };
  const paths = allCompanies.data.listCompanies.items.map((company) => ({
    params: { id: company.id },
  }));
  return { paths, fallback: true };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const SSR = withSSRContext();
  const companiesQuery = (await SSR.API.graphql({
    query: getCompany,
    variables: {
      id: params.id,
    },
  })) as { data: GetCompanyQuery };
  const company: Company = companiesQuery.data.getCompany;

  const companyOpportunities = (await SSR.API.graphql({
    query: listOpportunities,
  })) as { data: ListOpportunitiesQuery };

  return {
    props: {
      company,
      opportunities: companyOpportunities.data.listOpportunities.items.filter(
        (opportunity) => company.natureOfBusiness.includes(opportunity.type)
      ),
    },
    revalidate: 1,
  };
};
