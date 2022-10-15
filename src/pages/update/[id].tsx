import { withSSRContext } from "aws-amplify";
import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import { Company, GetCompanyQuery, ListCompaniesQuery } from "../../API";
import CompanyForm from "../../components/companyForm";
import { getCompany, listCompanies } from "../../graphql/queries";

interface Props {
  company: Company;
}

export default function Update({ company }: Props) {
  return <CompanyForm company={company} />;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const SSR = withSSRContext();
  const allCompanies = (await SSR.API.graphql({ query: listCompanies })) as {
    data: ListCompaniesQuery;
    errors: any[];
  };
  const paths = allCompanies.data.listCompanies.items.map((company) => ({
    params: { id: company.id },
  }));
  return { paths, fallback: "blocking" };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const SSR = withSSRContext();
  const companiesQuery = (await SSR.API.graphql({
    query: getCompany,
    variables: {
      id: params.id,
    },
  })) as { data: GetCompanyQuery };

  return {
    props: {
      company: companiesQuery.data.getCompany as Company,
    },
    revalidate: 10,
  };
};
