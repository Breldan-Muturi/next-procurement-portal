import Box from "@mui/material/Box";
import React, { Dispatch, SetStateAction } from "react";
import Address from "./address";
import Director from "./director";
import Information from "./information";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";

interface Props {
  activeStep: number;
  acceptance: boolean;
  setAcceptance: Dispatch<SetStateAction<Boolean>>;
}

export default function Summary({
  activeStep,
  acceptance,
  setAcceptance,
}: Props) {
  return (
    <React.Fragment>
      <Information activeStep={activeStep} />
      <Address activeStep={activeStep} />
      <Director activeStep={activeStep} />
      <FormControlLabel
        sx={{ pt: 3 }}
        label="By submitting this form, the supplier confirms that the information is true and accurate and all documents are a true copy of the original. The supplier has not hidden any information or provided misleading information and canceled any information"
        componentsProps={{
          typography: { variant: "body2" },
        }}
        control={
          <Checkbox
            checked={acceptance}
            onChange={() => setAcceptance((prev) => !prev)}
          />
        }
      />
    </React.Fragment>
  );
}
