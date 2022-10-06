/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getCompany = /* GraphQL */ `
  query GetCompany($id: ID!) {
    getCompany(id: $id) {
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
export const listCompanies = /* GraphQL */ `
  query ListCompanies(
    $filter: ModelCompanyFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanies(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAddressDetails = /* GraphQL */ `
  query GetAddressDetails($id: ID!) {
    getAddressDetails(id: $id) {
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
export const listAddressDetails = /* GraphQL */ `
  query ListAddressDetails(
    $filter: ModelAddressDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAddressDetails(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const postalAddress = /* GraphQL */ `
  query PostalAddress(
    $companyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAddressDetailsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    postalAddress(
      companyID: $companyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getDirectors = /* GraphQL */ `
  query GetDirectors($id: ID!) {
    getDirectors(id: $id) {
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
export const listDirectors = /* GraphQL */ `
  query ListDirectors(
    $filter: ModelDirectorsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listDirectors(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getCompanyDirectors = /* GraphQL */ `
  query GetCompanyDirectors($id: ID!) {
    getCompanyDirectors(id: $id) {
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
export const listCompanyDirectors = /* GraphQL */ `
  query ListCompanyDirectors(
    $filter: ModelCompanyDirectorsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCompanyDirectors(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
          createdAt
          updatedAt
          owner
        }
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
