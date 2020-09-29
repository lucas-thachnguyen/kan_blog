import React from 'react'
import { graphql } from 'gatsby'

import PageHeaderVideo from '../components/PageHeaderVideo'
import Ribbon from '../components/Ribbon'
import ServiceGallery from '../components/ServiceGallery'
import Content from '../components/Content'
import Layout from '../components/Layout'

// Export Template for use in CMS preview
export const HomePageTemplate = ({
  featuredVideo,
  ribbon,
  services,
  body
}) => (
  <main className="Home">
    <PageHeaderVideo
      video={featuredVideo}
    />

    <Ribbon description={ribbon} />

    <section className="service">
      <div className="container">
        <ServiceGallery services={services} />
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
      ...Services
      html
      frontmatter {
        featuredVideo
        ribbon
      }
    }
  }
`
