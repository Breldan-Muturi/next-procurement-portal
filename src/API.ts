/* tslint:disable */
/* eslint-disable */
//  This file was automatically generated and should not be edited.

export type CreateCompanyInput = {
  id?: string | null;
  organizationName: string;
  organizationType: OrganizationType;
  ownership: Ownership;
  natureOfBusiness: string;
  organizationRegistrationDate: string;
  organizationRegistrationNumber: string;
  registrationCertificate: string;
  cr12: string;
  KRAPIN: string;
  KRAPINCertificate: string;
  taxComplianceNumber: string;
  taxComplianceExpiry: string;
  taxComplianceCertificate: string;
  agpoCategory?: AGPOCategory | null;
  agpoExpiryDate?: string | null;
  agpoCertificate?: string | null;
};

export enum OrganizationType {
  SoleProprietorship = "SoleProprietorship",
  Partnership = "Partnership",
  PrivateLimitedCompany = "PrivateLimitedCompany",
  PublicLimitedCompany = "PublicLimitedCompany",
}

export enum Ownership {
  Kenyan = "Kenyan",
  NonCitizen = "NonCitizen",
}

export enum AGPOCategory {
  Youth = "Youth",
  Women = "Women",
  PWD = "PWD",
}

export type ModelCompanyConditionInput = {
  organizationName?: ModelStringInput | null;
  organizationType?: ModelOrganizationTypeInput | null;
  ownership?: ModelOwnershipInput | null;
  natureOfBusiness?: ModelStringInput | null;
  organizationRegistrationDate?: ModelStringInput | null;
  organizationRegistrationNumber?: ModelStringInput | null;
  registrationCertificate?: ModelStringInput | null;
  cr12?: ModelStringInput | null;
  KRAPIN?: ModelStringInput | null;
  KRAPINCertificate?: ModelStringInput | null;
  taxComplianceNumber?: ModelStringInput | null;
  taxComplianceExpiry?: ModelStringInput | null;
  taxComplianceCertificate?: ModelStringInput | null;
  agpoCategory?: ModelAGPOCategoryInput | null;
  agpoExpiryDate?: ModelStringInput | null;
  agpoCertificate?: ModelStringInput | null;
  and?: Array<ModelCompanyConditionInput | null> | null;
  or?: Array<ModelCompanyConditionInput | null> | null;
  not?: ModelCompanyConditionInput | null;
};

export type ModelStringInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export enum ModelAttributeTypes {
  binary = "binary",
  binarySet = "binarySet",
  bool = "bool",
  list = "list",
  map = "map",
  number = "number",
  numberSet = "numberSet",
  string = "string",
  stringSet = "stringSet",
  _null = "_null",
}

export type ModelSizeInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
};

export type ModelOrganizationTypeInput = {
  eq?: OrganizationType | null;
  ne?: OrganizationType | null;
};

export type ModelOwnershipInput = {
  eq?: Ownership | null;
  ne?: Ownership | null;
};

export type ModelAGPOCategoryInput = {
  eq?: AGPOCategory | null;
  ne?: AGPOCategory | null;
};

