/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createCompany = /* GraphQL */ `
  mutation CreateCompany(
    $input: CreateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    createCompany(input: $input, condition: $condition) {
      id
      organizationName
      organizationType
      ownership
      natureOfBusiness
      organizationRegistrationDate
      organizationRegistrationNumber
      registrationCertificate
      cr12
      KRAPIN
      KRAPINCertificate
      taxComplianceNumber
      taxComplianceExpiry
      taxComplianceCertificate
      agpoCategory
      agpoExpiryDate
      agpoCertificate
      addressDetails {
        items {
          id
          postalAddress
          city
          country
          officeBuilding
          streetAddress
          emailAddress
          title
          fullName
          contactEmail
          phoneNumber
          companyID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      directors {
        items {
          id
          companyID
          directorsID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateCompany = /* GraphQL */ `
  mutation UpdateCompany(
    $input: UpdateCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    updateCompany(input: $input, condition: $condition) {
      id
      organizationName
      organizationType
      ownership
      natureOfBusiness
      organizationRegistrationDate
      organizationRegistrationNumber
      registrationCertificate
      cr12
      KRAPIN
      KRAPINCertificate
      taxComplianceNumber
      taxComplianceExpiry
      taxComplianceCertificate
      agpoCategory
      agpoExpiryDate
      agpoCertificate
      addressDetails {
        items {
          id
          postalAddress
          city
          country
          officeBuilding
          streetAddress
          emailAddress
          title
          fullName
          contactEmail
          phoneNumber
          companyID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      directors {
        items {
          id
          companyID
          directorsID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteCompany = /* GraphQL */ `
  mutation DeleteCompany(
    $input: DeleteCompanyInput!
    $condition: ModelCompanyConditionInput
  ) {
    deleteCompany(input: $input, condition: $condition) {
      id
      organizationName
      organizationType
      ownership
      natureOfBusiness
      organizationRegistrationDate
      organizationRegistrationNumber
      registrationCertificate
      cr12
      KRAPIN
      KRAPINCertificate
      taxComplianceNumber
      taxComplianceExpiry
      taxComplianceCertificate
      agpoCategory
      agpoExpiryDate
      agpoCertificate
      addressDetails {
        items {
          id
          postalAddress
          city
          country
          officeBuilding
          streetAddress
          emailAddress
          title
          fullName
          contactEmail
          phoneNumber
          companyID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      directors {
        items {
          id
          companyID
          directorsID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createAddressDetails = /* GraphQL */ `
  mutation CreateAddressDetails(
    $input: CreateAddressDetailsInput!
    $condition: ModelAddressDetailsConditionInput
  ) {
    createAddressDetails(input: $input, condition: $condition) {
      id
      postalAddress
      city
      country
      officeBuilding
      streetAddress
      emailAddress
      title
      fullName
      contactEmail
      phoneNumber
      companyID
      company {
        id
        organizationName
        organizationType
        ownership
        natureOfBusiness
        organizationRegistrationDate
        organizationRegistrationNumber
        registrationCertificate
        cr12
        KRAPIN
        KRAPINCertificate
        taxComplianceNumber
        taxComplianceExpiry
        taxComplianceCertificate
        agpoCategory
        agpoExpiryDate
        agpoCertificate
        addressDetails {
          nextToken
        }
        directors {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateAddressDetails = /* GraphQL */ `
  mutation UpdateAddressDetails(
    $input: UpdateAddressDetailsInput!
    $condition: ModelAddressDetailsConditionInput
  ) {
    updateAddressDetails(input: $input, condition: $condition) {
      id
      postalAddress
      city
      country
      officeBuilding
      streetAddress
      emailAddress
      title
      fullName
      contactEmail
      phoneNumber
      companyID
      company {
        id
        organizationName
        organizationType
        ownership
        natureOfBusiness
        organizationRegistrationDate
        organizationRegistrationNumber
        registrationCertificate
        cr12
        KRAPIN
        KRAPINCertificate
        taxComplianceNumber
        taxComplianceExpiry
        taxComplianceCertificate
        agpoCategory
        agpoExpiryDate
        agpoCertificate
        addressDetails {
          nextToken
        }
        directors {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteAddressDetails = /* GraphQL */ `
  mutation DeleteAddressDetails(
    $input: DeleteAddressDetailsInput!
    $condition: ModelAddressDetailsConditionInput
  ) {
    deleteAddressDetails(input: $input, condition: $condition) {
      id
      postalAddress
      city
      country
      officeBuilding
      streetAddress
      emailAddress
      title
      fullName
      contactEmail
      phoneNumber
      companyID
      company {
        id
        organizationName
        organizationType
        ownership
        natureOfBusiness
        organizationRegistrationDate
        organizationRegistrationNumber
        registrationCertificate
        cr12
        KRAPIN
        KRAPINCertificate
        taxComplianceNumber
        taxComplianceExpiry
        taxComplianceCertificate
        agpoCategory
        agpoExpiryDate
        agpoCertificate
        addressDetails {
          nextToken
        }
        directors {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createDirectors = /* GraphQL */ `
  mutation CreateDirectors(
    $input: CreateDirectorsInput!
    $condition: ModelDirectorsConditionInput
  ) {
    createDirectors(input: $input, condition: $condition) {
      id
      directorTitle
      directorName
      directorKRAPIN
      directorEmailAddress
      directorNationality
      directorShares
      companies {
        items {
          id
          companyID
          directorsID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateDirectors = /* GraphQL */ `
  mutation UpdateDirectors(
    $input: UpdateDirectorsInput!
    $condition: ModelDirectorsConditionInput
  ) {
    updateDirectors(input: $input, condition: $condition) {
      id
      directorTitle
      directorName
      directorKRAPIN
      directorEmailAddress
      directorNationality
      directorShares
      companies {
        items {
          id
          companyID
          directorsID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteDirectors = /* GraphQL */ `
  mutation DeleteDirectors(
    $input: DeleteDirectorsInput!
    $condition: ModelDirectorsConditionInput
  ) {
    deleteDirectors(input: $input, condition: $condition) {
      id
      directorTitle
      directorName
      directorKRAPIN
      directorEmailAddress
      directorNationality
      directorShares
      companies {
        items {
          id
          companyID
          directorsID
          createdAt
          updatedAt
          owner
        }
        nextToken
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createCompanyDirectors = /* GraphQL */ `
  mutation CreateCompanyDirectors(
    $input: CreateCompanyDirectorsInput!
    $condition: ModelCompanyDirectorsConditionInput
  ) {
    createCompanyDirectors(input: $input, condition: $condition) {
      id
      companyID
      directorsID
      company {
        id
        organizationName
        organizationType
        ownership
        natureOfBusiness
        organizationRegistrationDate
        organizationRegistrationNumber
        registrationCertificate
        cr12
        KRAPIN
        KRAPINCertificate
        taxComplianceNumber
        taxComplianceExpiry
        taxComplianceCertificate
        agpoCategory
        agpoExpiryDate
        agpoCertificate
        addressDetails {
          nextToken
        }
        directors {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      directors {
        id
        directorTitle
        directorName
        directorKRAPIN
        directorEmailAddress
        directorNationality
        directorShares
        companies {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateCompanyDirectors = /* GraphQL */ `
  mutation UpdateCompanyDirectors(
    $input: UpdateCompanyDirectorsInput!
    $condition: ModelCompanyDirectorsConditionInput
  ) {
    updateCompanyDirectors(input: $input, condition: $condition) {
      id
      companyID
      directorsID
      company {
        id
        organizationName
        organizationType
        ownership
        natureOfBusiness
        organizationRegistrationDate
        organizationRegistrationNumber
        registrationCertificate
        cr12
        KRAPIN
        KRAPINCertificate
        taxComplianceNumber
        taxComplianceExpiry
        taxComplianceCertificate
        agpoCategory
        agpoExpiryDate
        agpoCertificate
        addressDetails {
          nextToken
        }
        directors {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      directors {
        id
        directorTitle
        directorName
        directorKRAPIN
        directorEmailAddress
        directorNationality
        directorShares
        companies {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteCompanyDirectors = /* GraphQL */ `
  mutation DeleteCompanyDirectors(
    $input: DeleteCompanyDirectorsInput!
    $condition: ModelCompanyDirectorsConditionInput
  ) {
    deleteCompanyDirectors(input: $input, condition: $condition) {
      id
      companyID
      directorsID
      company {
        id
        organizationName
        organizationType
        ownership
        natureOfBusiness
        organizationRegistrationDate
        organizationRegistrationNumber
        registrationCertificate
        cr12
        KRAPIN
        KRAPINCertificate
        taxComplianceNumber
        taxComplianceExpiry
        taxComplianceCertificate
        agpoCategory
        agpoExpiryDate
        agpoCertificate
        addressDetails {
          nextToken
        }
        directors {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      directors {
        id
        directorTitle
        directorName
        directorKRAPIN
        directorEmailAddress
        directorNationality
        directorShares
        companies {
          nextToken
        }
        createdAt
        updatedAt
        owner
      }
      createdAt
      updatedAt
      owner
    }
  }
`;
