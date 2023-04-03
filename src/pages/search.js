import React from "react";
import { useState } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../components/layout";
import * as searchStyles from "./search.module.css"

// Utility function to lowercase the title and explanation for searching
const normalizeNode = (node) => {
    return {
        ...node,
        date: node.date,
        title: node.title.toLowerCase(),
        explanation: node.explanation.toLowerCase(),
    }
}

// Utility function to match a node
const matchNode = (node, terms) => {
  const { date, title, explanation } = node;
  return date.includes(terms) || title.includes(terms) || explanation.includes(terms);
}

// Utility function to match nodes based on search terms
const filterNodes = (nodes, terms) => {
    if(!terms || terms.length === 0) {
        return []
    }
    terms = terms.toLowerCase();
    return nodes.map(normalizeNode).filter((node) => matchNode(node, terms));
}

// Search component
const SearchPage = ({ data }) => {
  const [terms, setTerms] = useState(null);
  const handleSearch = (e) => setTerms(e.target.value);
  const matches = filterNodes(data.allNasaJson.nodes, terms);

  return (
    <Layout pageTitle="Search">
      <div class={searchStyles.searchBox}>
        <input type="search" name="q" minLength="2" maxLength="100" style={{width:"100%"}} onChange={handleSearch} placeholder="Enter your search terms..."></input>
        {terms && <p>Searching for: {terms}</p>}
      </div>
      <ul>
        {matches.map((node, i) => {
          return (
              <li key={node.id}>
                  <Link to={"/archives/" + node.date}>{node.date} {node.title}</Link>
              </li>)
          })}
      </ul>
    </Layout>
  );
};

// Retrieve ALL nasa pictures of the day
// Since it is a small number, we can do the search on the client-side
export const query = graphql`
  query {
    allNasaJson {
      nodes {
        id
        explanation
        date
        display_date: date(formatString: "MMMM Do, YYYY")
        month: date(formatString: "MMMM")
        year: date(formatString: "YYYY")
        copyright
        media_type
        title
      }
    }
  }
`;

export default SearchPage;

export const Head = () => <title>Search Page</title>;
