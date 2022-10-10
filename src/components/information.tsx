import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import MenuItem from "@mui/material/MenuItem";
import React, { Dispatch, SetStateAction, useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Controller, SubmitHandler, useFormContext } from "react-hook-form";
import {
  Company,
  CreateCompanyInput,
  CreateCompanyMutation,
  OrganizationType,
  Ownership,
  AGPOCategory,
} from "../API";
import { FileUpload, Options } from "../types";
import { API } from "aws-amplify";
import { createCompany } from "../graphql/mutations";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/auth";
import FileUploadField from "./FileUploadField";
import useAcceptedDates from "../hooks/useAcceptedDates";
import { Button } from "@mui/material";
import formatDateAws from "../lib/formatDateAWS";
import getOptions from "../lib/getOptions";
import uploadFiles from "../lib/uploadFiles";

interface Props {
  activeStep: number;
  setActiveStep: Dispatch<SetStateAction<number>>;
  setCompanyId: Dispatch<SetStateAction<string>>;
}

export default function Information({
  activeStep,
  setActiveStep,
  setCompanyId,
}: Props) {
  const {
    currentDate,
    twoYearsLater,
    twoYearsPrior,
    oneYearLater,
    oneYearPrior,
  } = useAcceptedDates();
  const [registrationCertificate, setRegistrationCertificate] =
    useState<FileUpload>();
  const [cr12, setCr12] = useState<FileUpload>();
  const [kraPinCertificate, setKraPinCertificate] = useState<FileUpload>();
  const [taxComplianceCertificate, setTaxComplianceCertificate] =
    useState<FileUpload>();
  const [agpoCertificate, setAgpoCertificate] = useState<FileUpload>();

  const ownerships = getOptions(Ownership);
  const organizationTypes = getOptions(OrganizationType);
  const agpoCategories = getOptions(AGPOCategory);

  const {
    register,
    control,
    formState: { errors },
    handleSubmit,
  } = useFormContext<Company>();

  const onSubmit: SubmitHandler<Company> = async (data) => {
    try {
      uploadFiles([
        registrationCertificate,
        cr12,
        kraPinCertificate,
        taxComplianceCertificate,
        agpoCertificate,
      ]);
      const createNewCompanyInput: CreateCompanyInput = {
        organizationName: data.organizationName,
        organizationType: data.organizationType,
        ownership: data.ownership,
        natureOfBusiness: data.natureOfBusiness,
        organizationRegistrationDate: formatDateAws(
          data.organizationRegistrationDate
        ),
        organizationRegistrationNumber: data.organizationRegistrationNumber,
        registrationCertificate: registrationCertificate.path,
        cr12: cr12.path,
        KRAPIN: data.KRAPIN,
        KRAPINCertificate: kraPinCertificate.path,
        taxComplianceNumber: data.taxComplianceNumber,
        taxComplianceExpiry: formatDateAws(data.taxComplianceExpiry),
        taxComplianceCertificate: taxComplianceCertificate.path,
        agpoCategory: data.agpoCategory,
        agpoExpiryDate: formatDateAws(data.agpoExpiryDate),
        agpoCertificate: agpoCertificate.path,
      };
      const createNewCompany = (await API.graphql({
        query: createCompany,
        variables: { input: createNewCompanyInput },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as { data: CreateCompanyMutation };
      setCompanyId(createNewCompany.data.createCompany.id);
      setActiveStep((prev) => prev + 1);
    } catch (error) {
      console.log(error);
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
          Company Registration Information
        </Typography>
        <Divider sx={{ borderColor: "#828282" }} />
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <Box
            sx={{
              "& .MuiTextField-root": { m: 1, width: "25%" },
              paddingY: 2,
            }}
          >
            {/* Organization */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <TextField
                name="organizationName"
                label="Organization name"
                placeholder="Organization name"
                required
                error={!!errors.organizationName}
                helperText={errors.organizationName?.message}
                {...register("organizationName", {
                  required: {
                    value: true,
                    message: "An organization name is required.",
                  },
                })}
              />
              <TextField
                label="Organization type"
                placeholder="Organization type"
                select
                required
                defaultValue=""
                inputProps={register("organizationType", {
                  required: {
                    value: true,
                    message: "Please enter an organization type.",
                  },
                })}
                error={!!errors.organizationType}
                helperText={errors.organizationType?.message}
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
              <TextField
                label="Ownership"
                placeholder="Ownership"
                select
                required
                defaultValue=""
                inputProps={register("ownership", {
                  required: {
                    value: true,
                    message: "Please enter the organization ownership.",
                  },
                })}
                error={!!errors.ownership}
                helperText={errors.ownership?.message}
              >
                {ownerships.map((ownership: Options) => (
                  <MenuItem value={ownership.name} key={ownership.name}>
                    {ownership.value}
                  </MenuItem>
                ))}
              </TextField>
              <TextField
                name="natureOfBusiness"
                label="Nature of business"
                placeholder="Nature of Business"
                required
                error={!!errors.natureOfBusiness}
                helperText={errors.natureOfBusiness?.message}
                {...register("natureOfBusiness", {
                  required: {
                    value: true,
                    message: "Please enter the organization ownership.",
                  },
                })}
              />
            </div>

            {/* Registration */}
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Controller
                name="organizationRegistrationDate"
                control={control}
                defaultValue={new Date().toISOString()}
                rules={{
                  required: {
                    value: true,
                    message: "The organization registration date is required",
                  },
                }}
                render={({ field: { ref, ...field } }) => (
                  <DatePicker
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
                        helperText={
                          errors.organizationRegistrationDate?.message
                        }
                        {...field}
                      />
                    )}
                  />
                )}
              />
              <TextField
                name="organizationRegistrationNumber"
                label="Organization Registration Number"
                placeholder="Enter registration number"
                required
                error={!!errors.organizationRegistrationNumber}
                helperText={errors.organizationRegistrationNumber?.message}
                {...register("organizationRegistrationNumber", {
                  required: {
                    value: true,
                    message:
                      "Please enter the organization registration number.",
                  },
                })}
              />
              <FileUploadField
                upload={registrationCertificate}
                setFile={setRegistrationCertificate}
                label="Add Registration Certificate"
              />
              <FileUploadField
                upload={cr12}
                setFile={setCr12}
                label="Add CR12"
              />
            </div>

            {/* Tax Compliance */}
            <div style={{ display: "flex" }}>
              <TextField
                label="Tax Compliance Number"
                name="taxComplianceNumber"
                placeholder="Enter Tax Compliance Number"
                required
                error={!!errors.taxComplianceNumber}
                helperText={errors.taxComplianceNumber?.message}
                {...register("taxComplianceNumber", {
                  required: {
                    value: true,
                    message:
                      "The organization tax compliance number is required",
                  },
                })}
              />
              <Controller
                name="taxComplianceExpiry"
                control={control}
                defaultValue={new Date().toISOString()}
                rules={{
                  required: {
                    value: true,
                    message: "The tax compliance expiry date is required",
                  },
                }}
                render={({ field: { ref, ...field } }) => (
                  <DatePicker
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
                        helperText={errors.taxComplianceExpiry?.message}
                        {...field}
                      />
                    )}
                  />
                )}
              />
              <FileUploadField
                upload={taxComplianceCertificate}
                setFile={setTaxComplianceCertificate}
                label="Attach Tax Compliance"
              />
            </div>
            {/* KRA */}
            <div style={{ display: "flex" }}>
              <TextField
                label="KRA PIN"
                name="KRAPIN"
                placeholder="Enter KRA PIN"
                required
                error={!!errors.KRAPIN}
                helperText={errors.KRAPIN?.message}
                {...register("KRAPIN", {
                  required: {
                    value: true,
                    message: "The organization KRA PIN is required",
                  },
                })}
              />
              <FileUploadField
                upload={kraPinCertificate}
                setFile={setKraPinCertificate}
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
              "& .MuiTextField-root": { m: 1, width: "25%" },
              display: "flex",
              paddingY: 2,
            }}
          >
            <TextField
              label="AGPO Category"
              placeholder="Enter AGPO Category"
              select
              defaultValue=""
              inputProps={register("agpoCategory")}
              error={!!errors.agpoCategory}
              helperText={errors.agpoCategory?.message}
            >
              {agpoCategories.map((agpoCategory: Options) => (
                <MenuItem value={agpoCategory.name} key={agpoCategory.name}>
                  {agpoCategory.value}
                </MenuItem>
              ))}
            </TextField>
            <Controller
              name="agpoExpiryDate"
              control={control}
              defaultValue={new Date().toISOString()}
              rules={{
                required: {
                  value: true,
                  message: "An Agpo Expiry Date is required",
                },
              }}
              render={({ field: { ref, ...field } }) => (
                <DatePicker
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
                      helperText={errors.agpoExpiryDate?.message}
                      {...field}
                    />
                  )}
                />
              )}
            />
            <FileUploadField
              upload={agpoCertificate}
              setFile={setAgpoCertificate}
              label="Attach Agpo Certificate"
            />
          </Box>
        </LocalizationProvider>
      </Box>
      {activeStep < 3 && (
        <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
          <Box sx={{ flex: "1 1 auto" }} />
          <Button
            sx={{ mr: 1 }}
            onClick={() => setActiveStep((prev) => prev + 1)}
          >
            Next
          </Button>
          <Button type="submit">Complete Step</Button>
        </Box>
      )}
    </Box>
  );
}
