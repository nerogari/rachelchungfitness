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
  //description,
  //intro,
}) => (
  <div>
    <div
      className="full-width-image-container margin-top-0"
      style={{
        backgroundImage: `url(${
          !!image.childImageSharp ? image.childImageSharp.fluid.src : image
        })`,
        backgroundAttachment: `center`,
        position: 'center',
        width: '100vw',
        height: '27vw',        
      }}
    >
      <div
        style={{
          display: 'flex',
          height: '150px',
          lineHeight: '1',          
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <h1
          className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
          style={{
            color: '#0D1B46',
            lineHeight: '1',
            padding: '0.25em',               
          }}
        >
          {title}
        </h1>
        <h3
          className="has-text-weight-bold is-size-5-mobile is-size-5-tablet is-size-4-widescreen"
          style={{
            color: '#0D1B46',
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
                  <div className="tile">                                          
                    <div className="columns">
                      {/*Commenting out Sarah's list
                      <section className="section">
                        <ul>
                          {mainpitch.points.map((blurb) => (      
                            <div key={blurb.pointslist} className="columns">                                                         
                              <li>{blurb.pointslist}</li>                            
                            </div>     
                          ))}
                          </ul>
                      </section> */}
                    </div>                 
                  </div>
                </div>
                <div className="columns">
                  <div className="column is-12">
                    {/* Commenting out Services Offered subheading
                    <h1 className="has-text-weight-semibold">
                      {heading}
                    </h1> */}
                  </div>
                </div>
                {/*<Features gridItems={intro.blurbs} />*/}
                <div className="columns">
                  <div className="column is-12 has-text-centered">
                    <Link className="btn" to="/products">
                      Training Packages
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
  mainpitch: PropTypes.shape({
    points: PropTypes.array,
  }),
  description: PropTypes.string,
  intro: PropTypes.shape({
    blurbs: PropTypes.array,
  }),
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
        intro={frontmatter.intro}
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
          points {
              pointslist
          }
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
            packagetype
            text {
              package
            }
          }
          heading
          description
        }
      }
    }
  }
`
