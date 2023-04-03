import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/layout'
import * as styles from "./astro-list.module.css"

const AstroListPage = ({ data, pageContext }) => {
  const images = data?.allNasaJson?.nodes || [];
  console.log(pageContext);
  return (
    <Layout pageTitle="Archives">
      <ul>
        {images.map((image) => {
          return <li key={image.id}><Link to={"/archives/"+image.date}>{image.date} {image.title}</Link></li>
        })}
      </ul>
      <div className="pagination">
        {pageContext.previousPagePath &&
          <Link to={pageContext.previousPagePath}>Previous</Link>}
        {" "}
        {
          [...Array(pageContext.numPages).keys()].map((i) => {
            const pageNum = i + 1;
            const active = pageContext.currentPage === pageNum;
            const pagePath = pageNum == 1 ? '/archives/' : `/archives/${pageNum}`;
            const classes = active ? styles.active : '';
            return <Link className={classes} to={pagePath}>{pageNum}</Link>
          })
        }
        {" "}
        {pageContext.nextPagePath &&
          <Link to={pageContext.nextPagePath}>Next</Link>}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query ($skip: Int!, $limit: Int!) {
    allNasaJson(skip: $skip, limit: $limit, sort: {date: DESC}) {
      nodes {
        id
        hdurl
        explanation
        date
        copyright
        title
      }
    }
  }
`

export default AstroListPage

export const Head = () => <title>Home Page</title>
