import React, { Dispatch, SetStateAction, useState } from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { Directors, Title, Ownership } from "../API";
import {
  Controller,
  useFieldArray,
  useForm,
  useFormContext,
} from "react-hook-form";
import getOptions from "../lib/getOptions";
import { Options } from "../types";
import MenuItem from "@mui/material/MenuItem";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import PersonRemoveIcon from "@mui/icons-material/PersonRemove";
import Grid from "@mui/material/Unstable_Grid2";

interface Props {
  activeStep: number;
}

export default function Director({ activeStep }: Props) {
  const {
    control,
    register,
    watch,
    formState: { errors },
  } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    name: "directors",
    keyName: "directorsId",
  });

  const titles = getOptions(Title);
  const nationality = getOptions(Ownership);

  const disabled: boolean = activeStep > 2;

  return (
    <>
      <Typography variant="h5" component="h3" gutterBottom>
        Director Details
      </Typography>
      <Divider sx={{ borderColor: "#828282", mb: 1 }} />
      <Typography>
        Input complete list of directors and % ownership. Foreign companies
        should input Passport Number under KRA PIN
      </Typography>
      {fields.map((director, index) => {
        const directorTitle = `directors.${index}.directorTitle`;
        const directorName = `directors.${index}.directorName`;
        const directorKRAPIN = `directors.${index}.directorKRAPIN`;
        const directorEmailAddress = `directors.${index}.directorEmailAddress`;
        const directorNationality = `directors.${index}.directorNationality`;
        const directorShares = `directors.${index}.directorShares`;
        return (
          <Grid
            key={director.directorsId}
            container
            xs={12}
            justifyContent="space-between"
          >
            <Grid
              xs={activeStep < 3 ? 11 : 12}
              justifyContent="space-between"
              py={1}
              sx={{
                "& .MuiTextField-root": { m: 1 },
              }}
            >
              <Controller
                name={directorTitle}
                control={control}
                defaultValue=""
                render={({ field: { ref, ...field } }) => (
                  <TextField
                    select
                    InputProps={{
                      readOnly: disabled,
                    }}
                    required
                    size="small"
                    label="Title"
                    placeholder="Title"
                    sx={{ width: "10%" }}
                    inputRef={ref}
                    value={field.value}
                    error={!!errors.directors?.[index]?.directorTitle}
                    helperText={errors.directors?.[
                      index
                    ]?.directorTitle?.message.toString()}
                    onChange={(directorTitle) => field.onChange(directorTitle)}
                    {...field}
                  >
                    {titles.map((title: Options) => (
                      <MenuItem key={title.name} value={title.name}>
                        {title.value}
                      </MenuItem>
                    ))}
                  </TextField>
                )}
              />
              <TextField
                required
                InputProps={{
                  readOnly: disabled,
                }}
                size="small"
                label="Full Name"
                placeholder="Full Name"
                defaultValue=""
                sx={{ width: "30%" }}
                error={!!errors.directors?.[index]?.directorName}
                helperText={errors?.directors?.[
                  index
                ]?.directorName?.message.toString()}
                {...register(directorName)}
              />
              <TextField
                required
                InputProps={{
                  readOnly: disabled,
                }}
                size="small"
                label="KRA PIN"
                placeholder="KRA PIN"
                defaultValue=""
                sx={{ width: "20%" }}
                error={!!errors.directors?.[index]?.directorKRAPIN}
                helperText={errors?.directors?.[
                  index
                ]?.directorKRAPIN?.message.toString()}
                {...register(directorKRAPIN)}
              />
              <TextField
                required
                InputProps={{
                  readOnly: disabled,
                }}
                size="small"
                type="email"
                label="Email Address"
                defaultValue=""
                sx={{ width: "30%" }}
                placeholder="Email address"
                error={!!errors.directors?.[index]?.directorEmailAddress}
                helperText={errors?.directors?.[
                  index
                ]?.directorEmailAddress?.message.toString()}
                {...register(directorEmailAddress)}
              />
              <Controller
                name={directorNationality}
                control={control}
                defaultValue=""
                render={({ field: { ref, ...field } }) => (
                  <TextField
                    select
                    InputProps={{
                      readOnly: disabled,
                    }}
                    required
                    size="small"
                    label="Nationality"
                    placeholder="Nationality"
                    sx={{ width: "15%" }}
                    inputRef={ref}
                    value={field.value}
                    error={!!errors.directors?.[index]?.directorNationality}
                    helperText={errors.directors?.[
                      index
                    ]?.directorNationality?.message.toString()}
                    onChange={(directorNationality) =>
                      field.onChange(directorNationality)
                    }
                    {...field}
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
                )}
              />
              <TextField
                required
                InputProps={{
                  readOnly: disabled,
                }}
                size="small"
                type="number"
                defaultValue=""
                label="% Shares"
                placeholder="% Shares"
                sx={{ width: "10%" }}
                error={!!errors.directors?.[index]?.directorShares}
                helperText={errors.directors?.[
                  index
                ]?.directorShares?.message.toString()}
                {...register(directorShares)}
              />
            </Grid>
            {activeStep < 3 && (
              <Grid xs={1} py={2}>
                <Tooltip title="Remove director" arrow>
                  <IconButton color="error" onClick={() => remove(index)}>
                    <PersonRemoveIcon />
                  </IconButton>
                </Tooltip>
              </Grid>
            )}
          </Grid>
        );
      })}
      {activeStep < 3 && (
        <Button
          id="append"
          startIcon={<PersonAddIcon />}
          onClick={() => append({ directorId: fields.length.toString() })}
        >
          Add director
        </Button>
      )}
    </>
  );
}
