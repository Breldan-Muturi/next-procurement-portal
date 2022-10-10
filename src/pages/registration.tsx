import React, { useState } from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Typography from "@mui/material/Typography";
import Information from "../components/information";
import Address from "../components/address";
import Director from "../components/director";
import Summary from "../components/summary";
import { FormProvider, useForm } from "react-hook-form";
import { CreateCompanyMutation } from "../API";

const steps = [
  "Company Registration Information",
  "Address and Contact Details",
  "Director Details",
  "Confirm and Submit",
];

export default function Registration() {
  const methods = useForm<CreateCompanyMutation>();
  const [activeStep, setActiveStep] = useState(0);
  const [companyId, setCompanyId] = useState<string>("");
  const [completed, setCompleted] = useState<{ [k: number]: boolean }>({});

  const totalSteps = () => {
    return steps.length;
  };

  const completedSteps = () => {
    return Object.keys(completed).length;
  };

  const isLastStep = () => {
    return activeStep === totalSteps() - 1;
  };

  const allStepsCompleted = () => {
    return completedSteps() === totalSteps();
  };

  const handleNext = () => {
    const newActiveStep =
      isLastStep() && !allStepsCompleted()
        ? // It's the last step, but not all steps have been completed,
          // find the first step that has been completed
          steps.findIndex((i) => !(i in completed))
        : activeStep + 1;
    setActiveStep(newActiveStep);
  };

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  return (
    <FormProvider {...methods}>
      <Box sx={{ width: "100%", padding: 5 }}>
        <Typography variant="h5" align="center">
          Supplier Self Registration
        </Typography>
        <Typography align="center" sx={{ paddingBottom: 3 }}>
          Welcome to the supplier self registration portal. This portal serves
          as an initial point of entry for any vendors who wish to do business
          with us. <b>IMPORTANT:</b> Please makes sure all required attachments
          are attached. *Fields marked with an asterisk are mandatory
        </Typography>
        <Stepper activeStep={activeStep} alternativeLabel>
          {steps.map((label, index) => (
            <Step key={label} completed={completed[index]}>
              <StepButton color="inherit" onClick={handleStep(index)}>
                {label}
              </StepButton>
            </Step>
          ))}
        </Stepper>
        {allStepsCompleted() ? (
          <Typography sx={{ mt: 2, mb: 1 }}>
            All steps completed - you&apos;re finished
          </Typography>
        ) : (
          <React.Fragment>
            {activeStep === 0 && (
              <Information
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                setCompanyId={setCompanyId}
                completed={completed}
                setCompleted={setCompleted}
              />
            )}
            {activeStep === 1 && (
              <Address
                companyId={companyId}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                completed={completed}
                setCompleted={setCompleted}
              />
            )}
            {activeStep === 2 && (
              <Director
                companyId={companyId}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                completed={completed}
                setCompleted={setCompleted}
              />
            )}
            {isLastStep() && (
              <Summary
                companyId={companyId}
                setCompanyId={setCompanyId}
                activeStep={activeStep}
                setActiveStep={setActiveStep}
                completed={completed}
                setCompleted={setCompleted}
              />
            )}
          </React.Fragment>
        )}
      </Box>
    </FormProvider>
  );
}
