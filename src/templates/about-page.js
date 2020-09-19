import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'

export const AboutPageTemplate = ({ image, title, content, contentComponent }) => {
  const PageContent = contentComponent || Content

  return (
    <div className="content">
        <div
         className="full-width-image margin-top-0"
         style={{
           backgroundImage: `url(${
             !!image.childImageSharp ? image.childImageSharp.fluid.src : image
           })`,
           backgroundPosition: `center`,
           backgroundAttachment: `fixed`,
           }}
        >
          <h2
            className="has-text-weight-bold is-size-1"
            style={{
              borderColor: "white",
              boxShadow: '1px 1px 1px #FFFFFF, 1px 1px 1px #FFFFFF',
              backgroundColor: '#73939C',
              color: 'white',
              opacity: '0.75',
              padding: '1rem',
            }}
          >
            {title}
          </h2>
        </div>
            <section className="section section--gradient">
              <div className="container">
                <div className="columns">
                  <div className="column is-10 is-offset-1">
                    <div className="section">
                      <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
                        {title}
                     </h2>
                     <PageContent className="content" content={content} />
                    </div>
                  </div>
                </div>
              </div>
            </section>
    </div>        
  )
}

AboutPageTemplate.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const AboutPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <AboutPageTemplate
        contentComponent={HTMLContent}
        title={post.frontmatter.title}
        image={post.frontmatter.image}
        content={post.html}
      />
    </Layout>
  )
}

AboutPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default AboutPage

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
