import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller, useFormContext } from "react-hook-form";
import { OrganizationType, Ownership, AGPOCategory, Company } from "../API";
import { Options } from "../types";
import FileUploadField from "./FileUploadField";
import useAcceptedDates from "../hooks/useAcceptedDates";
import getOptions from "../lib/getOptions";

interface Props {
  activeStep?: number;
  company?: Company;
}

export default function Information({ activeStep, company }: Props) {
  const {
    currentDate,
    twoYearsLater,
    twoYearsPrior,
    oneYearLater,
    oneYearPrior,
  } = useAcceptedDates();

  const ownerships = getOptions(Ownership);
  const organizationTypes = getOptions(OrganizationType);
  const agpoCategories = getOptions(AGPOCategory);

  const {
    register,
    control,
    formState: { errors },
  } = useFormContext();
  const disabled: boolean = !activeStep && activeStep > 2;

  return (
    <>
      <Typography variant="h5" component="h3" gutterBottom>
        Company Registration Information
      </Typography>
      <Divider sx={{ borderColor: "#828282" }} />
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Box
          sx={{
            "& .MuiTextField-root": { my: 2, mx: 1, width: "25%" },
            paddingY: 2,
          }}
        >
          {/* Organization */}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              InputProps={{
                readOnly: disabled,
              }}
              label="Organization name"
              placeholder="Organization name"
              required
              error={!!errors.organizationName}
              helperText={errors.organizationName?.message.toString()}
              {...register("organizationName")}
            />

            <Controller
              name="organizationType"
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
                  label="Organization type"
                  placeholder="Organization type"
                  onChange={(organizationType) =>
                    field.onChange(organizationType)
                  }
                  error={!!errors.organizationType}
                  helperText={errors.organizationType?.message.toString()}
                  select
                  {...field}
                >
                  {organizationTypes.map((organizationType: Options) => (
                    <MenuItem
                      value={organizationType.name}
                      key={organizationType.name}
                    >
                      {organizationType.value}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
            <Controller
              name="ownership"
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
                  label="Ownership"
                  placeholder="Ownership"
                  onChange={(ownership) => field.onChange(ownership)}
                  error={!!errors.ownership}
                  helperText={errors.ownership?.message.toString()}
                  select
                  {...field}
                >
                  {ownerships.map((ownership: Options) => (
                    <MenuItem value={ownership.name} key={ownership.name}>
                      {ownership.value}
                    </MenuItem>
                  ))}
                </TextField>
              )}
            />
            <TextField
              InputProps={{
                readOnly: disabled,
              }}
              label="Nature of business"
              placeholder="Nature of Business"
              required
              error={!!errors.natureOfBusiness}
              helperText={errors.natureOfBusiness?.message.toString()}
              {...register("natureOfBusiness")}
            />
          </div>

          {/* Registration */}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <Controller
              name="organizationRegistrationDate"
              control={control}
              defaultValue={new Date().toISOString()}
              render={({ field: { ref, ...field } }) => (
                <DatePicker
                  readOnly={disabled}
                  value={field.value}
                  onChange={(organizationRegistrationDate) =>
                    field.onChange(organizationRegistrationDate)
                  }
                  label="Registration Date"
                  maxDate={currentDate}
                  renderInput={(params) => (
                    <TextField
                      inputRef={ref}
                      {...params}
                      error={!!errors.organizationRegistrationDate}
                      helperText={errors.organizationRegistrationDate?.message.toString()}
                      {...field}
                    />
                  )}
                />
              )}
            />
            <TextField
              InputProps={{
                readOnly: disabled,
              }}
              name="organizationRegistrationNumber"
              label="Organization Registration Number"
              placeholder="Enter registration number"
              required
              error={!!errors.organizationRegistrationNumber}
              helperText={errors.organizationRegistrationNumber?.message.toString()}
              {...register("organizationRegistrationNumber")}
            />
            <FileUploadField
              disabled={activeStep > 2}
              name="registrationCertificate"
              label="Add Registration Certificate"
            />
            <FileUploadField
              disabled={activeStep > 2}
              name="cr12"
              label="Add CR12"
            />
          </div>

          {/* Tax Compliance */}
          <div style={{ display: "flex" }}>
            <TextField
              InputProps={{
                readOnly: disabled,
              }}
              label="Tax Compliance Number"
              name="taxComplianceNumber"
              placeholder="Enter Tax Compliance Number"
              required
              error={!!errors.taxComplianceNumber}
              helperText={errors.taxComplianceNumber?.message.toString()}
              {...register("taxComplianceNumber")}
            />
            <Controller
              name="taxComplianceExpiry"
              control={control}
              defaultValue={new Date().toISOString()}
              render={({ field: { ref, ...field } }) => (
                <DatePicker
                  readOnly={disabled}
                  value={field.value}
                  onChange={(taxComplianceExpiry) =>
                    field.onChange(taxComplianceExpiry)
                  }
                  label="Tax Compliance Expiration"
                  maxDate={oneYearLater}
                  minDate={oneYearPrior}
                  renderInput={(params) => (
                    <TextField
                      inputRef={ref}
                      {...params}
                      error={!!errors.taxComplianceExpiry}
                      helperText={errors.taxComplianceExpiry?.message.toString()}
                      {...field}
                    />
                  )}
                />
              )}
            />
            <FileUploadField
              disabled={activeStep > 2}
              name="taxComplianceCertificate"
              label="Attach Tax Compliance"
            />
          </div>
          {/* KRA */}
          <div style={{ display: "flex" }}>
            <TextField
              InputProps={{
                readOnly: disabled,
              }}
              label="KRA PIN"
              name="KRAPIN"
              placeholder="Enter KRA PIN"
              required
              error={!!errors.KRAPIN}
              helperText={errors.KRAPIN?.message.toString()}
              {...register("KRAPIN")}
            />
            <FileUploadField
              disabled={activeStep > 2}
              name="KRAPINCertificate"
              label="Attach KRA PIN"
            />
          </div>
        </Box>

        {/* Agpo  */}
        <Typography variant="h5" component="h3" gutterBottom>
          AGPO Qualified Organizations
        </Typography>
        <Divider sx={{ borderColor: "#828282" }} />
        <Box
          sx={{
            "& .MuiTextField-root": { my: 2, mx: 1, width: "25%" },
            display: "flex",
            paddingY: 2,
          }}
        >
          <Controller
            name="agpoCategory"
            control={control}
            defaultValue=""
            render={({ field: { ref, ...field } }) => (
              <TextField
                InputProps={{
                  readOnly: disabled,
                }}
                select
                required
                value={field.value}
                label="AGPO Category"
                placeholder="Enter AGPO Category"
                inputRef={ref}
                error={!!errors.agpoCategory}
                helperText={errors.agpoCategory?.message.toString()}
                onChange={(agpoCategory) => field.onChange(agpoCategory)}
                {...field}
              >
                {agpoCategories.map((agpoCategory: Options) => (
                  <MenuItem value={agpoCategory.name} key={agpoCategory.name}>
                    {agpoCategory.value}
                  </MenuItem>
                ))}
              </TextField>
            )}
          />
          <Controller
            name="agpoExpiryDate"
            control={control}
            defaultValue={new Date().toISOString()}
            render={({ field: { ref, ...field } }) => (
              <DatePicker
                readOnly={disabled}
                value={field.value}
                onChange={(agpoExpiryDate) => field.onChange(agpoExpiryDate)}
                label="AGPO Expiry Date"
                maxDate={twoYearsLater}
                minDate={twoYearsPrior}
                renderInput={(params) => (
                  <TextField
                    inputRef={ref}
                    {...params}
                    error={!!errors.agpoExpiryDate}
                    helperText={errors.agpoExpiryDate?.message.toString()}
                    {...field}
                  />
                )}
              />
            )}
          />
          <FileUploadField
            disabled={activeStep > 2}
            name="agpoCertificate"
            label="Attach Agpo Certificate"
          />
        </Box>
      </LocalizationProvider>
    </>
  );
}
