import Skeleton from "@mui/material/Skeleton";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { API } from "aws-amplify";
import React from "react";
import useSWR from "swr";
import { Contract, ListContractsQuery } from "../API";
import ContractsTable from "../components/contractsTable";
import { listContracts } from "../graphql/queries";

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

export default function Activecontracts() {
  const {
    data: contracts,
    isValidating: isContractsValidating,
    error: contractError,
  } = useSWR("listContracts", contractFetcher);

  let content: JSX.Element;

  if (contractError) return;

  if (!contracts && isContractsValidating) {
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

  if (!contracts?.length && !isContractsValidating) {
    content = (
      <Typography color="red">
        There are no active contracts at this time
      </Typography>
    );
  }

  if (contracts?.length) {
    content = <ContractsTable contracts={contracts} />;
  }
  return (
    <Box p={5} display="flex" flexDirection="column">
      {content}
    </Box>
  );
}
