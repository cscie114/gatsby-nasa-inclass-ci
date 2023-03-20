import * as React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";
import AstroMedia from "../components/astro-media";

const IndexPage = ({ data }) => {
  const apod = data.allNasaJson.nodes[0];
  return (
    <Layout pageTitle="Astronomy Picture of the Day">
      <h2>{apod.date}</h2>
      <AstroMedia data={apod}></AstroMedia>
    </Layout>
  );
};

export const query = graphql`
  query IndexQuery {
    allNasaJson(limit: 1, sort: { date: DESC }) {
      nodes {
        id
        hdurl
        url
        explanation
        date
        copyright
        media_type
        title
      }
    }
  }
`;

export default IndexPage;

export const Head = () => <title>Home Page</title>;
