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
          status
          response
          addressDetails {
            nextToken
          }
          directors {
            nextToken
          }
          clients {
            nextToken
          }
          personnel {
            nextToken
          }
          contracts {
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
          status
          response
          addressDetails {
            nextToken
          }
          directors {
            nextToken
          }
          clients {
            nextToken
          }
          personnel {
            nextToken
          }
          contracts {
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
            nextToken
          }
          directors {
            nextToken
          }
          clients {
            nextToken
          }
          personnel {
            nextToken
          }
          contracts {
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
      nextToken
    }
  }
`;
export const directorName = /* GraphQL */ `
  query DirectorName(
    $companyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelDirectorsFilterInput
    $limit: Int
    $nextToken: String
  ) {
    directorName(
      companyID: $companyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          addressDetails {
            nextToken
          }
          directors {
            nextToken
          }
          clients {
            nextToken
          }
          personnel {
            nextToken
          }
          contracts {
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
      nextToken
    }
  }
`;
export const getClient = /* GraphQL */ `
  query GetClient($id: ID!) {
    getClient(id: $id) {
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
export const listClients = /* GraphQL */ `
  query ListClients(
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listClients(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          addressDetails {
            nextToken
          }
          directors {
            nextToken
          }
          clients {
            nextToken
          }
          personnel {
            nextToken
          }
          contracts {
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
      nextToken
    }
  }
`;
export const clientName = /* GraphQL */ `
  query ClientName(
    $companyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelClientFilterInput
    $limit: Int
    $nextToken: String
  ) {
    clientName(
      companyID: $companyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          addressDetails {
            nextToken
          }
          directors {
            nextToken
          }
          clients {
            nextToken
          }
          personnel {
            nextToken
          }
          contracts {
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
      nextToken
    }
  }
`;
export const getPersonel = /* GraphQL */ `
  query GetPersonel($id: ID!) {
    getPersonel(id: $id) {
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
export const listPersonels = /* GraphQL */ `
  query ListPersonels(
    $filter: ModelPersonelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listPersonels(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          addressDetails {
            nextToken
          }
          directors {
            nextToken
          }
          clients {
            nextToken
          }
          personnel {
            nextToken
          }
          contracts {
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
      nextToken
    }
  }
`;
export const personelName = /* GraphQL */ `
  query PersonelName(
    $companyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelPersonelFilterInput
    $limit: Int
    $nextToken: String
  ) {
    personelName(
      companyID: $companyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          addressDetails {
            nextToken
          }
          directors {
            nextToken
          }
          clients {
            nextToken
          }
          personnel {
            nextToken
          }
          contracts {
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
      nextToken
    }
  }
`;
export const getOpportunity = /* GraphQL */ `
  query GetOpportunity($id: ID!) {
    getOpportunity(id: $id) {
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
export const listOpportunities = /* GraphQL */ `
  query ListOpportunities(
    $filter: ModelOpportunityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listOpportunities(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
    }
  }
`;
export const getAction = /* GraphQL */ `
  query GetAction($id: ID!) {
    getAction(id: $id) {
      id
      title
      type
      createdAt
      updatedAt
      owner
    }
  }
`;
export const listActions = /* GraphQL */ `
  query ListActions(
    $filter: ModelActionFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listActions(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        title
        type
        createdAt
        updatedAt
        owner
      }
      nextToken
    }
  }
`;
export const getContract = /* GraphQL */ `
  query GetContract($id: ID!) {
    getContract(id: $id) {
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
export const listContracts = /* GraphQL */ `
  query ListContracts(
    $filter: ModelContractFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listContracts(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
          addressDetails {
            nextToken
          }
          directors {
            nextToken
          }
          clients {
            nextToken
          }
          personnel {
            nextToken
          }
          contracts {
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
      nextToken
    }
  }
`;
export const title = /* GraphQL */ `
  query Title(
    $companyID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelContractFilterInput
    $limit: Int
    $nextToken: String
  ) {
    title(
      companyID: $companyID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
          addressDetails {
            nextToken
          }
          directors {
            nextToken
          }
          clients {
            nextToken
          }
          personnel {
            nextToken
          }
          contracts {
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
      nextToken
    }
  }
`;
