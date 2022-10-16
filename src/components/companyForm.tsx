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
import CompleteReg from "../components/completeReg";
import { FormProvider, SubmitHandler, useForm } from "react-hook-form";
import {
  AddressDetails,
  Company,
  CreateAddressDetailsInput,
  CreateAddressDetailsMutation,
  CreateCompanyInput,
  CreateCompanyMutation,
  CreateDirectorsInput,
  CreateDirectorsMutation,
  DeleteDirectorsInput,
  DeleteDirectorsMutation,
  Directors,
  UpdateAddressDetailsInput,
  UpdateAddressDetailsMutation,
  UpdateCompanyInput,
  UpdateCompanyMutation,
} from "../API";
import uploadFiles from "../lib/uploadFiles";
import formatDateAws from "../lib/formatDateAWS";
import {
  createAddressDetails,
  createCompany,
  createDirectors,
  deleteDirectors,
  updateAddressDetails,
  updateCompany,
} from "../graphql/mutations";
import { API } from "aws-amplify";
import { GRAPHQL_AUTH_MODE } from "@aws-amplify/auth";
import Button from "@mui/material/Button";
import { yupResolver } from "@hookform/resolvers/yup";
import {
  addressDetailsSchema,
  companySchema,
  directorSchema,
} from "../validators/companyValidators";
import { v4 } from "uuid";
import { FileUpload } from "../types";
import { Paper } from "@mui/material";
import { useRouter } from "next/router";

interface Props {
  company?: Company;
}

const steps = [
  "Company Registration Information",
  "Address and Contact Details",
  "Director Details",
  "Confirm and Submit",
];

