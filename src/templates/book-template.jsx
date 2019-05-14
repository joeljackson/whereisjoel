import React from 'react'
import Helmet from 'react-helmet'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import BookTemplateDetails from '../components/BookTemplateDetails'

class BookTemplate extends React.Component {
  render() {
    const { title, subtitle } = this.props.data.site.siteMetadata
    const page = this.props.data.markdownRemark
    const { title: pageTitle, description: pageDescription } = page.frontmatter
    const description = pageDescription !== null ? pageDescription : subtitle

    return (
      <Layout>
        <div>
          <Helmet>
            <title>{`${pageTitle} - ${title}`}</title>
            <meta name="description" content={description} />
          </Helmet>
          <BookTemplateDetails {...this.props} />
        </div>
      </Layout>
    )
  }
}

export default BookTemplate

export const pageQuery = graphql`
  query BookBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        subtitle
        copyright
        menu {
          label
          path
        }
        author {
          name
          email
          github
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      html
      frontmatter {
        title
        chapters
      }
    }
    allMarkdownRemark(filter: { frontmatter:  { layout: { eq:"section"}}}) {
      edges {
        node {
          frontmatter {
            title
            chapter
          }
          html
        }
      }
    }
  }
`
