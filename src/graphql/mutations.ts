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
      status
      response
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
            status
            response
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
      directors {
        items {
          id
          directorTitle
          directorName
          directorKRAPIN
          directorEmailAddress
          directorNationality
          directorShares
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
            status
            response
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
      clients {
        items {
          id
          clientName
          contractValue
          startDate
          endDate
          contactPerson
          contactEmail
          contactPhoneNumber
          contractAttachment
          serviceDescription
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
            status
            response
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
      personnel {
        items {
          id
          personelName
          role
          nationalid
          qualificationAttachment
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
            status
            response
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
      contracts {
        items {
          id
          title
          type
          department
          budget
          status
          description
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
            status
            response
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
      status
      response
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
            status
            response
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
      directors {
        items {
          id
          directorTitle
          directorName
          directorKRAPIN
          directorEmailAddress
          directorNationality
          directorShares
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
            status
            response
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
      clients {
        items {
          id
          clientName
          contractValue
          startDate
          endDate
          contactPerson
          contactEmail
          contactPhoneNumber
          contractAttachment
          serviceDescription
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
            status
            response
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
      personnel {
        items {
          id
          personelName
          role
          nationalid
          qualificationAttachment
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
            status
            response
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
      contracts {
        items {
          id
          title
          type
          department
          budget
          status
          description
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
            status
            response
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
      status
      response
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
            status
            response
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
      directors {
        items {
          id
          directorTitle
          directorName
          directorKRAPIN
          directorEmailAddress
          directorNationality
          directorShares
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
            status
            response
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
      clients {
        items {
          id
          clientName
          contractValue
          startDate
          endDate
          contactPerson
          contactEmail
          contactPhoneNumber
          contractAttachment
          serviceDescription
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
            status
            response
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
      personnel {
        items {
          id
          personelName
          role
          nationalid
          qualificationAttachment
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
            status
            response
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
      contracts {
        items {
          id
          title
          type
          department
          budget
          status
          description
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
            status
            response
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
        status
        response
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
            directorTitle
            directorName
            directorKRAPIN
            directorEmailAddress
            directorNationality
            directorShares
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        clients {
          items {
            id
            clientName
            contractValue
            startDate
            endDate
            contactPerson
            contactEmail
            contactPhoneNumber
            contractAttachment
            serviceDescription
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        personnel {
          items {
            id
            personelName
            role
            nationalid
            qualificationAttachment
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        contracts {
          items {
            id
            title
            type
            department
            budget
            status
            description
            companyID
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
        status
        response
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
            directorTitle
            directorName
            directorKRAPIN
            directorEmailAddress
            directorNationality
            directorShares
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        clients {
          items {
            id
            clientName
            contractValue
            startDate
            endDate
            contactPerson
            contactEmail
            contactPhoneNumber
            contractAttachment
            serviceDescription
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        personnel {
          items {
            id
            personelName
            role
            nationalid
            qualificationAttachment
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        contracts {
          items {
            id
            title
            type
            department
            budget
            status
            description
            companyID
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
        status
        response
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
            directorTitle
            directorName
            directorKRAPIN
            directorEmailAddress
            directorNationality
            directorShares
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        clients {
          items {
            id
            clientName
            contractValue
            startDate
            endDate
            contactPerson
            contactEmail
            contactPhoneNumber
            contractAttachment
            serviceDescription
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        personnel {
          items {
            id
            personelName
            role
            nationalid
            qualificationAttachment
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        contracts {
          items {
            id
            title
            type
            department
            budget
            status
            description
            companyID
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
        status
        response
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
            directorTitle
            directorName
            directorKRAPIN
            directorEmailAddress
            directorNationality
            directorShares
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        clients {
          items {
            id
            clientName
            contractValue
            startDate
            endDate
            contactPerson
            contactEmail
            contactPhoneNumber
            contractAttachment
            serviceDescription
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        personnel {
          items {
            id
            personelName
            role
            nationalid
            qualificationAttachment
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        contracts {
          items {
            id
            title
            type
            department
            budget
            status
            description
            companyID
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
        status
        response
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
            directorTitle
            directorName
            directorKRAPIN
            directorEmailAddress
            directorNationality
            directorShares
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        clients {
          items {
            id
            clientName
            contractValue
            startDate
            endDate
            contactPerson
            contactEmail
            contactPhoneNumber
            contractAttachment
            serviceDescription
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        personnel {
          items {
            id
            personelName
            role
            nationalid
            qualificationAttachment
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        contracts {
          items {
            id
            title
            type
            department
            budget
            status
            description
            companyID
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
        status
        response
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
            directorTitle
            directorName
            directorKRAPIN
            directorEmailAddress
            directorNationality
            directorShares
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        clients {
          items {
            id
            clientName
            contractValue
            startDate
            endDate
            contactPerson
            contactEmail
            contactPhoneNumber
            contractAttachment
            serviceDescription
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        personnel {
          items {
            id
            personelName
            role
            nationalid
            qualificationAttachment
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        contracts {
          items {
            id
            title
            type
            department
            budget
            status
            description
            companyID
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createClient = /* GraphQL */ `
  mutation CreateClient(
    $input: CreateClientInput!
    $condition: ModelClientConditionInput
  ) {
    createClient(input: $input, condition: $condition) {
      id
      clientName
      contractValue
      startDate
      endDate
      contactPerson
      contactEmail
      contactPhoneNumber
      contractAttachment
      serviceDescription
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
        status
        response
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
            directorTitle
            directorName
            directorKRAPIN
            directorEmailAddress
            directorNationality
            directorShares
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        clients {
          items {
            id
            clientName
            contractValue
            startDate
            endDate
            contactPerson
            contactEmail
            contactPhoneNumber
            contractAttachment
            serviceDescription
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        personnel {
          items {
            id
            personelName
            role
            nationalid
            qualificationAttachment
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        contracts {
          items {
            id
            title
            type
            department
            budget
            status
            description
            companyID
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateClient = /* GraphQL */ `
  mutation UpdateClient(
    $input: UpdateClientInput!
    $condition: ModelClientConditionInput
  ) {
    updateClient(input: $input, condition: $condition) {
      id
      clientName
      contractValue
      startDate
      endDate
      contactPerson
      contactEmail
      contactPhoneNumber
      contractAttachment
      serviceDescription
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
        status
        response
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
            directorTitle
            directorName
            directorKRAPIN
            directorEmailAddress
            directorNationality
            directorShares
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        clients {
          items {
            id
            clientName
            contractValue
            startDate
            endDate
            contactPerson
            contactEmail
            contactPhoneNumber
            contractAttachment
            serviceDescription
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        personnel {
          items {
            id
            personelName
            role
            nationalid
            qualificationAttachment
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        contracts {
          items {
            id
            title
            type
            department
            budget
            status
            description
            companyID
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteClient = /* GraphQL */ `
  mutation DeleteClient(
    $input: DeleteClientInput!
    $condition: ModelClientConditionInput
  ) {
    deleteClient(input: $input, condition: $condition) {
      id
      clientName
      contractValue
      startDate
      endDate
      contactPerson
      contactEmail
      contactPhoneNumber
      contractAttachment
      serviceDescription
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
        status
        response
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
            directorTitle
            directorName
            directorKRAPIN
            directorEmailAddress
            directorNationality
            directorShares
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        clients {
          items {
            id
            clientName
            contractValue
            startDate
            endDate
            contactPerson
            contactEmail
            contactPhoneNumber
            contractAttachment
            serviceDescription
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        personnel {
          items {
            id
            personelName
            role
            nationalid
            qualificationAttachment
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        contracts {
          items {
            id
            title
            type
            department
            budget
            status
            description
            companyID
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createPersonel = /* GraphQL */ `
  mutation CreatePersonel(
    $input: CreatePersonelInput!
    $condition: ModelPersonelConditionInput
  ) {
    createPersonel(input: $input, condition: $condition) {
      id
      personelName
      role
      nationalid
      qualificationAttachment
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
        status
        response
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
            directorTitle
            directorName
            directorKRAPIN
            directorEmailAddress
            directorNationality
            directorShares
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        clients {
          items {
            id
            clientName
            contractValue
            startDate
            endDate
            contactPerson
            contactEmail
            contactPhoneNumber
            contractAttachment
            serviceDescription
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        personnel {
          items {
            id
            personelName
            role
            nationalid
            qualificationAttachment
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        contracts {
          items {
            id
            title
            type
            department
            budget
            status
            description
            companyID
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updatePersonel = /* GraphQL */ `
  mutation UpdatePersonel(
    $input: UpdatePersonelInput!
    $condition: ModelPersonelConditionInput
  ) {
    updatePersonel(input: $input, condition: $condition) {
      id
      personelName
      role
      nationalid
      qualificationAttachment
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
        status
        response
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
            directorTitle
            directorName
            directorKRAPIN
            directorEmailAddress
            directorNationality
            directorShares
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        clients {
          items {
            id
            clientName
            contractValue
            startDate
            endDate
            contactPerson
            contactEmail
            contactPhoneNumber
            contractAttachment
            serviceDescription
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        personnel {
          items {
            id
            personelName
            role
            nationalid
            qualificationAttachment
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        contracts {
          items {
            id
            title
            type
            department
            budget
            status
            description
            companyID
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deletePersonel = /* GraphQL */ `
  mutation DeletePersonel(
    $input: DeletePersonelInput!
    $condition: ModelPersonelConditionInput
  ) {
    deletePersonel(input: $input, condition: $condition) {
      id
      personelName
      role
      nationalid
      qualificationAttachment
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
        status
        response
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
            directorTitle
            directorName
            directorKRAPIN
            directorEmailAddress
            directorNationality
            directorShares
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        clients {
          items {
            id
            clientName
            contractValue
            startDate
            endDate
            contactPerson
            contactEmail
            contactPhoneNumber
            contractAttachment
            serviceDescription
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        personnel {
          items {
            id
            personelName
            role
            nationalid
            qualificationAttachment
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        contracts {
          items {
            id
            title
            type
            department
            budget
            status
            description
            companyID
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createOpportunity = /* GraphQL */ `
  mutation CreateOpportunity(
    $input: CreateOpportunityInput!
    $condition: ModelOpportunityConditionInput
  ) {
    createOpportunity(input: $input, condition: $condition) {
      id
      title
      type
      department
      budget
      status
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateOpportunity = /* GraphQL */ `
  mutation UpdateOpportunity(
    $input: UpdateOpportunityInput!
    $condition: ModelOpportunityConditionInput
  ) {
    updateOpportunity(input: $input, condition: $condition) {
      id
      title
      type
      department
      budget
      status
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteOpportunity = /* GraphQL */ `
  mutation DeleteOpportunity(
    $input: DeleteOpportunityInput!
    $condition: ModelOpportunityConditionInput
  ) {
    deleteOpportunity(input: $input, condition: $condition) {
      id
      title
      type
      department
      budget
      status
      description
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createAction = /* GraphQL */ `
  mutation CreateAction(
    $input: CreateActionInput!
    $condition: ModelActionConditionInput
  ) {
    createAction(input: $input, condition: $condition) {
      id
      title
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateAction = /* GraphQL */ `
  mutation UpdateAction(
    $input: UpdateActionInput!
    $condition: ModelActionConditionInput
  ) {
    updateAction(input: $input, condition: $condition) {
      id
      title
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteAction = /* GraphQL */ `
  mutation DeleteAction(
    $input: DeleteActionInput!
    $condition: ModelActionConditionInput
  ) {
    deleteAction(input: $input, condition: $condition) {
      id
      title
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
export const createContract = /* GraphQL */ `
  mutation CreateContract(
    $input: CreateContractInput!
    $condition: ModelContractConditionInput
  ) {
    createContract(input: $input, condition: $condition) {
      id
      title
      type
      department
      budget
      status
      description
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
        status
        response
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
            directorTitle
            directorName
            directorKRAPIN
            directorEmailAddress
            directorNationality
            directorShares
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        clients {
          items {
            id
            clientName
            contractValue
            startDate
            endDate
            contactPerson
            contactEmail
            contactPhoneNumber
            contractAttachment
            serviceDescription
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        personnel {
          items {
            id
            personelName
            role
            nationalid
            qualificationAttachment
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        contracts {
          items {
            id
            title
            type
            department
            budget
            status
            description
            companyID
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const updateContract = /* GraphQL */ `
  mutation UpdateContract(
    $input: UpdateContractInput!
    $condition: ModelContractConditionInput
  ) {
    updateContract(input: $input, condition: $condition) {
      id
      title
      type
      department
      budget
      status
      description
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
        status
        response
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
            directorTitle
            directorName
            directorKRAPIN
            directorEmailAddress
            directorNationality
            directorShares
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        clients {
          items {
            id
            clientName
            contractValue
            startDate
            endDate
            contactPerson
            contactEmail
            contactPhoneNumber
            contractAttachment
            serviceDescription
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        personnel {
          items {
            id
            personelName
            role
            nationalid
            qualificationAttachment
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        contracts {
          items {
            id
            title
            type
            department
            budget
            status
            description
            companyID
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
      createdAt
      updatedAt
      owner
    }
  }
`;
export const deleteContract = /* GraphQL */ `
  mutation DeleteContract(
    $input: DeleteContractInput!
    $condition: ModelContractConditionInput
  ) {
    deleteContract(input: $input, condition: $condition) {
      id
      title
      type
      department
      budget
      status
      description
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
        status
        response
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
            directorTitle
            directorName
            directorKRAPIN
            directorEmailAddress
            directorNationality
            directorShares
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        clients {
          items {
            id
            clientName
            contractValue
            startDate
            endDate
            contactPerson
            contactEmail
            contactPhoneNumber
            contractAttachment
            serviceDescription
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        personnel {
          items {
            id
            personelName
            role
            nationalid
            qualificationAttachment
            companyID
            createdAt
            updatedAt
            owner
          }
          nextToken
        }
        contracts {
          items {
            id
            title
            type
            department
            budget
            status
            description
            companyID
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
      createdAt
      updatedAt
      owner
    }
  }
`;
