import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import React, { Dispatch, SetStateAction } from "react";
import Address from "./address";
import Director from "./director";
import Information from "./information";

interface Props {
  companyId: string;
  activeStep: number;
  setActiveStep: Dispatch<SetStateAction<number>>;
  setCompanyId: Dispatch<SetStateAction<string>>;
}

export default function Summary({
  companyId,
  activeStep,
  setActiveStep,
  setCompanyId,
}: Props) {
  return (
    <React.Fragment>
      <Box sx={{ p: 3, m: 3, border: "1px solid black" }}>
        <Information
          setCompanyId={setCompanyId}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
        <Address
          companyId={companyId}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
        <Director
          companyId={companyId}
          activeStep={activeStep}
          setActiveStep={setActiveStep}
        />
      </Box>
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button
          color="inherit"
          onClick={() => setActiveStep((prev) => prev - 1)}
          sx={{ mr: 1 }}
        >
          Back
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />
        <Button
          sx={{ mr: 1 }}
          onClick={() => setActiveStep((prev) => prev + 1)}
        >
          Reset
        </Button>
        <Button onClick={() => setActiveStep((prev) => prev + 1)}>
          Complete Step
        </Button>
      </Box>
    </React.Fragment>
  );
}
