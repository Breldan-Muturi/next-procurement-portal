import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import TextField from "@mui/material/TextField";
import React, { useState } from "react";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { SubmitHandler, useForm } from "react-hook-form";
import { Company, CreateCompanyInput, CreateCompanyMutation } from "../API";
import { CompanyFiles } from "../types";
import { uuid } from "uuidv4";
import { API, Storage } from "aws-amplify";
import { createCompany } from "../graphql/mutations";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/auth";

export default function Information() {
  const [files, setFiles] = useState<CompanyFiles>({
    registrationCertificate: undefined,
    kraPinCertificate: undefined,
    taxComplianceCertificate: undefined,
    agpoCertificate: undefined,
    cr12: undefined,
  });

  const registrationCertificatePath: string = uuid();
  const cr12Path: string = uuid();
  const kraPinCertificatePath: string = uuid();
  const taxComplianceCertificatePath: string = uuid();
  const agpoCertificatePath: string = uuid();

  const handleFileChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: string
  ) => {
    setFiles((prev) => ({ ...prev, [field]: e.target.files[0] }));
  };
  const { register, formState, handleSubmit } = useForm<Company>({
    mode: "onChange",
  });
  const onSubmit: SubmitHandler<Company> = async (data) => {
    try {
      uploadFiles(files);
      const createNewCompanyInput: CreateCompanyInput = {
        organizationName: data.organizationName,
        organizationType: data.organizationType,
        ownership: data.ownership,
        natureOfBusiness: data.natureOfBusiness,
        organizationRegistrationDate: data.organizationRegistrationDate,
        organizationRegistrationNumber: data.organizationRegistrationNumber,
        registrationCertificate: registrationCertificatePath,
        cr12: cr12Path,
        KRAPIN: data.KRAPIN,
        KRAPINCertificate: kraPinCertificatePath,
        taxComplianceNumber: data.taxComplianceNumber,
        taxComplianceExpiry: data.taxComplianceExpiry,
        taxComplianceCertificate: taxComplianceCertificatePath,
        agpoCategory: data.agpoCategory,
        agpoExpiryDate: data.agpoExpiryDate,
        agpoCertificate: agpoCertificatePath,
      };
      const createNewCompany = (await API.graphql({
        query: createCompany,
        variables: { input: createNewCompanyInput },
        authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
      })) as { data: CreateCompanyMutation };
      console.log(createNewCompany.data.createCompany.organizationName);
    } catch (error) {
      console.log(error);
    }
  };

  async function uploadFiles(files: CompanyFiles) {
    try {
      await Storage.put(
        registrationCertificatePath,
        files.registrationCertificate,
        {
          contentType: files.registrationCertificate.type,
        }
      );
      await Storage.put(cr12Path, files.cr12, {
        contentType: files.cr12.type,
      });
      await Storage.put(kraPinCertificatePath, files.kraPinCertificate, {
        contentType: files.kraPinCertificate.type,
      });
      await Storage.put(
        taxComplianceCertificatePath,
        files.taxComplianceCertificate,
        {
          contentType: files.taxComplianceCertificate.type,
        }
      );
      {
        files.agpoCertificate &&
          (await Storage.put(agpoCertificatePath, files.agpoCertificate, {
            contentType: files.agpoCertificate.type,
          }));
      }
    } catch (error) {
      throw new Error(error);
    }
  }
  return (
    <Box component="section" sx={{ p: 3, m: 3, border: "1px solid black" }}>
      <Typography variant="h5" component="h3" gutterBottom>
        Company Registration Information
      </Typography>
      <Divider sx={{ borderColor: "#828282", mb: 1.5 }} />
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25%" },
        }}
        noValidate
        autoComplete="off"
      >
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              label="Organization name"
              placeholder="Organization name"
              required
              name="organizationName"
              {...register}
            />
            <TextField
              label="Organization type"
              placeholder="Organization type"
              required
              name="organizationType"
              select
              {...register}
            />
            <TextField
              label="Ownership"
              placeholder="Ownership"
              name="ownership"
              required
              select
              {...register}
            />
            <TextField
              label="Nature of business"
              placeholder="Nature of Business"
              name="natureOfBusiness"
              required
              select
              {...register}
            />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <DatePicker
              label="Registration Date"
              renderInput={(params) => (
                <TextField name="registrationDate" {...params} {...register} />
              )}
              onChange={function (
                value: unknown,
                keyboardInputValue?: string
              ): void {
                throw new Error("Function not implemented.");
              }}
              value={undefined}
            />
            <TextField
              label="Organization Registration Number"
              placeholder="Enter registration number"
              required
              name="registrationNumber"
              {...register}
            />
            <TextField
              label="Registration Certificate"
              name="registrationCertificate"
              {...register}
            />
            <TextField label="CR12" name="cr12" {...register} />
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <TextField
              label="KRA PIN"
              name="KRAPIN"
              placeholder="Enter KRA PIN"
              required
              {...register}
            />
            <DatePicker
              label="Tax Compliance Expiration"
              renderInput={(params) => (
                <TextField
                  name="taxComplianceExpiry"
                  {...params}
                  {...register}
                />
              )}
              onChange={function (
                value: unknown,
                keyboardInputValue?: string
              ): void {
                throw new Error("Function not implemented.");
              }}
              value={undefined}
            />
            <TextField
              label="Attach KRA PIN"
              name="KRAPINCertificate"
              {...register}
            />
            <TextField
              label="Attach Tax Compliance"
              name="taxComplianceCertificate"
              {...register}
            />
          </div>
          <div
            style={{
              display: "flex",
              width: "94%",
            }}
          >
            <TextField
              label="AGPO Category"
              name="agpoCategory"
              select
              placeholder="Enter AGPO Category"
              {...register}
            />
            <DatePicker
              label="AGPO Expiry Date"
              renderInput={(params) => (
                <TextField name="agpoExpiryDate" {...params} {...register} />
              )}
              onChange={function (
                value: unknown,
                keyboardInputValue?: string
              ): void {
                throw new Error("Function not implemented.");
              }}
              value={undefined}
            />
            <TextField
              label="Attach AGPO Certificate"
              name="agoCertificate"
              {...register}
            />
          </div>
        </LocalizationProvider>
      </Box>
    </Box>
  );
}
