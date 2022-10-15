import * as yup from "yup";

export const companySchema = yup.object({
  organizationName: yup.string().required("An organization name is required"),
  organizationType: yup.string().required("An organization name is required"),
  ownership: yup.string().required("An organization name is required"),
  natureOfBusiness: yup
    .string()
    .required("Organization Nature of Business is required"),
  organizationRegistrationDate: yup
    .string()
    .required("Organization registration date is required"),
  organizationRegistrationNumber: yup
    .string()
    .required("Organization registration number is required"),
  registrationCertificate: yup
    .mixed()
    .test(
      "required",
      "Organization registration certificate is required",
      (value) => {
        return value && value.length;
      }
    ),
  cr12: yup
    .mixed()
    .test("required", "Organization cr12 is required", (value) => {
      return value && value.length;
    }),
  KRAPIN: yup.string().required("Organization kra pin is required"),
  KRAPINCertificate: yup
    .mixed()
    .test(
      "required",
      "Organization kra pin certificate is required",
      (value) => {
        return value && value.length;
      }
    ),
  taxComplianceNumber: yup
    .string()
    .required("Organization tax compliance number is required"),
  taxComplianceExpiry: yup
    .string()
    .required("Organization tax compliance expiry is required"),
  taxComplianceCertificate: yup
    .mixed()
    .test(
      "required",
      "Organization tax compliance certificate is required",
      (value) => {
        return value && value.length;
      }
    ),
  agpoCategory: yup.string().required("AGPO category required"),
  agpoExpiryDate: yup
    .string()
    .required("AGPO qualified organization agpo expiry is required"),
  agpoCertificate: yup
    .mixed()
    .test(
      "required",
      "AGPO qualified Organization agpo certificate is required",
      (value) => {
        return value && value.length;
      }
    ),
});

export const addressDetailsSchema = yup.object({
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
  directors: yup.array().of(
    yup.object().shape({
      directorTitle: yup.string().required("Director title required"),
      directorName: yup.string().required("Director name required"),
      directorKRAPIN: yup
        .string()
        .required("Director KRA PIN/Passport required"),
      directorEmailAddress: yup
        .string()
        .required("Director email required")
        .email("Enter a valid email"),
      directorNationality: yup
        .string()
        .required("Director nationality required"),
      directorShares: yup
        .string()
        .nullable()
        .required("Director shares required"),
    })
  ),
});

export const companyApproval = yup.object().shape({
  status: yup.string().required("Updated company status is required"),
  response: yup
    .string()
    .required("Status update message is required")
    .min(50, "Add a status update response with more than 50 characters")
    .max(1000, "Your status update message should not exceed 1000 characters"),
});
