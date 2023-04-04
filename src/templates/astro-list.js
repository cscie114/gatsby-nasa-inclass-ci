import * as React from "react"
import { graphql, Link } from "gatsby"
import Layout from '../components/layout'
import Pagination from '../components/pagination'


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
      <Pagination
        currentPage={pageContext.currentPage}
        numPages={pageContext.numPages}
        pathPrefix={pageContext.pathPrefix}
      />
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
