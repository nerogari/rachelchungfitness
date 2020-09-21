import React from 'react'
import PropTypes from 'prop-types'
import { Link, graphql } from 'gatsby'
import Layout from '../components/Layout'
//import Features from '../components/Features'
//import BlogRoll from '../components/BlogRoll'

export const IndexPageTemplate = ({
  image,
  title,
  heading,
  subheading,
  mainpitch,
  description,
  intro,
}) => (
  <div>
    <div
      className="full-width-image margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundPosition: `50% 150%`,
        backgroundAttachment: `fixed`,
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',
          justifyContent: 'space-around',
          alignItems: 'left',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            boxShadow:
              '#52D6F4 0.5rem 0px 0px, #52D6F4 -0.5rem 0px 0px',
            backgroundColor: '#52D6F4',
            opacity: '0.75',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            boxShadow:
              '#52D6F4 0.5rem 0px 0px, #52D6F4 -0.5rem 0px 0px',
            backgroundColor: '#52D6F4',
            opacity: '0.75',
            color: 'white',
            lineHeight: '1',
            padding: '0.25em',
          }}
        >
          {subheading}
        </h3>
      </div>
    </div>
    <section className="section section--gradient">
      <div className="container">
        <div className="section">
          <div className="columns">
            <div className="column is-10 is-offset-1">
              <div className="content">
                <div className="content">
                  <div className="tile">
                    <h1 className="title is-size-2">{mainpitch.title}</h1>                    
                  </div>
                  <div className="tile">
                    <div className="subtitle">{mainpitch.description}</div>                                       
                  </div>
                  <div className="subtitle">
                    <p>
                      <ul>
                        <li>Personalized programming is specific to you and your goals.</li>
                        <li>Progressive and structured programming ensures ongoing success without plateaus or over-training.</li>
                        <li>Functional Training focuses on movement patterns for superior performance in sport and tasks of daily living</li>
                        <li>Focus on form and technique. You cannot build greatness on a shaky foundation.</li>
                        <li>Enhanced mobility and core integrity for greater quality of movement and injury prevention </li>
                      </ul>  
                    </p>
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    <h1 className="has-text-weight-semibold">
                      {heading}
                    </h1>
                    {/*<p>{description}</p>*/}                    
                  </div>
                </div>
                {/*<Features gridItems={intro.blurbs} />*/}
                <div className="columns">
                  <div className="column is-12 has-text-centered background-color-white">
                    <Link className="btn" to="/products">
                      See All Services
                    </Link>
                  </div>
                </div>                
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
)

IndexPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string,
  heading: PropTypes.string,
  subheading: PropTypes.string,
  mainpitch: PropTypes.object,
  description: PropTypes.string,
  //intro: PropTypes.shape({
  //  blurbs: PropTypes.array,
  //}),
}

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  return (
    <Layout>
      <IndexPageTemplate
        image={frontmatter.image}
        title={frontmatter.title}
        heading={frontmatter.heading}
        subheading={frontmatter.subheading}
        mainpitch={frontmatter.mainpitch}
        description={frontmatter.description}
        //intro={frontmatter.intro}
      />
    </Layout>
  )
}

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        heading
        subheading
        mainpitch {
          title
          description
          items
        }
        description
        intro {
          blurbs {
            image {
              childImageSharp {
                fluid(maxWidth: 240, quality: 64) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            text
          }
          heading
          description
        }
      }
    }
  }
`
