/* tslint:disable */
/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCompany = /* GraphQL */ `
  subscription OnCreateCompany(
    $filter: ModelSubscriptionCompanyFilterInput
    $owner: String
  ) {
    onCreateCompany(filter: $filter, owner: $owner) {
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
export const onUpdateCompany = /* GraphQL */ `
  subscription OnUpdateCompany(
    $filter: ModelSubscriptionCompanyFilterInput
    $owner: String
  ) {
    onUpdateCompany(filter: $filter, owner: $owner) {
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
export const onDeleteCompany = /* GraphQL */ `
  subscription OnDeleteCompany(
    $filter: ModelSubscriptionCompanyFilterInput
    $owner: String
  ) {
    onDeleteCompany(filter: $filter, owner: $owner) {
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
export const onCreateAddressDetails = /* GraphQL */ `
  subscription OnCreateAddressDetails(
    $filter: ModelSubscriptionAddressDetailsFilterInput
    $owner: String
  ) {
    onCreateAddressDetails(filter: $filter, owner: $owner) {
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
export const onUpdateAddressDetails = /* GraphQL */ `
  subscription OnUpdateAddressDetails(
    $filter: ModelSubscriptionAddressDetailsFilterInput
    $owner: String
  ) {
    onUpdateAddressDetails(filter: $filter, owner: $owner) {
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
export const onDeleteAddressDetails = /* GraphQL */ `
  subscription OnDeleteAddressDetails(
    $filter: ModelSubscriptionAddressDetailsFilterInput
    $owner: String
  ) {
    onDeleteAddressDetails(filter: $filter, owner: $owner) {
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
export const onCreateDirectors = /* GraphQL */ `
  subscription OnCreateDirectors(
    $filter: ModelSubscriptionDirectorsFilterInput
    $owner: String
  ) {
    onCreateDirectors(filter: $filter, owner: $owner) {
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
export const onUpdateDirectors = /* GraphQL */ `
  subscription OnUpdateDirectors(
    $filter: ModelSubscriptionDirectorsFilterInput
    $owner: String
  ) {
    onUpdateDirectors(filter: $filter, owner: $owner) {
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
export const onDeleteDirectors = /* GraphQL */ `
  subscription OnDeleteDirectors(
    $filter: ModelSubscriptionDirectorsFilterInput
    $owner: String
  ) {
    onDeleteDirectors(filter: $filter, owner: $owner) {
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
export const onCreateClient = /* GraphQL */ `
  subscription OnCreateClient(
    $filter: ModelSubscriptionClientFilterInput
    $owner: String
  ) {
    onCreateClient(filter: $filter, owner: $owner) {
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
export const onUpdateClient = /* GraphQL */ `
  subscription OnUpdateClient(
    $filter: ModelSubscriptionClientFilterInput
    $owner: String
  ) {
    onUpdateClient(filter: $filter, owner: $owner) {
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
export const onDeleteClient = /* GraphQL */ `
  subscription OnDeleteClient(
    $filter: ModelSubscriptionClientFilterInput
    $owner: String
  ) {
    onDeleteClient(filter: $filter, owner: $owner) {
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
export const onCreatePersonel = /* GraphQL */ `
  subscription OnCreatePersonel(
    $filter: ModelSubscriptionPersonelFilterInput
    $owner: String
  ) {
    onCreatePersonel(filter: $filter, owner: $owner) {
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
export const onUpdatePersonel = /* GraphQL */ `
  subscription OnUpdatePersonel(
    $filter: ModelSubscriptionPersonelFilterInput
    $owner: String
  ) {
    onUpdatePersonel(filter: $filter, owner: $owner) {
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
export const onDeletePersonel = /* GraphQL */ `
  subscription OnDeletePersonel(
    $filter: ModelSubscriptionPersonelFilterInput
    $owner: String
  ) {
    onDeletePersonel(filter: $filter, owner: $owner) {
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
export const onCreateOpportunity = /* GraphQL */ `
  subscription OnCreateOpportunity(
    $filter: ModelSubscriptionOpportunityFilterInput
    $owner: String
  ) {
    onCreateOpportunity(filter: $filter, owner: $owner) {
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
export const onUpdateOpportunity = /* GraphQL */ `
  subscription OnUpdateOpportunity(
    $filter: ModelSubscriptionOpportunityFilterInput
    $owner: String
  ) {
    onUpdateOpportunity(filter: $filter, owner: $owner) {
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
export const onDeleteOpportunity = /* GraphQL */ `
  subscription OnDeleteOpportunity(
    $filter: ModelSubscriptionOpportunityFilterInput
    $owner: String
  ) {
    onDeleteOpportunity(filter: $filter, owner: $owner) {
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
export const onCreateAction = /* GraphQL */ `
  subscription OnCreateAction(
    $filter: ModelSubscriptionActionFilterInput
    $owner: String
  ) {
    onCreateAction(filter: $filter, owner: $owner) {
      id
      title
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onUpdateAction = /* GraphQL */ `
  subscription OnUpdateAction(
    $filter: ModelSubscriptionActionFilterInput
    $owner: String
  ) {
    onUpdateAction(filter: $filter, owner: $owner) {
      id
      title
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onDeleteAction = /* GraphQL */ `
  subscription OnDeleteAction(
    $filter: ModelSubscriptionActionFilterInput
    $owner: String
  ) {
    onDeleteAction(filter: $filter, owner: $owner) {
      id
      title
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
export const onCreateContract = /* GraphQL */ `
  subscription OnCreateContract(
    $filter: ModelSubscriptionContractFilterInput
    $owner: String
  ) {
    onCreateContract(filter: $filter, owner: $owner) {
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
export const onUpdateContract = /* GraphQL */ `
  subscription OnUpdateContract(
    $filter: ModelSubscriptionContractFilterInput
    $owner: String
  ) {
    onUpdateContract(filter: $filter, owner: $owner) {
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
export const onDeleteContract = /* GraphQL */ `
  subscription OnDeleteContract(
    $filter: ModelSubscriptionContractFilterInput
    $owner: String
  ) {
    onDeleteContract(filter: $filter, owner: $owner) {
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
