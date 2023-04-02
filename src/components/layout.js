import * as React from "react";
import { Link, useStaticQuery, graphql } from "gatsby";
import { container } from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);

  return (
    <div className={container}>
      <header>
        <h1>{data.site.siteMetadata.title}</h1>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/archives">Archives</Link>
          <Link to="/search">Search</Link>
        </nav>
      </header>
      <main>
        <h2>{pageTitle}</h2>
        {children}
      </main>
    </div>
  );
};

export default Layout;
