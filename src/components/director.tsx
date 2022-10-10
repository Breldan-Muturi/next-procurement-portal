import React, { Dispatch, SetStateAction, useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Directors, Title, Ownership } from "../API";
import { useFieldArray, useForm } from "react-hook-form";
import getOptions from "../lib/getOptions";
import { Options } from "../types";
import MenuItem from "@mui/material/MenuItem";

interface Props {
  companyId: string;
  activeStep: number;
  setActiveStep: Dispatch<SetStateAction<number>>;
}

export default function Director({
  companyId,
  activeStep,
  setActiveStep,
}: Props) {
  const {
    control,
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<Directors>({
    mode: "onChange",
  });

  const titles = getOptions(Title);
  const nationality = getOptions(Ownership);

  return (
    <Box
      component="form"
      // onSubmit={handleSubmit(onSubmit)}
      noValidate
      autoComplete="off"
    >
      <Box
        component="section"
        sx={activeStep < 3 && { p: 3, m: 3, border: "1px solid black" }}
      >
        <Typography variant="h5" component="h3" gutterBottom>
          Director Details
        </Typography>
        <Divider sx={{ borderColor: "#828282", mb: 1 }} />
        <Typography>
          Input complete list of directors and % ownership. Foreign companies
          should input Passport Number under KRA PIN
        </Typography>
        <Box
          sx={{
            "& .MuiTextField-root": { m: 1 },
            paddingY: 2,
            justifyContent: "space-between",
          }}
        >
          <TextField
            select
            required
            name="directorTitle"
            label="Title"
            placeholder="Title"
            sx={{ width: "10%" }}
            error={!!errors.directorTitle}
            helperText={errors.directorTitle?.message}
            inputProps={register("directorTitle", {
              required: {
                value: true,
                message: "A director title is required",
              },
            })}
          >
            {titles.map((title: Options) => (
              <MenuItem key={title.name} value={title.name}>
                {title.value}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            name="directorName"
            label="Director's Name"
            placeholder="Director's Name"
            sx={{ width: "25%" }}
            error={!!errors.directorName}
            helperText={errors.directorName?.message}
            {...register("directorName", {
              required: {
                value: true,
                message: "The director's name is required",
              },
            })}
          />
          <TextField
            required
            type="email"
            name="directorEmailAddress"
            label="Email Address"
            placeholder="Director's email address"
            sx={{ width: "20%" }}
            error={!!errors.directorEmailAddress}
            helperText={errors.directorEmailAddress?.message}
            {...register("directorEmailAddress", {
              required: {
                value: true,
                message: "The director's email address is required.",
              },
            })}
          />
          <TextField
            select
            required
            name="directorNationality"
            label="Director's Nationality"
            placeholder="Director's Nationality"
            sx={{ width: "20%" }}
            error={!!errors.directorNationality}
            helperText={errors.directorNationality?.message}
            inputProps={register("directorNationality", {
              required: {
                value: true,
                message: "The director's nationality is required",
              },
            })}
          >
            {nationality.map((directorNationality: Options) => (
              <MenuItem
                key={directorNationality.name}
                value={directorNationality.name}
              >
                {directorNationality.value}
              </MenuItem>
            ))}
          </TextField>
          <TextField
            required
            type="number"
            name="directorShares"
            label="% Shares"
            placeholder="% Shares"
            sx={{ width: "15%" }}
            error={!!errors.directorShares}
            helperText={errors.directorShares?.message}
            {...register("directorShares", {
              required: {
                value: true,
                message: "The director's shares are required",
              },
            })}
          />
        </Box>
        {activeStep < 3 && (
          <Button
            id="append"
            startIcon={<PersonAddIcon />}
            // onClick={() =>
            //   append(
            //     { name: renderCount.toString() },
            //     { shouldFocus: !withoutFocus }
            //   )
            // }
          >
            Add director
          </Button>
        )}
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
          <Button onClick={() => setActiveStep((prev) => prev + 1)}>
            Complete Step
          </Button>
        </Box>
      )}
    </Box>
  );
}
