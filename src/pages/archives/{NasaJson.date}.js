import * as React from "react";
import { Link, graphql } from "gatsby";
import Layout from "../../components/layout";
import AstroMedia from "../../components/astro-media";

const ArchiveDetailPage = ({ data }) => {
  const apod = data.allNasaJson.nodes[0];
  console.log(data);
  return (
    <Layout pageTitle={apod.date+" "+apod.title}>
      <AstroMedia data={apod}></AstroMedia>
      <Link to="/">Return home</Link>
    </Layout>
  );
};

export const query = graphql`
  query ($date: Date) {
    allNasaJson(filter: { date: { eq: $date } }) {
      nodes {
        id
        hdurl
        explanation
        date
        copyright
        media_type
        title
        service_version
        url
      }
    }
  }
`;

export default ArchiveDetailPage;