export default function CompanyForm({ company }: Props) {
  const [activeStep, setActiveStep] = useState(0);
  const [companyId, setCompanyId] = useState<string>(company?.id ?? "");
  const [addressId, setAddressId] = useState<string>(
    company?.addressDetails.items[0]?.id ?? ""
  );
  const [directorIds, setDirectorIds] = useState<string[]>(
    company?.directors.items?.map((director) => director.id) ?? []
  );
  const [completed, setCompleted] = useState<{ [k: number]: boolean }>({});
  const [acceptance, setAcceptance] = useState<Boolean>(false);

  const methods = useForm({
    mode: "onChange",
    resolver: yupResolver(
      (activeStep === 0 && companySchema) ||
        (activeStep === 1 && addressDetailsSchema) ||
        (activeStep === 2 && directorSchema)
    ),
    defaultValues: {
      organizationName: company?.organizationName ?? "",
      organizationType: company?.organizationType ?? null,
      ownership: company?.ownership ?? null,
      natureOfBusiness: company?.natureOfBusiness ?? null,
      organizationRegistrationDate: company?.organizationRegistrationDate ?? "",
      organizationRegistrationNumber:
        company?.organizationRegistrationNumber ?? "",
      registrationCertificate: company?.registrationCertificate ?? "",
      cr12: company?.cr12 ?? "",
      KRAPIN: company?.KRAPIN ?? "",
      KRAPINCertificate: company?.KRAPINCertificate ?? "",
      taxComplianceNumber: company?.taxComplianceNumber ?? "",
      taxComplianceExpiry: company?.taxComplianceExpiry ?? "",
      taxComplianceCertificate: company?.taxComplianceCertificate ?? "",
      agpoCategory: company?.agpoCategory ?? null,
      agpoExpiryDate: company?.agpoExpiryDate ?? "",
      agpoCertificate: company?.agpoCertificate ?? "",
      postalAddress: company?.addressDetails.items[0]?.postalAddress ?? "",
      city: company?.addressDetails.items[0]?.city ?? "",
      country: company?.addressDetails.items[0]?.country ?? "",
      officeBuilding: company?.addressDetails.items[0]?.officeBuilding ?? "",
      streetAddress: company?.addressDetails.items[0]?.streetAddress ?? "",
      emailAddress: company?.addressDetails.items[0]?.emailAddress ?? "",
      title: company?.addressDetails.items[0]?.title ?? "",
      fullName: company?.addressDetails.items[0]?.fullName ?? "",
      contactEmail: company?.addressDetails.items[0]?.contactEmail ?? "",
      phoneNumber: company?.addressDetails.items[0]?.phoneNumber ?? "",
      directors: company?.directors.items ?? [],
    },
  });

  const handleStep = (step: number) => () => {
    setActiveStep(step);
  };

  const router = useRouter();

  const handleReset = () => {
    if (activeStep === 0) {
      methods.reset((formValues) => ({
        ...formValues,
        organizationName: "",
        organizationType: "",
        ownership: "",
        natureOfBusiness: "",
        organizationRegistrationDate: "",
        organizationRegistrationNumber: "",
        registrationCertificate: "",
        cr12: "",
        KRAPIN: "",
        KRAPINCertificate: "",
        taxComplianceNumber: "",
        taxComplianceExpiry: "",
        taxComplianceCertificate: "",
        agpoCategory: "",
        agpoExpiryDate: "",
        agpoCertificate: "",
      }));
    }
    if (activeStep === 1) {
      methods.reset((formValues) => ({
        ...formValues,
        postalAddress: "",
        city: "",
        country: "",
        officeBuilding: "",
        streetAddress: "",
        emailAddress: "",
        title: "",
        fullName: "",
        contactEmail: "",
        phoneNumber: "",
      }));
    }
    if (activeStep === 2) {
      methods.reset((formValues) => ({
        ...formValues,
        directors: [],
      }));
    }
    if (activeStep === 3) {
      methods.reset();
      setActiveStep(0);
    }
  };

  const onSubmit: SubmitHandler<any> = async (data) => {
    try {
      if (activeStep === 0) {
        await submitCompany(data);
      }
      if (activeStep === 1) {
        await submitAddress(data);
      }
      if (activeStep === 2) {
        const directors: Directors[] = data.directors;
        await submitDirectors(directors);
      }
      setActiveStep((prev) => prev + 1);
    } catch (error) {
      console.log(error);
    }
  };

  const submitCompany = async (data: any) => {
    const registrationCertificateUpload: FileUpload = {
      path: v4(),
      contentType: data.registrationCertificate[0].type,
      file: data.registrationCertificate[0],
    };
    const cr12Upload: FileUpload = {
      path: v4(),
      contentType: data.cr12.type,
      file: data.cr12,
    };
    const KRAPINCertificateUpload = {
      path: v4(),
      contentType: data.KRAPINCertificate[0].type,
      file: data.KRAPINCertificate[0],
    };
    const taxComplianceCertificateUpload = {
      path: v4(),
      contentType: data.taxComplianceCertificate[0].type,
      file: data.taxComplianceCertificate[0],
    };
    const agpoCertificateUpload = {
      path: v4(),
      contentType: data.agpoCertificate[0].type,
      file: data.agpoCertificate[0],
    };
    try {
      uploadFiles([
        registrationCertificateUpload,
        cr12Upload,
        KRAPINCertificateUpload,
        taxComplianceCertificateUpload,
        agpoCertificateUpload,
      ]);

      if (companyId) {
        const updateCompanyInput: UpdateCompanyInput = {
          id: companyId,
          organizationName: data.organizationName,
          organizationType: data.organizationType,
          ownership: data.ownership,
          natureOfBusiness: data.natureOfBusiness,
          organizationRegistrationDate: formatDateAws(
            data.organizationRegistrationDate
          ),
          organizationRegistrationNumber: data.organizationRegistrationNumber,
          registrationCertificate: registrationCertificateUpload.path,
          cr12: cr12Upload.path,
          KRAPIN: data.KRAPIN,
          KRAPINCertificate: KRAPINCertificateUpload.path,
          taxComplianceNumber: data.taxComplianceNumber,
          taxComplianceExpiry: formatDateAws(data.taxComplianceExpiry),
          taxComplianceCertificate: taxComplianceCertificateUpload.path,
          agpoCategory: data.agpoCategory,
          agpoExpiryDate: formatDateAws(data.agpoExpiryDate),
          agpoCertificate: agpoCertificateUpload.path,
        };

        const updateCurrentCompany = (await API.graphql({
          query: updateCompany,
          variables: { input: updateCompanyInput },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        })) as { data: UpdateCompanyMutation };
      } else {
        const createNewCompanyInput: CreateCompanyInput = {
          organizationName: data.organizationName,
          organizationType: data.organizationType,
          ownership: data.ownership,
          natureOfBusiness: data.natureOfBusiness,
          organizationRegistrationDate: formatDateAws(
            data.organizationRegistrationDate
          ),
          organizationRegistrationNumber: data.organizationRegistrationNumber,
          registrationCertificate: registrationCertificateUpload.path,
          cr12: cr12Upload.path,
          KRAPIN: data.KRAPIN,
          KRAPINCertificate: KRAPINCertificateUpload.path,
          taxComplianceNumber: data.taxComplianceNumber,
          taxComplianceExpiry: formatDateAws(data.taxComplianceExpiry),
          taxComplianceCertificate: taxComplianceCertificateUpload.path,
          agpoCategory: data.agpoCategory,
          agpoExpiryDate: formatDateAws(data.agpoExpiryDate),
          agpoCertificate: agpoCertificateUpload.path,
        };

        const createNewCompany = (await API.graphql({
          query: createCompany,
          variables: { input: createNewCompanyInput },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        })) as { data: CreateCompanyMutation };

        setCompanyId(createNewCompany.data.createCompany.id);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const submitAddress = async (data: AddressDetails) => {
    try {
      if (addressId) {
        const updateAddressDetailsInput: UpdateAddressDetailsInput = {
          id: addressId,
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

        const updateCurrentAddressDetails = (await API.graphql({
          query: updateAddressDetails,
          variables: { input: updateAddressDetailsInput },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        })) as { data: UpdateAddressDetailsMutation };
      } else {
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

        setAddressId(createNewAddressDetails.data.createAddressDetails.id);
      }
    } catch (error) {
      console.log("Address Error:", error);
    }
  };

  const submitDirectors = async (directors: Directors[]) => {
    try {
      if (directorIds.length) {
        directorIds.forEach(async (directorId) => {
          const deleteDirectorInput: DeleteDirectorsInput = {
            id: directorId,
          };
          const deleteDirector = (await API.graphql({
            query: deleteDirectors,
            variables: { input: deleteDirectorInput },
            authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
          })) as { data: DeleteDirectorsMutation };
        });
      }
      directors.forEach(async (director) => {
        const createNewDirectorInput: CreateDirectorsInput = {
          directorTitle: director.directorTitle,
          directorName: director.directorName,
          directorKRAPIN: director.directorKRAPIN,
          directorEmailAddress: director.directorEmailAddress,
          directorNationality: director.directorNationality,
          directorShares: director.directorShares,
          companyID: companyId,
        };
        const createNewDirector = (await API.graphql({
          query: createDirectors,
          variables: { input: createNewDirectorInput },
          authMode: GRAPHQL_AUTH_MODE.AMAZON_COGNITO_USER_POOLS,
        })) as { data: CreateDirectorsMutation };
      });
    } catch (error) {
      console.log("Director upload error:", error);
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={methods.handleSubmit(onSubmit)}
      square
      sx={{ padding: 5, margin: 5 }}
    >
      <Typography variant="h5" align="center">
        Supplier Self Registration
      </Typography>
      <FormProvider {...methods}>
        {activeStep < 4 ? (
          <>
            <Typography align="center" sx={{ paddingBottom: 3 }}>
              Welcome to the supplier self registration portal. This portal
              serves as an initial point of entry for any vendors who wish to do
              business with us. <b>IMPORTANT:</b> Please makes sure all required
              attachments are attached. *Fields marked with an asterisk are
              mandatory
            </Typography>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label, index) => (
                <Step
                  key={label}
                  completed={completed[index]}
                  sx={{ "& .Mui-completed": { color: "green" } }}
                >
                  <StepButton color="inherit" onClick={handleStep(index)}>
                    {label}
                  </StepButton>
                </Step>
              ))}
            </Stepper>
            <Box
              component="section"
              sx={activeStep < 4 && { p: 3, m: 3, border: "1px solid black" }}
            >
              {activeStep === 0 && <Information activeStep={activeStep} />}
              {activeStep === 1 && <Address activeStep={activeStep} />}
              {activeStep === 2 && <Director activeStep={activeStep} />}
              {activeStep === 3 && (
                <Summary
                  activeStep={activeStep}
                  acceptance={Boolean(acceptance)}
                  setAcceptance={setAcceptance}
                />
              )}
            </Box>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Button sx={{ mr: 1 }} color="error" onClick={handleReset}>
                {activeStep === 3 ? "Reset All" : "Reset"}
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              <Button
                color="inherit"
                onClick={() =>
                  activeStep > 0 && setActiveStep((prev) => prev - 1)
                }
                sx={{ mr: 1 }}
              >
                Back
              </Button>
              <Button
                onClick={() =>
                  activeStep < 3 && setActiveStep((prev) => prev + 1)
                }
                sx={{ mr: 1 }}
              >
                Next
              </Button>
              <Button
                disabled={activeStep === 3 && !Boolean(acceptance)}
                type={activeStep < 3 ? "submit" : "button"}
                onClick={() =>
                  activeStep === 3 &&
                  Boolean(acceptance) &&
                  setActiveStep((prev) => prev + 1)
                }
              >
                Complete Step
              </Button>
            </Box>
          </>
        ) : (
          <>
            <CompleteReg />
            <Box display="flex" flexDirection="row" justifyContent="center">
              <Button
                variant="contained"
                color="error"
                size="large"
                onClick={() => router.push(`/update/${companyId}`)}
              >
                Edit Submitted Details
              </Button>
            </Box>
          </>
        )}
      </FormProvider>
    </Paper>
  );
}
