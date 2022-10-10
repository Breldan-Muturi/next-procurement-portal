import * as yup from "yup";

export const companySchema = yup.object().shape({
  organizationName: yup.string().required("An organization name is required"),
  organizationType: yup.string(),
  ownership: yup.string(),
  natureOfBusiness: yup.string(),
  organizationRegistrationDate: yup.string(),
  organizationRegistrationNumber: yup.string(),
  registrationCertificate: yup.string(),
  cr12: yup.string(),
  KRAPIN: yup.string(),
  KRAPINCertificate: yup.string(),
  taxComplianceNumber: yup.string(),
  taxComplianceExpiry: yup.string(),
  taxComplianceCertificate: yup.string(),
  agpoCategory: yup.string(),
  agpoExpiryDate: yup.string(),
  agpoCertificate: yup.string(),
});

export const addressDetailsSchema = yup.object().shape({
  postalAddress: yup.string().required("Postal Address details"),
  city: yup.string().required("Organization city required"),
  country: yup.string().required("Organization country required"),
  officeBuilding: yup.string().required("Office building required"),
  streetAddress: yup.string().required("Street Address required"),
  emailAddress: yup
    .string()
    .required("Organization email required")
    .email("Enter a valid email"),
  title: yup.string().required("Contact title required"),
  fullName: yup
    .string()
    .required("Contact full name required")
    .min(6, "Full Name must be more than 6 characters long"),
  contactEmail: yup
    .string()
    .required("Contact email required")
    .email("Enter a valid email"),
  phoneNumber: yup.string().required("Contact phone number required"),
});

export const directorSchema = yup.object().shape({
  directorTitle: yup.string().required("Director title required"),
  directorName: yup.string().required("Director name required"),
  directorKRAPIN: yup.string().required("Director KRA PIN/Passport required"),
  directorEmailAddress: yup.string().required("Director email required"),
  directorNationality: yup.string().required("Director nationality required"),
  directorShares: yup.number().required("Director shares required"),
});
