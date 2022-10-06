/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany($owner: String) {
    onCreateCompany(owner: $owner) {
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
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany($owner: String) {
    onUpdateCompany(owner: $owner) {
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
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany($owner: String) {
    onDeleteCompany(owner: $owner) {
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
export const onCreateAddressDetails = /* GraphQL */ `
  subscription OnCreateAddressDetails($owner: String) {
    onCreateAddressDetails(owner: $owner) {
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
export const onUpdateAddressDetails = /* GraphQL */ `
  subscription OnUpdateAddressDetails($owner: String) {
    onUpdateAddressDetails(owner: $owner) {
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
export const onDeleteAddressDetails = /* GraphQL */ `
  subscription OnDeleteAddressDetails($owner: String) {
    onDeleteAddressDetails(owner: $owner) {
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
export const onCreateDirectors = /* GraphQL */ `
  subscription OnCreateDirectors($owner: String) {
    onCreateDirectors(owner: $owner) {
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
export const onUpdateDirectors = /* GraphQL */ `
  subscription OnUpdateDirectors($owner: String) {
    onUpdateDirectors(owner: $owner) {
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
export const onDeleteDirectors = /* GraphQL */ `
  subscription OnDeleteDirectors($owner: String) {
    onDeleteDirectors(owner: $owner) {
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
export const onCreateCompanyDirectors = /* GraphQL */ `
  subscription OnCreateCompanyDirectors($owner: String) {
    onCreateCompanyDirectors(owner: $owner) {
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
export const onUpdateCompanyDirectors = /* GraphQL */ `
  subscription OnUpdateCompanyDirectors($owner: String) {
    onUpdateCompanyDirectors(owner: $owner) {
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
export const onDeleteCompanyDirectors = /* GraphQL */ `
  subscription OnDeleteCompanyDirectors($owner: String) {
    onDeleteCompanyDirectors(owner: $owner) {
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
