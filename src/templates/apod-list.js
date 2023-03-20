import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/layout'

const ApodListPage = ({ data, pageContext }) => {
  const images = data?.allNasaJson?.nodes || [];
  return (
    <Layout pageTitle="Archives">
      <ul>
        {images.map((apod) => {
          return <li key={apod.id}><Link to={"/archives/"+apod.date}>{apod.date}</Link></li>
        })}
      </ul>
      <div>
        {pageContext.previousPagePath &&
          <Link to={pageContext.previousPagePath}>Previous</Link>}
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

export default ApodListPage

export const Head = () => <title>Home Page</title>
