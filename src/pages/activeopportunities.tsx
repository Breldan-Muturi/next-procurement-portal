import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { API } from "aws-amplify";
import React from "react";
import useSWR from "swr";
import { ListOpportunitiesQuery, Opportunity } from "../API";
import { listOpportunities } from "../graphql/queries";
import OpportunitiesTable from "../components/opportunitiesTable";

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

export default function ActiveOpportunities() {
  const {
    data: opportunities,
    isValidating: isOpportunitiesValidating,
    error: opportunitiesError,
  } = useSWR("listOpportunities", opportunitiesFetcher);

  let content: JSX.Element;

  if (opportunitiesError) return;

  if (!opportunities && isOpportunitiesValidating) {
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

  if (!opportunities?.length && !isOpportunitiesValidating) {
    content = (
      <Typography color="red">
        There are no active contracts at this time
      </Typography>
    );
  }

  if (opportunities?.length) {
    content = <OpportunitiesTable opportunities={opportunities} />;
  }
  return (
    <Box p={5} display="flex" flexDirection="column">
      {content}
    </Box>
  );
}
