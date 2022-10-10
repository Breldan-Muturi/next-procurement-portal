import React, { Dispatch, SetStateAction } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { SubmitHandler, useForm } from "react-hook-form";
import {
  AddressDetails,
  CreateAddressDetailsInput,
  CreateAddressDetailsMutation,
  Title,
} from "../API";
import { API } from "aws-amplify";
import { createAddressDetails } from "../graphql/mutations";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/auth";
import getOptions from "../lib/getOptions";
import { Button, MenuItem } from "@mui/material";
import { Options } from "../types";

interface Props {
  companyId: string;
  activeStep: number;
  setActiveStep: Dispatch<SetStateAction<number>>;
  completed: boolean;
  setCompleted: Dispatch<SetStateAction<number>>;
}

export default function Address({
  companyId,
  activeStep,
  setActiveStep,
  completed,
  setCompleted,
}: Props) {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<AddressDetails>({
    mode: "onChange",
  });

  const titles = getOptions(Title);

  const onSubmit: SubmitHandler<AddressDetails> = async (data) => {
    try {
      const createNewAddressDetailsInput: CreateAddressDetailsInput = {
        companyID: companyId,
        postalAddress: data.postalAddress,
        city: data.city,
        country: data.country,
        officeBuilding: data.officeBuilding,
        emailAddress: data.emailAddress,
        streetAddress: data.streetAddress,
        title: data.title,
        fullName: data.fullName,
        contactEmail: data.contactEmail,
        phoneNumber: data.phoneNumber,
      };
      const createNewAddressDetails = (await API.graphql({
        query: createAddressDetails,
        variables: { input: createNewAddressDetailsInput },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as { data: CreateAddressDetailsMutation };
      setActiveStep((prev) => prev + 1);
    } catch (error) {
      console.log("Address Error:", error);
    }
  };
  return (
    <Box
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      autoComplete="off"
    >
      <Box
        component="section"
        sx={activeStep < 3 && { p: 3, m: 3, border: "1px solid black" }}
      >
        <Typography variant="h5" component="h3" gutterBottom>
          Address and Contact Details
        </Typography>
        <Divider sx={{ borderColor: "#828282" }} />
        <Box
          sx={{ "& .MuiTextField-root": { m: 1, width: "33%" }, paddingY: 2 }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              name="postalAddress"
              label="P.O.Box Address"
              placeholder="Enter postal address"
              required
              error={!!errors.postalAddress}
              helperText={errors.postalAddress?.message}
              {...register("postalAddress", {
                required: {
                  value: true,
                  message: "A postal address is required",
                },
              })}
            />
            <TextField
              name="city"
              label="City"
              placeholder="Enter organization city"
              required
              error={!!errors.city}
              helperText={errors.city?.message}
              {...register("city", {
                required: {
                  value: true,
                  message: "The organization city is required",
                },
              })}
            />
            <TextField
              name="country"
              label="Country"
              placeholder="Enter organization country"
              required
              error={!!errors.country}
              helperText={errors.country?.message}
              {...register("country", {
                required: {
                  value: true,
                  message: "The organization country is required",
                },
              })}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              name="officeBuilding"
              label="Office Building"
              placeholder="Enter Office Building"
              required
              error={!!errors.officeBuilding}
              helperText={errors.officeBuilding?.message}
              {...register("officeBuilding", {
                required: {
                  value: true,
                  message: "The organization office building is required",
                },
              })}
            />
            <TextField
              name="streetAddress"
              label="Street Address"
              placeholder="Enter street address"
              required
              error={!!errors.streetAddress}
              helperText={errors.streetAddress?.message}
              {...register("streetAddress", {
                required: {
                  value: true,
                  message: "The organization street address is required",
                },
              })}
            />
            <TextField
              name="emailAddress"
              label="Organization Email Address"
              placeholder="Enter organization email address"
              required
              type="email"
              error={!!errors.emailAddress}
              helperText={errors.emailAddress?.message}
              {...register("emailAddress", {
                required: {
                  value: true,
                  message: "The organization email address is required",
                },
              })}
            />
          </div>
        </Box>
        <Typography variant="h5" component="h3" gutterBottom>
          Contact Person Information
        </Typography>
        <Divider sx={{ borderColor: "#828282" }} />
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1 },
            "& .MuiTextField-root:first-child": { width: "10%" },
            "& .MuiTextField-root ~.MuiTextField-root": { width: "30%" },
            paddingY: 2,
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <TextField
            name="title"
            label="Title"
            required
            error={!!errors.title}
            helperText={errors.title?.message}
            select
            inputProps={register("title", {
              required: {
                value: true,
                message: "Enter appropriate title",
              },
            })}
          >
            {titles.map((title: Options) => (
              <MenuItem value={title.name} key={title.name}>
                {title.value}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            name="fullName"
            label="Full Name"
            placeholder="Enter Full Name"
            required
            error={!!errors.fullName}
            helperText={errors.fullName?.message}
            {...register("fullName", {
              required: {
                value: true,
                message: "Contact full name is required",
              },
            })}
          />
          <TextField
            name="contactEmail"
            label="Email Address"
            placeholder="Contact Email Address"
            required
            type="email"
            error={!!errors.contactEmail}
            helperText={errors.contactEmail?.message}
            {...register("contactEmail", {
              required: {
                value: true,
                message: "Contact email address is required",
              },
            })}
          />
          <TextField
            name="phoneNumber"
            label="Phone Number"
            placeholder="Enter Phone Number"
            required
            error={!!errors.phoneNumber}
            helperText={errors.phoneNumber?.message}
            {...register("phoneNumber", {
              required: {
                value: true,
                message: "Contact phone number is required",
              },
            })}
          />
        </Box>
      </Box>
      {activeStep < 3 && (
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
          <Button type="submit">Complete Step</Button>
        </Box>
      )}
    </Box>
  );
}
