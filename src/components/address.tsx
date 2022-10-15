import React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Controller, useFormContext } from "react-hook-form";
import { Title } from "../API";
import getOptions from "../lib/getOptions";
import { MenuItem } from "@mui/material";
import { Options } from "../types";

interface Props {
  activeStep: number;
}

export default function Address({ activeStep }: Props) {
  const {
    control,
    register,
    formState: { errors },
  } = useFormContext();

  const titles = getOptions(Title);
  const disabled: boolean = activeStep > 2;

  return (
    <>
      <Typography variant="h5" component="h3" gutterBottom>
        Address and Contact Details
      </Typography>
      <Divider sx={{ borderColor: "#828282" }} />
      <Box sx={{ "& .MuiTextField-root": { m: 1, width: "33%" }, paddingY: 2 }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <TextField
            InputProps={{
              readOnly: disabled,
            }}
            name="postalAddress"
            label="P.O.Box Address"
            placeholder="Enter postal address"
            required
            error={!!errors.postalAddress}
            helperText={errors.postalAddress?.message.toString()}
            {...register("postalAddress")}
          />
          <TextField
            InputProps={{
              readOnly: disabled,
            }}
            name="city"
            label="City"
            placeholder="Enter organization city"
            required
            error={!!errors.city}
            helperText={errors.city?.message.toString()}
            {...register("city")}
          />
          <TextField
            InputProps={{
              readOnly: disabled,
            }}
            name="country"
            label="Country"
            placeholder="Enter organization country"
            required
            error={!!errors.country}
            helperText={errors.country?.message.toString()}
            {...register("country")}
          />
        </div>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <TextField
            InputProps={{
              readOnly: disabled,
            }}
            name="officeBuilding"
            label="Office Building"
            placeholder="Enter Office Building"
            required
            error={!!errors.officeBuilding}
            helperText={errors.officeBuilding?.message.toString()}
            {...register("officeBuilding")}
          />
          <TextField
            InputProps={{
              readOnly: disabled,
            }}
            name="streetAddress"
            label="Street Address"
            placeholder="Enter street address"
            required
            error={!!errors.streetAddress}
            helperText={errors.streetAddress?.message.toString()}
            {...register("streetAddress")}
          />
          <TextField
            InputProps={{
              readOnly: disabled,
            }}
            name="emailAddress"
            label="Organization Email Address"
            placeholder="Enter organization email address"
            required
            type="email"
            error={!!errors.emailAddress}
            helperText={errors.emailAddress?.message.toString()}
            {...register("emailAddress")}
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
          "& .MuiTextField-root:first-of-type": { width: "10%" },
          "& .MuiTextField-root ~.MuiTextField-root": { width: "30%" },
          paddingY: 2,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <Controller
          name="title"
          control={control}
          defaultValue=""
          render={({ field: { ref, ...field } }) => (
            <TextField
              required
              InputProps={{
                readOnly: disabled,
              }}
              inputRef={ref}
              value={field.value}
              label="Title"
              onChange={(title) => field.onChange(title)}
              error={!!errors.title}
              helperText={errors.title?.message.toString()}
              select
              {...field}
            >
              {titles.map((title: Options) => (
                <MenuItem value={title.name} key={title.name}>
                  {title.value}
                </MenuItem>
              ))}
            </TextField>
          )}
        />
        <TextField
          name="fullName"
          InputProps={{
            readOnly: disabled,
          }}
          label="Full Name"
          placeholder="Enter Full Name"
          required
          error={!!errors.fullName}
          helperText={errors.fullName?.message.toString()}
          {...register("fullName")}
        />
        <TextField
          name="contactEmail"
          InputProps={{
            readOnly: disabled,
          }}
          label="Email Address"
          placeholder="Contact Email Address"
          required
          type="email"
          error={!!errors.contactEmail}
          helperText={errors.contactEmail?.message.toString()}
          {...register("contactEmail")}
        />
        <TextField
          name="phoneNumber"
          InputProps={{
            readOnly: disabled,
          }}
          label="Phone Number"
          placeholder="Enter Phone Number"
          required
          error={!!errors.phoneNumber}
          helperText={errors.phoneNumber?.message.toString()}
          {...register("phoneNumber")}
        />
      </Box>
    </>
  );
}