export type Company = {
  __typename: "Company";
  id: string;
  organizationName: string;
  organizationType: OrganizationType;
  ownership: Ownership;
  natureOfBusiness: string;
  organizationRegistrationDate: string;
  organizationRegistrationNumber: string;
  registrationCertificate: string;
  cr12: string;
  KRAPIN: string;
  KRAPINCertificate: string;
  taxComplianceNumber: string;
  taxComplianceExpiry: string;
  taxComplianceCertificate: string;
  agpoCategory?: AGPOCategory | null;
  agpoExpiryDate?: string | null;
  agpoCertificate?: string | null;
  addressDetails?: ModelAddressDetailsConnection | null;
  directors?: ModelCompanyDirectorsConnection | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type ModelAddressDetailsConnection = {
  __typename: "ModelAddressDetailsConnection";
  items: Array<AddressDetails | null>;
  nextToken?: string | null;
};

export type AddressDetails = {
  __typename: "AddressDetails";
  id: string;
  postalAddress: string;
  city: string;
  country: string;
  officeBuilding: string;
  streetAddress: string;
  emailAddress: string;
  title: Title;
  fullName: string;
  contactEmail: string;
  phoneNumber: string;
  companyID: string;
  company?: Company | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export enum Title {
  Mr = "Mr",
  Mrs = "Mrs",
  Ms = "Ms",
}

export type ModelCompanyDirectorsConnection = {
  __typename: "ModelCompanyDirectorsConnection";
  items: Array<CompanyDirectors | null>;
  nextToken?: string | null;
};

export type CompanyDirectors = {
  __typename: "CompanyDirectors";
  id: string;
  companyID: string;
  directorsID: string;
  company: Company;
  directors: Directors;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type Directors = {
  __typename: "Directors";
  id: string;
  directorTitle?: Title | null;
  directorName: string;
  directorKRAPIN: string;
  directorEmailAddress: string;
  directorNationality: string;
  directorShares: number;
  companies?: ModelCompanyDirectorsConnection | null;
  createdAt: string;
  updatedAt: string;
  owner?: string | null;
};

export type UpdateCompanyInput = {
  id: string;
  organizationName?: string | null;
  organizationType?: OrganizationType | null;
  ownership?: Ownership | null;
  natureOfBusiness?: string | null;
  organizationRegistrationDate?: string | null;
  organizationRegistrationNumber?: string | null;
  registrationCertificate?: string | null;
  cr12?: string | null;
  KRAPIN?: string | null;
  KRAPINCertificate?: string | null;
  taxComplianceNumber?: string | null;
  taxComplianceExpiry?: string | null;
  taxComplianceCertificate?: string | null;
  agpoCategory?: AGPOCategory | null;
  agpoExpiryDate?: string | null;
  agpoCertificate?: string | null;
};

export type DeleteCompanyInput = {
  id: string;
};

export type CreateAddressDetailsInput = {
  id?: string | null;
  postalAddress: string;
  city: string;
  country: string;
  officeBuilding: string;
  streetAddress: string;
  emailAddress: string;
  title: Title;
  fullName: string;
  contactEmail: string;
  phoneNumber: string;
  companyID: string;
};

export type ModelAddressDetailsConditionInput = {
  postalAddress?: ModelStringInput | null;
  city?: ModelStringInput | null;
  country?: ModelStringInput | null;
  officeBuilding?: ModelStringInput | null;
  streetAddress?: ModelStringInput | null;
  emailAddress?: ModelStringInput | null;
  title?: ModelTitleInput | null;
  fullName?: ModelStringInput | null;
  contactEmail?: ModelStringInput | null;
  phoneNumber?: ModelStringInput | null;
  companyID?: ModelIDInput | null;
  and?: Array<ModelAddressDetailsConditionInput | null> | null;
  or?: Array<ModelAddressDetailsConditionInput | null> | null;
  not?: ModelAddressDetailsConditionInput | null;
};

export type ModelTitleInput = {
  eq?: Title | null;
  ne?: Title | null;
};

export type ModelIDInput = {
  ne?: string | null;
  eq?: string | null;
  le?: string | null;
  lt?: string | null;
  ge?: string | null;
  gt?: string | null;
  contains?: string | null;
  notContains?: string | null;
  between?: Array<string | null> | null;
  beginsWith?: string | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
  size?: ModelSizeInput | null;
};

export type UpdateAddressDetailsInput = {
  id: string;
  postalAddress?: string | null;
  city?: string | null;
  country?: string | null;
  officeBuilding?: string | null;
  streetAddress?: string | null;
  emailAddress?: string | null;
  title?: Title | null;
  fullName?: string | null;
  contactEmail?: string | null;
  phoneNumber?: string | null;
  companyID?: string | null;
};

export type DeleteAddressDetailsInput = {
  id: string;
};

export type CreateDirectorsInput = {
  id?: string | null;
  directorTitle?: Title | null;
  directorName: string;
  directorKRAPIN: string;
  directorEmailAddress: string;
  directorNationality: string;
  directorShares: number;
};

export type ModelDirectorsConditionInput = {
  directorTitle?: ModelTitleInput | null;
  directorName?: ModelStringInput | null;
  directorKRAPIN?: ModelStringInput | null;
  directorEmailAddress?: ModelStringInput | null;
  directorNationality?: ModelStringInput | null;
  directorShares?: ModelIntInput | null;
  and?: Array<ModelDirectorsConditionInput | null> | null;
  or?: Array<ModelDirectorsConditionInput | null> | null;
  not?: ModelDirectorsConditionInput | null;
};

export type ModelIntInput = {
  ne?: number | null;
  eq?: number | null;
  le?: number | null;
  lt?: number | null;
  ge?: number | null;
  gt?: number | null;
  between?: Array<number | null> | null;
  attributeExists?: boolean | null;
  attributeType?: ModelAttributeTypes | null;
};

export type UpdateDirectorsInput = {
  id: string;
  directorTitle?: Title | null;
  directorName?: string | null;
  directorKRAPIN?: string | null;
  directorEmailAddress?: string | null;
  directorNationality?: string | null;
  directorShares?: number | null;
};

export type DeleteDirectorsInput = {
  id: string;
};

export type CreateCompanyDirectorsInput = {
  id?: string | null;
  companyID: string;
  directorsID: string;
};

export type ModelCompanyDirectorsConditionInput = {
  companyID?: ModelIDInput | null;
  directorsID?: ModelIDInput | null;
  and?: Array<ModelCompanyDirectorsConditionInput | null> | null;
  or?: Array<ModelCompanyDirectorsConditionInput | null> | null;
  not?: ModelCompanyDirectorsConditionInput | null;
};

export type UpdateCompanyDirectorsInput = {
  id: string;
  companyID?: string | null;
  directorsID?: string | null;
};

export type DeleteCompanyDirectorsInput = {
  id: string;
};

export type ModelCompanyFilterInput = {
  id?: ModelIDInput | null;
  organizationName?: ModelStringInput | null;
  organizationType?: ModelOrganizationTypeInput | null;
  ownership?: ModelOwnershipInput | null;
  natureOfBusiness?: ModelStringInput | null;
  organizationRegistrationDate?: ModelStringInput | null;
  organizationRegistrationNumber?: ModelStringInput | null;
  registrationCertificate?: ModelStringInput | null;
  cr12?: ModelStringInput | null;
  KRAPIN?: ModelStringInput | null;
  KRAPINCertificate?: ModelStringInput | null;
  taxComplianceNumber?: ModelStringInput | null;
  taxComplianceExpiry?: ModelStringInput | null;
  taxComplianceCertificate?: ModelStringInput | null;
  agpoCategory?: ModelAGPOCategoryInput | null;
  agpoExpiryDate?: ModelStringInput | null;
  agpoCertificate?: ModelStringInput | null;
  and?: Array<ModelCompanyFilterInput | null> | null;
  or?: Array<ModelCompanyFilterInput | null> | null;
  not?: ModelCompanyFilterInput | null;
};

export type ModelCompanyConnection = {
  __typename: "ModelCompanyConnection";
  items: Array<Company | null>;
  nextToken?: string | null;
};

export type ModelAddressDetailsFilterInput = {
  id?: ModelIDInput | null;
  postalAddress?: ModelStringInput | null;
  city?: ModelStringInput | null;
  country?: ModelStringInput | null;
  officeBuilding?: ModelStringInput | null;
  streetAddress?: ModelStringInput | null;
  emailAddress?: ModelStringInput | null;
  title?: ModelTitleInput | null;
  fullName?: ModelStringInput | null;
  contactEmail?: ModelStringInput | null;
  phoneNumber?: ModelStringInput | null;
  companyID?: ModelIDInput | null;
  and?: Array<ModelAddressDetailsFilterInput | null> | null;
  or?: Array<ModelAddressDetailsFilterInput | null> | null;
  not?: ModelAddressDetailsFilterInput | null;
};

export enum ModelSortDirection {
  ASC = "ASC",
  DESC = "DESC",
}

export type ModelDirectorsFilterInput = {
  id?: ModelIDInput | null;
  directorTitle?: ModelTitleInput | null;
  directorName?: ModelStringInput | null;
  directorKRAPIN?: ModelStringInput | null;
  directorEmailAddress?: ModelStringInput | null;
  directorNationality?: ModelStringInput | null;
  directorShares?: ModelIntInput | null;
  and?: Array<ModelDirectorsFilterInput | null> | null;
  or?: Array<ModelDirectorsFilterInput | null> | null;
  not?: ModelDirectorsFilterInput | null;
};

export type ModelDirectorsConnection = {
  __typename: "ModelDirectorsConnection";
  items: Array<Directors | null>;
  nextToken?: string | null;
};

export type ModelCompanyDirectorsFilterInput = {
  id?: ModelIDInput | null;
  companyID?: ModelIDInput | null;
  directorsID?: ModelIDInput | null;
  and?: Array<ModelCompanyDirectorsFilterInput | null> | null;
  or?: Array<ModelCompanyDirectorsFilterInput | null> | null;
  not?: ModelCompanyDirectorsFilterInput | null;
};

export type CreateCompanyMutationVariables = {
  input: CreateCompanyInput;
  condition?: ModelCompanyConditionInput | null;
};

export type CreateCompanyMutation = {
  createCompany?: {
    __typename: "Company";
    id: string;
    organizationName: string;
    organizationType: OrganizationType;
    ownership: Ownership;
    natureOfBusiness: string;
    organizationRegistrationDate: string;
    organizationRegistrationNumber: string;
    registrationCertificate: string;
    cr12: string;
    KRAPIN: string;
    KRAPINCertificate: string;
    taxComplianceNumber: string;
    taxComplianceExpiry: string;
    taxComplianceCertificate: string;
    agpoCategory?: AGPOCategory | null;
    agpoExpiryDate?: string | null;
    agpoCertificate?: string | null;
    addressDetails?: {
      __typename: "ModelAddressDetailsConnection";
      items: Array<{
        __typename: "AddressDetails";
        id: string;
        postalAddress: string;
        city: string;
        country: string;
        officeBuilding: string;
        streetAddress: string;
        emailAddress: string;
        title: Title;
        fullName: string;
        contactEmail: string;
        phoneNumber: string;
        companyID: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    directors?: {
      __typename: "ModelCompanyDirectorsConnection";
      items: Array<{
        __typename: "CompanyDirectors";
        id: string;
        companyID: string;
        directorsID: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type UpdateCompanyMutationVariables = {
  input: UpdateCompanyInput;
  condition?: ModelCompanyConditionInput | null;
};

export type UpdateCompanyMutation = {
  updateCompany?: {
    __typename: "Company";
    id: string;
    organizationName: string;
    organizationType: OrganizationType;
    ownership: Ownership;
    natureOfBusiness: string;
    organizationRegistrationDate: string;
    organizationRegistrationNumber: string;
    registrationCertificate: string;
    cr12: string;
    KRAPIN: string;
    KRAPINCertificate: string;
    taxComplianceNumber: string;
    taxComplianceExpiry: string;
    taxComplianceCertificate: string;
    agpoCategory?: AGPOCategory | null;
    agpoExpiryDate?: string | null;
    agpoCertificate?: string | null;
    addressDetails?: {
      __typename: "ModelAddressDetailsConnection";
      items: Array<{
        __typename: "AddressDetails";
        id: string;
        postalAddress: string;
        city: string;
        country: string;
        officeBuilding: string;
        streetAddress: string;
        emailAddress: string;
        title: Title;
        fullName: string;
        contactEmail: string;
        phoneNumber: string;
        companyID: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    directors?: {
      __typename: "ModelCompanyDirectorsConnection";
      items: Array<{
        __typename: "CompanyDirectors";
        id: string;
        companyID: string;
        directorsID: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type DeleteCompanyMutationVariables = {
  input: DeleteCompanyInput;
  condition?: ModelCompanyConditionInput | null;
};

export type DeleteCompanyMutation = {
  deleteCompany?: {
    __typename: "Company";
    id: string;
    organizationName: string;
    organizationType: OrganizationType;
    ownership: Ownership;
    natureOfBusiness: string;
    organizationRegistrationDate: string;
    organizationRegistrationNumber: string;
    registrationCertificate: string;
    cr12: string;
    KRAPIN: string;
    KRAPINCertificate: string;
    taxComplianceNumber: string;
    taxComplianceExpiry: string;
    taxComplianceCertificate: string;
    agpoCategory?: AGPOCategory | null;
    agpoExpiryDate?: string | null;
    agpoCertificate?: string | null;
    addressDetails?: {
      __typename: "ModelAddressDetailsConnection";
      items: Array<{
        __typename: "AddressDetails";
        id: string;
        postalAddress: string;
        city: string;
        country: string;
        officeBuilding: string;
        streetAddress: string;
        emailAddress: string;
        title: Title;
        fullName: string;
        contactEmail: string;
        phoneNumber: string;
        companyID: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    directors?: {
      __typename: "ModelCompanyDirectorsConnection";
      items: Array<{
        __typename: "CompanyDirectors";
        id: string;
        companyID: string;
        directorsID: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type CreateAddressDetailsMutationVariables = {
  input: CreateAddressDetailsInput;
  condition?: ModelAddressDetailsConditionInput | null;
};

export type CreateAddressDetailsMutation = {
  createAddressDetails?: {
    __typename: "AddressDetails";
    id: string;
    postalAddress: string;
    city: string;
    country: string;
    officeBuilding: string;
    streetAddress: string;
    emailAddress: string;
    title: Title;
    fullName: string;
    contactEmail: string;
    phoneNumber: string;
    companyID: string;
    company?: {
      __typename: "Company";
      id: string;
      organizationName: string;
      organizationType: OrganizationType;
      ownership: Ownership;
      natureOfBusiness: string;
      organizationRegistrationDate: string;
      organizationRegistrationNumber: string;
      registrationCertificate: string;
      cr12: string;
      KRAPIN: string;
      KRAPINCertificate: string;
      taxComplianceNumber: string;
      taxComplianceExpiry: string;
      taxComplianceCertificate: string;
      agpoCategory?: AGPOCategory | null;
      agpoExpiryDate?: string | null;
      agpoCertificate?: string | null;
      addressDetails?: {
        __typename: "ModelAddressDetailsConnection";
        nextToken?: string | null;
      } | null;
      directors?: {
        __typename: "ModelCompanyDirectorsConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type UpdateAddressDetailsMutationVariables = {
  input: UpdateAddressDetailsInput;
  condition?: ModelAddressDetailsConditionInput | null;
};

export type UpdateAddressDetailsMutation = {
  updateAddressDetails?: {
    __typename: "AddressDetails";
    id: string;
    postalAddress: string;
    city: string;
    country: string;
    officeBuilding: string;
    streetAddress: string;
    emailAddress: string;
    title: Title;
    fullName: string;
    contactEmail: string;
    phoneNumber: string;
    companyID: string;
    company?: {
      __typename: "Company";
      id: string;
      organizationName: string;
      organizationType: OrganizationType;
      ownership: Ownership;
      natureOfBusiness: string;
      organizationRegistrationDate: string;
      organizationRegistrationNumber: string;
      registrationCertificate: string;
      cr12: string;
      KRAPIN: string;
      KRAPINCertificate: string;
      taxComplianceNumber: string;
      taxComplianceExpiry: string;
      taxComplianceCertificate: string;
      agpoCategory?: AGPOCategory | null;
      agpoExpiryDate?: string | null;
      agpoCertificate?: string | null;
      addressDetails?: {
        __typename: "ModelAddressDetailsConnection";
        nextToken?: string | null;
      } | null;
      directors?: {
        __typename: "ModelCompanyDirectorsConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type DeleteAddressDetailsMutationVariables = {
  input: DeleteAddressDetailsInput;
  condition?: ModelAddressDetailsConditionInput | null;
};

export type DeleteAddressDetailsMutation = {
  deleteAddressDetails?: {
    __typename: "AddressDetails";
    id: string;
    postalAddress: string;
    city: string;
    country: string;
    officeBuilding: string;
    streetAddress: string;
    emailAddress: string;
    title: Title;
    fullName: string;
    contactEmail: string;
    phoneNumber: string;
    companyID: string;
    company?: {
      __typename: "Company";
      id: string;
      organizationName: string;
      organizationType: OrganizationType;
      ownership: Ownership;
      natureOfBusiness: string;
      organizationRegistrationDate: string;
      organizationRegistrationNumber: string;
      registrationCertificate: string;
      cr12: string;
      KRAPIN: string;
      KRAPINCertificate: string;
      taxComplianceNumber: string;
      taxComplianceExpiry: string;
      taxComplianceCertificate: string;
      agpoCategory?: AGPOCategory | null;
      agpoExpiryDate?: string | null;
      agpoCertificate?: string | null;
      addressDetails?: {
        __typename: "ModelAddressDetailsConnection";
        nextToken?: string | null;
      } | null;
      directors?: {
        __typename: "ModelCompanyDirectorsConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type CreateDirectorsMutationVariables = {
  input: CreateDirectorsInput;
  condition?: ModelDirectorsConditionInput | null;
};

export type CreateDirectorsMutation = {
  createDirectors?: {
    __typename: "Directors";
    id: string;
    directorTitle?: Title | null;
    directorName: string;
    directorKRAPIN: string;
    directorEmailAddress: string;
    directorNationality: string;
    directorShares: number;
    companies?: {
      __typename: "ModelCompanyDirectorsConnection";
      items: Array<{
        __typename: "CompanyDirectors";
        id: string;
        companyID: string;
        directorsID: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type UpdateDirectorsMutationVariables = {
  input: UpdateDirectorsInput;
  condition?: ModelDirectorsConditionInput | null;
};

export type UpdateDirectorsMutation = {
  updateDirectors?: {
    __typename: "Directors";
    id: string;
    directorTitle?: Title | null;
    directorName: string;
    directorKRAPIN: string;
    directorEmailAddress: string;
    directorNationality: string;
    directorShares: number;
    companies?: {
      __typename: "ModelCompanyDirectorsConnection";
      items: Array<{
        __typename: "CompanyDirectors";
        id: string;
        companyID: string;
        directorsID: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type DeleteDirectorsMutationVariables = {
  input: DeleteDirectorsInput;
  condition?: ModelDirectorsConditionInput | null;
};

export type DeleteDirectorsMutation = {
  deleteDirectors?: {
    __typename: "Directors";
    id: string;
    directorTitle?: Title | null;
    directorName: string;
    directorKRAPIN: string;
    directorEmailAddress: string;
    directorNationality: string;
    directorShares: number;
    companies?: {
      __typename: "ModelCompanyDirectorsConnection";
      items: Array<{
        __typename: "CompanyDirectors";
        id: string;
        companyID: string;
        directorsID: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type CreateCompanyDirectorsMutationVariables = {
  input: CreateCompanyDirectorsInput;
  condition?: ModelCompanyDirectorsConditionInput | null;
};

export type CreateCompanyDirectorsMutation = {
  createCompanyDirectors?: {
    __typename: "CompanyDirectors";
    id: string;
    companyID: string;
    directorsID: string;
    company: {
      __typename: "Company";
      id: string;
      organizationName: string;
      organizationType: OrganizationType;
      ownership: Ownership;
      natureOfBusiness: string;
      organizationRegistrationDate: string;
      organizationRegistrationNumber: string;
      registrationCertificate: string;
      cr12: string;
      KRAPIN: string;
      KRAPINCertificate: string;
      taxComplianceNumber: string;
      taxComplianceExpiry: string;
      taxComplianceCertificate: string;
      agpoCategory?: AGPOCategory | null;
      agpoExpiryDate?: string | null;
      agpoCertificate?: string | null;
      addressDetails?: {
        __typename: "ModelAddressDetailsConnection";
        nextToken?: string | null;
      } | null;
      directors?: {
        __typename: "ModelCompanyDirectorsConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    directors: {
      __typename: "Directors";
      id: string;
      directorTitle?: Title | null;
      directorName: string;
      directorKRAPIN: string;
      directorEmailAddress: string;
      directorNationality: string;
      directorShares: number;
      companies?: {
        __typename: "ModelCompanyDirectorsConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type UpdateCompanyDirectorsMutationVariables = {
  input: UpdateCompanyDirectorsInput;
  condition?: ModelCompanyDirectorsConditionInput | null;
};

export type UpdateCompanyDirectorsMutation = {
  updateCompanyDirectors?: {
    __typename: "CompanyDirectors";
    id: string;
    companyID: string;
    directorsID: string;
    company: {
      __typename: "Company";
      id: string;
      organizationName: string;
      organizationType: OrganizationType;
      ownership: Ownership;
      natureOfBusiness: string;
      organizationRegistrationDate: string;
      organizationRegistrationNumber: string;
      registrationCertificate: string;
      cr12: string;
      KRAPIN: string;
      KRAPINCertificate: string;
      taxComplianceNumber: string;
      taxComplianceExpiry: string;
      taxComplianceCertificate: string;
      agpoCategory?: AGPOCategory | null;
      agpoExpiryDate?: string | null;
      agpoCertificate?: string | null;
      addressDetails?: {
        __typename: "ModelAddressDetailsConnection";
        nextToken?: string | null;
      } | null;
      directors?: {
        __typename: "ModelCompanyDirectorsConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    directors: {
      __typename: "Directors";
      id: string;
      directorTitle?: Title | null;
      directorName: string;
      directorKRAPIN: string;
      directorEmailAddress: string;
      directorNationality: string;
      directorShares: number;
      companies?: {
        __typename: "ModelCompanyDirectorsConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type DeleteCompanyDirectorsMutationVariables = {
  input: DeleteCompanyDirectorsInput;
  condition?: ModelCompanyDirectorsConditionInput | null;
};

export type DeleteCompanyDirectorsMutation = {
  deleteCompanyDirectors?: {
    __typename: "CompanyDirectors";
    id: string;
    companyID: string;
    directorsID: string;
    company: {
      __typename: "Company";
      id: string;
      organizationName: string;
      organizationType: OrganizationType;
      ownership: Ownership;
      natureOfBusiness: string;
      organizationRegistrationDate: string;
      organizationRegistrationNumber: string;
      registrationCertificate: string;
      cr12: string;
      KRAPIN: string;
      KRAPINCertificate: string;
      taxComplianceNumber: string;
      taxComplianceExpiry: string;
      taxComplianceCertificate: string;
      agpoCategory?: AGPOCategory | null;
      agpoExpiryDate?: string | null;
      agpoCertificate?: string | null;
      addressDetails?: {
        __typename: "ModelAddressDetailsConnection";
        nextToken?: string | null;
      } | null;
      directors?: {
        __typename: "ModelCompanyDirectorsConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    directors: {
      __typename: "Directors";
      id: string;
      directorTitle?: Title | null;
      directorName: string;
      directorKRAPIN: string;
      directorEmailAddress: string;
      directorNationality: string;
      directorShares: number;
      companies?: {
        __typename: "ModelCompanyDirectorsConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type GetCompanyQueryVariables = {
  id: string;
};

export type GetCompanyQuery = {
  getCompany?: {
    __typename: "Company";
    id: string;
    organizationName: string;
    organizationType: OrganizationType;
    ownership: Ownership;
    natureOfBusiness: string;
    organizationRegistrationDate: string;
    organizationRegistrationNumber: string;
    registrationCertificate: string;
    cr12: string;
    KRAPIN: string;
    KRAPINCertificate: string;
    taxComplianceNumber: string;
    taxComplianceExpiry: string;
    taxComplianceCertificate: string;
    agpoCategory?: AGPOCategory | null;
    agpoExpiryDate?: string | null;
    agpoCertificate?: string | null;
    addressDetails?: {
      __typename: "ModelAddressDetailsConnection";
      items: Array<{
        __typename: "AddressDetails";
        id: string;
        postalAddress: string;
        city: string;
        country: string;
        officeBuilding: string;
        streetAddress: string;
        emailAddress: string;
        title: Title;
        fullName: string;
        contactEmail: string;
        phoneNumber: string;
        companyID: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    directors?: {
      __typename: "ModelCompanyDirectorsConnection";
      items: Array<{
        __typename: "CompanyDirectors";
        id: string;
        companyID: string;
        directorsID: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type ListCompaniesQueryVariables = {
  filter?: ModelCompanyFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListCompaniesQuery = {
  listCompanies?: {
    __typename: "ModelCompanyConnection";
    items: Array<{
      __typename: "Company";
      id: string;
      organizationName: string;
      organizationType: OrganizationType;
      ownership: Ownership;
      natureOfBusiness: string;
      organizationRegistrationDate: string;
      organizationRegistrationNumber: string;
      registrationCertificate: string;
      cr12: string;
      KRAPIN: string;
      KRAPINCertificate: string;
      taxComplianceNumber: string;
      taxComplianceExpiry: string;
      taxComplianceCertificate: string;
      agpoCategory?: AGPOCategory | null;
      agpoExpiryDate?: string | null;
      agpoCertificate?: string | null;
      addressDetails?: {
        __typename: "ModelAddressDetailsConnection";
        nextToken?: string | null;
      } | null;
      directors?: {
        __typename: "ModelCompanyDirectorsConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetAddressDetailsQueryVariables = {
  id: string;
};

export type GetAddressDetailsQuery = {
  getAddressDetails?: {
    __typename: "AddressDetails";
    id: string;
    postalAddress: string;
    city: string;
    country: string;
    officeBuilding: string;
    streetAddress: string;
    emailAddress: string;
    title: Title;
    fullName: string;
    contactEmail: string;
    phoneNumber: string;
    companyID: string;
    company?: {
      __typename: "Company";
      id: string;
      organizationName: string;
      organizationType: OrganizationType;
      ownership: Ownership;
      natureOfBusiness: string;
      organizationRegistrationDate: string;
      organizationRegistrationNumber: string;
      registrationCertificate: string;
      cr12: string;
      KRAPIN: string;
      KRAPINCertificate: string;
      taxComplianceNumber: string;
      taxComplianceExpiry: string;
      taxComplianceCertificate: string;
      agpoCategory?: AGPOCategory | null;
      agpoExpiryDate?: string | null;
      agpoCertificate?: string | null;
      addressDetails?: {
        __typename: "ModelAddressDetailsConnection";
        nextToken?: string | null;
      } | null;
      directors?: {
        __typename: "ModelCompanyDirectorsConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type ListAddressDetailsQueryVariables = {
  filter?: ModelAddressDetailsFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListAddressDetailsQuery = {
  listAddressDetails?: {
    __typename: "ModelAddressDetailsConnection";
    items: Array<{
      __typename: "AddressDetails";
      id: string;
      postalAddress: string;
      city: string;
      country: string;
      officeBuilding: string;
      streetAddress: string;
      emailAddress: string;
      title: Title;
      fullName: string;
      contactEmail: string;
      phoneNumber: string;
      companyID: string;
      company?: {
        __typename: "Company";
        id: string;
        organizationName: string;
        organizationType: OrganizationType;
        ownership: Ownership;
        natureOfBusiness: string;
        organizationRegistrationDate: string;
        organizationRegistrationNumber: string;
        registrationCertificate: string;
        cr12: string;
        KRAPIN: string;
        KRAPINCertificate: string;
        taxComplianceNumber: string;
        taxComplianceExpiry: string;
        taxComplianceCertificate: string;
        agpoCategory?: AGPOCategory | null;
        agpoExpiryDate?: string | null;
        agpoCertificate?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type PostalAddressQueryVariables = {
  companyID: string;
  sortDirection?: ModelSortDirection | null;
  filter?: ModelAddressDetailsFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type PostalAddressQuery = {
  postalAddress?: {
    __typename: "ModelAddressDetailsConnection";
    items: Array<{
      __typename: "AddressDetails";
      id: string;
      postalAddress: string;
      city: string;
      country: string;
      officeBuilding: string;
      streetAddress: string;
      emailAddress: string;
      title: Title;
      fullName: string;
      contactEmail: string;
      phoneNumber: string;
      companyID: string;
      company?: {
        __typename: "Company";
        id: string;
        organizationName: string;
        organizationType: OrganizationType;
        ownership: Ownership;
        natureOfBusiness: string;
        organizationRegistrationDate: string;
        organizationRegistrationNumber: string;
        registrationCertificate: string;
        cr12: string;
        KRAPIN: string;
        KRAPINCertificate: string;
        taxComplianceNumber: string;
        taxComplianceExpiry: string;
        taxComplianceCertificate: string;
        agpoCategory?: AGPOCategory | null;
        agpoExpiryDate?: string | null;
        agpoCertificate?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetDirectorsQueryVariables = {
  id: string;
};

export type GetDirectorsQuery = {
  getDirectors?: {
    __typename: "Directors";
    id: string;
    directorTitle?: Title | null;
    directorName: string;
    directorKRAPIN: string;
    directorEmailAddress: string;
    directorNationality: string;
    directorShares: number;
    companies?: {
      __typename: "ModelCompanyDirectorsConnection";
      items: Array<{
        __typename: "CompanyDirectors";
        id: string;
        companyID: string;
        directorsID: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type ListDirectorsQueryVariables = {
  filter?: ModelDirectorsFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListDirectorsQuery = {
  listDirectors?: {
    __typename: "ModelDirectorsConnection";
    items: Array<{
      __typename: "Directors";
      id: string;
      directorTitle?: Title | null;
      directorName: string;
      directorKRAPIN: string;
      directorEmailAddress: string;
      directorNationality: string;
      directorShares: number;
      companies?: {
        __typename: "ModelCompanyDirectorsConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type GetCompanyDirectorsQueryVariables = {
  id: string;
};

export type GetCompanyDirectorsQuery = {
  getCompanyDirectors?: {
    __typename: "CompanyDirectors";
    id: string;
    companyID: string;
    directorsID: string;
    company: {
      __typename: "Company";
      id: string;
      organizationName: string;
      organizationType: OrganizationType;
      ownership: Ownership;
      natureOfBusiness: string;
      organizationRegistrationDate: string;
      organizationRegistrationNumber: string;
      registrationCertificate: string;
      cr12: string;
      KRAPIN: string;
      KRAPINCertificate: string;
      taxComplianceNumber: string;
      taxComplianceExpiry: string;
      taxComplianceCertificate: string;
      agpoCategory?: AGPOCategory | null;
      agpoExpiryDate?: string | null;
      agpoCertificate?: string | null;
      addressDetails?: {
        __typename: "ModelAddressDetailsConnection";
        nextToken?: string | null;
      } | null;
      directors?: {
        __typename: "ModelCompanyDirectorsConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    directors: {
      __typename: "Directors";
      id: string;
      directorTitle?: Title | null;
      directorName: string;
      directorKRAPIN: string;
      directorEmailAddress: string;
      directorNationality: string;
      directorShares: number;
      companies?: {
        __typename: "ModelCompanyDirectorsConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type ListCompanyDirectorsQueryVariables = {
  filter?: ModelCompanyDirectorsFilterInput | null;
  limit?: number | null;
  nextToken?: string | null;
};

export type ListCompanyDirectorsQuery = {
  listCompanyDirectors?: {
    __typename: "ModelCompanyDirectorsConnection";
    items: Array<{
      __typename: "CompanyDirectors";
      id: string;
      companyID: string;
      directorsID: string;
      company: {
        __typename: "Company";
        id: string;
        organizationName: string;
        organizationType: OrganizationType;
        ownership: Ownership;
        natureOfBusiness: string;
        organizationRegistrationDate: string;
        organizationRegistrationNumber: string;
        registrationCertificate: string;
        cr12: string;
        KRAPIN: string;
        KRAPINCertificate: string;
        taxComplianceNumber: string;
        taxComplianceExpiry: string;
        taxComplianceCertificate: string;
        agpoCategory?: AGPOCategory | null;
        agpoExpiryDate?: string | null;
        agpoCertificate?: string | null;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      };
      directors: {
        __typename: "Directors";
        id: string;
        directorTitle?: Title | null;
        directorName: string;
        directorKRAPIN: string;
        directorEmailAddress: string;
        directorNationality: string;
        directorShares: number;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      };
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null>;
    nextToken?: string | null;
  } | null;
};

export type OnCreateCompanySubscriptionVariables = {
  owner?: string | null;
};

export type OnCreateCompanySubscription = {
  onCreateCompany?: {
    __typename: "Company";
    id: string;
    organizationName: string;
    organizationType: OrganizationType;
    ownership: Ownership;
    natureOfBusiness: string;
    organizationRegistrationDate: string;
    organizationRegistrationNumber: string;
    registrationCertificate: string;
    cr12: string;
    KRAPIN: string;
    KRAPINCertificate: string;
    taxComplianceNumber: string;
    taxComplianceExpiry: string;
    taxComplianceCertificate: string;
    agpoCategory?: AGPOCategory | null;
    agpoExpiryDate?: string | null;
    agpoCertificate?: string | null;
    addressDetails?: {
      __typename: "ModelAddressDetailsConnection";
      items: Array<{
        __typename: "AddressDetails";
        id: string;
        postalAddress: string;
        city: string;
        country: string;
        officeBuilding: string;
        streetAddress: string;
        emailAddress: string;
        title: Title;
        fullName: string;
        contactEmail: string;
        phoneNumber: string;
        companyID: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    directors?: {
      __typename: "ModelCompanyDirectorsConnection";
      items: Array<{
        __typename: "CompanyDirectors";
        id: string;
        companyID: string;
        directorsID: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnUpdateCompanySubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdateCompanySubscription = {
  onUpdateCompany?: {
    __typename: "Company";
    id: string;
    organizationName: string;
    organizationType: OrganizationType;
    ownership: Ownership;
    natureOfBusiness: string;
    organizationRegistrationDate: string;
    organizationRegistrationNumber: string;
    registrationCertificate: string;
    cr12: string;
    KRAPIN: string;
    KRAPINCertificate: string;
    taxComplianceNumber: string;
    taxComplianceExpiry: string;
    taxComplianceCertificate: string;
    agpoCategory?: AGPOCategory | null;
    agpoExpiryDate?: string | null;
    agpoCertificate?: string | null;
    addressDetails?: {
      __typename: "ModelAddressDetailsConnection";
      items: Array<{
        __typename: "AddressDetails";
        id: string;
        postalAddress: string;
        city: string;
        country: string;
        officeBuilding: string;
        streetAddress: string;
        emailAddress: string;
        title: Title;
        fullName: string;
        contactEmail: string;
        phoneNumber: string;
        companyID: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    directors?: {
      __typename: "ModelCompanyDirectorsConnection";
      items: Array<{
        __typename: "CompanyDirectors";
        id: string;
        companyID: string;
        directorsID: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnDeleteCompanySubscriptionVariables = {
  owner?: string | null;
};

export type OnDeleteCompanySubscription = {
  onDeleteCompany?: {
    __typename: "Company";
    id: string;
    organizationName: string;
    organizationType: OrganizationType;
    ownership: Ownership;
    natureOfBusiness: string;
    organizationRegistrationDate: string;
    organizationRegistrationNumber: string;
    registrationCertificate: string;
    cr12: string;
    KRAPIN: string;
    KRAPINCertificate: string;
    taxComplianceNumber: string;
    taxComplianceExpiry: string;
    taxComplianceCertificate: string;
    agpoCategory?: AGPOCategory | null;
    agpoExpiryDate?: string | null;
    agpoCertificate?: string | null;
    addressDetails?: {
      __typename: "ModelAddressDetailsConnection";
      items: Array<{
        __typename: "AddressDetails";
        id: string;
        postalAddress: string;
        city: string;
        country: string;
        officeBuilding: string;
        streetAddress: string;
        emailAddress: string;
        title: Title;
        fullName: string;
        contactEmail: string;
        phoneNumber: string;
        companyID: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    directors?: {
      __typename: "ModelCompanyDirectorsConnection";
      items: Array<{
        __typename: "CompanyDirectors";
        id: string;
        companyID: string;
        directorsID: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnCreateAddressDetailsSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreateAddressDetailsSubscription = {
  onCreateAddressDetails?: {
    __typename: "AddressDetails";
    id: string;
    postalAddress: string;
    city: string;
    country: string;
    officeBuilding: string;
    streetAddress: string;
    emailAddress: string;
    title: Title;
    fullName: string;
    contactEmail: string;
    phoneNumber: string;
    companyID: string;
    company?: {
      __typename: "Company";
      id: string;
      organizationName: string;
      organizationType: OrganizationType;
      ownership: Ownership;
      natureOfBusiness: string;
      organizationRegistrationDate: string;
      organizationRegistrationNumber: string;
      registrationCertificate: string;
      cr12: string;
      KRAPIN: string;
      KRAPINCertificate: string;
      taxComplianceNumber: string;
      taxComplianceExpiry: string;
      taxComplianceCertificate: string;
      agpoCategory?: AGPOCategory | null;
      agpoExpiryDate?: string | null;
      agpoCertificate?: string | null;
      addressDetails?: {
        __typename: "ModelAddressDetailsConnection";
        nextToken?: string | null;
      } | null;
      directors?: {
        __typename: "ModelCompanyDirectorsConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnUpdateAddressDetailsSubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdateAddressDetailsSubscription = {
  onUpdateAddressDetails?: {
    __typename: "AddressDetails";
    id: string;
    postalAddress: string;
    city: string;
    country: string;
    officeBuilding: string;
    streetAddress: string;
    emailAddress: string;
    title: Title;
    fullName: string;
    contactEmail: string;
    phoneNumber: string;
    companyID: string;
    company?: {
      __typename: "Company";
      id: string;
      organizationName: string;
      organizationType: OrganizationType;
      ownership: Ownership;
      natureOfBusiness: string;
      organizationRegistrationDate: string;
      organizationRegistrationNumber: string;
      registrationCertificate: string;
      cr12: string;
      KRAPIN: string;
      KRAPINCertificate: string;
      taxComplianceNumber: string;
      taxComplianceExpiry: string;
      taxComplianceCertificate: string;
      agpoCategory?: AGPOCategory | null;
      agpoExpiryDate?: string | null;
      agpoCertificate?: string | null;
      addressDetails?: {
        __typename: "ModelAddressDetailsConnection";
        nextToken?: string | null;
      } | null;
      directors?: {
        __typename: "ModelCompanyDirectorsConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnDeleteAddressDetailsSubscriptionVariables = {
  owner?: string | null;
};

export type OnDeleteAddressDetailsSubscription = {
  onDeleteAddressDetails?: {
    __typename: "AddressDetails";
    id: string;
    postalAddress: string;
    city: string;
    country: string;
    officeBuilding: string;
    streetAddress: string;
    emailAddress: string;
    title: Title;
    fullName: string;
    contactEmail: string;
    phoneNumber: string;
    companyID: string;
    company?: {
      __typename: "Company";
      id: string;
      organizationName: string;
      organizationType: OrganizationType;
      ownership: Ownership;
      natureOfBusiness: string;
      organizationRegistrationDate: string;
      organizationRegistrationNumber: string;
      registrationCertificate: string;
      cr12: string;
      KRAPIN: string;
      KRAPINCertificate: string;
      taxComplianceNumber: string;
      taxComplianceExpiry: string;
      taxComplianceCertificate: string;
      agpoCategory?: AGPOCategory | null;
      agpoExpiryDate?: string | null;
      agpoCertificate?: string | null;
      addressDetails?: {
        __typename: "ModelAddressDetailsConnection";
        nextToken?: string | null;
      } | null;
      directors?: {
        __typename: "ModelCompanyDirectorsConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnCreateDirectorsSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreateDirectorsSubscription = {
  onCreateDirectors?: {
    __typename: "Directors";
    id: string;
    directorTitle?: Title | null;
    directorName: string;
    directorKRAPIN: string;
    directorEmailAddress: string;
    directorNationality: string;
    directorShares: number;
    companies?: {
      __typename: "ModelCompanyDirectorsConnection";
      items: Array<{
        __typename: "CompanyDirectors";
        id: string;
        companyID: string;
        directorsID: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnUpdateDirectorsSubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdateDirectorsSubscription = {
  onUpdateDirectors?: {
    __typename: "Directors";
    id: string;
    directorTitle?: Title | null;
    directorName: string;
    directorKRAPIN: string;
    directorEmailAddress: string;
    directorNationality: string;
    directorShares: number;
    companies?: {
      __typename: "ModelCompanyDirectorsConnection";
      items: Array<{
        __typename: "CompanyDirectors";
        id: string;
        companyID: string;
        directorsID: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnDeleteDirectorsSubscriptionVariables = {
  owner?: string | null;
};

export type OnDeleteDirectorsSubscription = {
  onDeleteDirectors?: {
    __typename: "Directors";
    id: string;
    directorTitle?: Title | null;
    directorName: string;
    directorKRAPIN: string;
    directorEmailAddress: string;
    directorNationality: string;
    directorShares: number;
    companies?: {
      __typename: "ModelCompanyDirectorsConnection";
      items: Array<{
        __typename: "CompanyDirectors";
        id: string;
        companyID: string;
        directorsID: string;
        createdAt: string;
        updatedAt: string;
        owner?: string | null;
      } | null>;
      nextToken?: string | null;
    } | null;
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnCreateCompanyDirectorsSubscriptionVariables = {
  owner?: string | null;
};

export type OnCreateCompanyDirectorsSubscription = {
  onCreateCompanyDirectors?: {
    __typename: "CompanyDirectors";
    id: string;
    companyID: string;
    directorsID: string;
    company: {
      __typename: "Company";
      id: string;
      organizationName: string;
      organizationType: OrganizationType;
      ownership: Ownership;
      natureOfBusiness: string;
      organizationRegistrationDate: string;
      organizationRegistrationNumber: string;
      registrationCertificate: string;
      cr12: string;
      KRAPIN: string;
      KRAPINCertificate: string;
      taxComplianceNumber: string;
      taxComplianceExpiry: string;
      taxComplianceCertificate: string;
      agpoCategory?: AGPOCategory | null;
      agpoExpiryDate?: string | null;
      agpoCertificate?: string | null;
      addressDetails?: {
        __typename: "ModelAddressDetailsConnection";
        nextToken?: string | null;
      } | null;
      directors?: {
        __typename: "ModelCompanyDirectorsConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    directors: {
      __typename: "Directors";
      id: string;
      directorTitle?: Title | null;
      directorName: string;
      directorKRAPIN: string;
      directorEmailAddress: string;
      directorNationality: string;
      directorShares: number;
      companies?: {
        __typename: "ModelCompanyDirectorsConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnUpdateCompanyDirectorsSubscriptionVariables = {
  owner?: string | null;
};

export type OnUpdateCompanyDirectorsSubscription = {
  onUpdateCompanyDirectors?: {
    __typename: "CompanyDirectors";
    id: string;
    companyID: string;
    directorsID: string;
    company: {
      __typename: "Company";
      id: string;
      organizationName: string;
      organizationType: OrganizationType;
      ownership: Ownership;
      natureOfBusiness: string;
      organizationRegistrationDate: string;
      organizationRegistrationNumber: string;
      registrationCertificate: string;
      cr12: string;
      KRAPIN: string;
      KRAPINCertificate: string;
      taxComplianceNumber: string;
      taxComplianceExpiry: string;
      taxComplianceCertificate: string;
      agpoCategory?: AGPOCategory | null;
      agpoExpiryDate?: string | null;
      agpoCertificate?: string | null;
      addressDetails?: {
        __typename: "ModelAddressDetailsConnection";
        nextToken?: string | null;
      } | null;
      directors?: {
        __typename: "ModelCompanyDirectorsConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    directors: {
      __typename: "Directors";
      id: string;
      directorTitle?: Title | null;
      directorName: string;
      directorKRAPIN: string;
      directorEmailAddress: string;
      directorNationality: string;
      directorShares: number;
      companies?: {
        __typename: "ModelCompanyDirectorsConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};

export type OnDeleteCompanyDirectorsSubscriptionVariables = {
  owner?: string | null;
};

export type OnDeleteCompanyDirectorsSubscription = {
  onDeleteCompanyDirectors?: {
    __typename: "CompanyDirectors";
    id: string;
    companyID: string;
    directorsID: string;
    company: {
      __typename: "Company";
      id: string;
      organizationName: string;
      organizationType: OrganizationType;
      ownership: Ownership;
      natureOfBusiness: string;
      organizationRegistrationDate: string;
      organizationRegistrationNumber: string;
      registrationCertificate: string;
      cr12: string;
      KRAPIN: string;
      KRAPINCertificate: string;
      taxComplianceNumber: string;
      taxComplianceExpiry: string;
      taxComplianceCertificate: string;
      agpoCategory?: AGPOCategory | null;
      agpoExpiryDate?: string | null;
      agpoCertificate?: string | null;
      addressDetails?: {
        __typename: "ModelAddressDetailsConnection";
        nextToken?: string | null;
      } | null;
      directors?: {
        __typename: "ModelCompanyDirectorsConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    directors: {
      __typename: "Directors";
      id: string;
      directorTitle?: Title | null;
      directorName: string;
      directorKRAPIN: string;
      directorEmailAddress: string;
      directorNationality: string;
      directorShares: number;
      companies?: {
        __typename: "ModelCompanyDirectorsConnection";
        nextToken?: string | null;
      } | null;
      createdAt: string;
      updatedAt: string;
      owner?: string | null;
    };
    createdAt: string;
    updatedAt: string;
    owner?: string | null;
  } | null;
};
