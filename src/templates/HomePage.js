import React from 'react'
import { graphql } from 'gatsby'

import PageHeaderVideo from '../components/PageHeaderVideo'
import Ribbon from '../components/Ribbon'
import Content from '../components/Content'
import Layout from '../components/Layout'

// Export Template for use in CMS preview
export const HomePageTemplate = ({ featuredVideo, ribbon, body }) => (
  <main className="Home">
    <PageHeaderVideo
      video={featuredVideo}
    />

    <Ribbon description={ribbon} />

    <section className="section">
      <div className="container">
        <Content source={body} />
      </div>
    </section>
  </main>
)

// Export Default HomePage for front-end
const HomePage = ({ data: { page } }) => (
  <Layout meta={page.frontmatter.meta || false}>
    <HomePageTemplate {...page} {...page.frontmatter} body={page.html} />
  </Layout>
)

export default HomePage

export const pageQuery = graphql`
  ## Query for HomePage data
  ## Use GraphiQL interface (http://localhost:8000/___graphql)
  ## $id is processed via gatsby-node.js
  ## query name must be unique to this file
  query HomePage($id: String!) {
    page: markdownRemark(id: { eq: $id }) {
      ...Meta
      html
      frontmatter {
        featuredVideo
        ribbon
      }
    }
  }
`
