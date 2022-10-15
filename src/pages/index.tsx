import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import ContractsTable from "../components/contractsTable";
import OpportunitiesTable from "../components/opportunitiesTable";
import useSWR from "swr";
import { API } from "aws-amplify";
import {
  listContracts,
  listOpportunities,
  listActions,
} from "../graphql/queries";
import {
  Action,
  Contract,
  ListActionsQuery,
  ListContractsQuery,
  ListOpportunitiesQuery,
  Opportunity,
} from "../API";
import Skeleton from "@mui/material/Skeleton";
import ActionsTable from "../components/actionsTable";
import { DashInfo } from "../types";
import DashCard from "../components/dashCard";

const contractFetcher = async () => {
  const allContracts = (await API.graphql({ query: listContracts })) as {
    data: ListContractsQuery;
    errors: any[];
  };

  if (allContracts.data) {
    return allContracts.data.listContracts.items as Contract[];
  } else {
    throw new Error("Something went wrong, could not get contracts");
  }
};

const opportunitiesFetcher = async () => {
  const allOpportunities = (await API.graphql({
    query: listOpportunities,
  })) as {
    data: ListOpportunitiesQuery;
    errors: any[];
  };

  if (allOpportunities.data) {
    return allOpportunities.data.listOpportunities.items as Opportunity[];
  } else {
    throw new Error("Something went wrong, could not get opportunities");
  }
};

const actionsFetcher = async () => {
  const allActions = (await API.graphql({
    query: listActions,
  })) as {
    data: ListActionsQuery;
    error: any;
  };

  if (allActions.data) {
    return allActions.data.listActions.items as Action[];
  } else {
    throw new Error("Something went wrong, could not get actions");
  }
};

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

export default function Home() {
  const {
    data: contracts,
    isValidating: isContractsValidating,
    error: contractError,
  } = useSWR("listContracts", contractFetcher);

  const {
    data: opportunities,
    isValidating: isOpportunitiesValidating,
    error: opportunitiesError,
  } = useSWR("listOpportunities", opportunitiesFetcher);

  const {
    data: actions,
    isValidating: isActionsValidating,
    error: actionsError,
  } = useSWR("listActions", actionsFetcher);

  return (
    <Box p={5} display="flex" flexDirection="column">
      <Typography sx={{ fontSize: 30 }}>Dashboard</Typography>
      <Grid
        container
        display="flex"
        direction="row"
        justifyContent="space-between"
        pt={3}
        xs={12}
      >
        {dashInfo.map((singleDashInfo: DashInfo, index) => (
          <Grid xs={3} pr={index === dashInfo.length - 1 ? 0 : 2}>
            <DashCard key={index} {...singleDashInfo} />
          </Grid>
        ))}
      </Grid>
      <Grid container direction="row" xs={12}>
        <Grid xs={7} pr={2}>
          {!opportunities && isOpportunitiesValidating && (
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
          )}
          {opportunities && (
            <OpportunitiesTable opportunities={opportunities} />
          )}
        </Grid>
        <Grid xs={5}>
          {!actions && isActionsValidating && (
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
          )}
          {actions && <ActionsTable actions={actions} />}
        </Grid>
      </Grid>
      {!contracts && isContractsValidating && (
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
      )}
      {contracts && <ContractsTable contracts={contracts} />}
    </Box>
  );
}
