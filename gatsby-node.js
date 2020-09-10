const _ = require('lodash')
const path = require('path')
const { createFilePath } = require('gatsby-source-filesystem')
const { fmImagesToRelative } = require('gatsby-remark-relative-images')

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMarkdownRemark(limit: 1000) {
        edges {
          node {
            id
            fields {
              slug
            }
            frontmatter {
              tags
              templateKey
            }
          }
        }
      }
    }
  `).then((result) => {
    if (result.errors) {
      result.errors.forEach((e) => console.error(e.toString()))
      return Promise.reject(result.errors)
    }

    const posts = result.data.allMarkdownRemark.edges

    posts.forEach((edge) => {
      const id = edge.node.id
      createPage({
        path: edge.node.fields.slug,
        tags: edge.node.frontmatter.tags,
        component: path.resolve(
          `src/templates/${String(edge.node.frontmatter.templateKey)}.js`
        ),
        // additional data can be passed via context
        context: {
          id,
        },
      })
    })

    // Tag pages:
    let tags = []
    // Iterate through each post, putting all found tags into `tags`
    posts.forEach((edge) => {
      if (_.get(edge, `node.frontmatter.tags`)) {
        tags = tags.concat(edge.node.frontmatter.tags)
      }
    })
    // Eliminate duplicate tags
    tags = _.uniq(tags)

    // Make tag pages
    tags.forEach((tag) => {
      const tagPath = `/tags/${_.kebabCase(tag)}/`

      createPage({
        path: tagPath,
        component: path.resolve(`src/templates/tags.js`),
        context: {
          tag,
        },
      })
    })
  })
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  fmImagesToRelative(node) // convert image paths for gatsby images

  if (node.internal.type === `MarkdownRemark`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}
var s3 = require('s3');
var fs = require('fs');
try {
  var secrets = require('./secrets.json');
} catch(e) {
  console.error("Secrets-file not found. S3 deploy,emt disabled. " + e);
}

exports.onPostBuild = function(pages, callback) {
  // perform actions on pages here

  if (secrets && secrets.s3) {

    // Init S3 client
    var client = s3.createClient({
      s3RetryCount: 6,
      s3RetryDelay: 30,
      s3Options: {
        accessKeyId: secrets.s3.id,
        secretAccessKey: secrets.s3.secret,
        signatureVersion: 'v4',
        region: secrets.s3.region
      },
    });

    // Sync dir
    var params = {
      localDir: "public",
      deleteRemoved: true,
      s3Params: {
        Bucket: secrets.s3.bucket,
        Prefix: secrets.s3.remoteDir,
      },
    };
    var uploader = client.uploadDir(params);
    uploader.on('error', function(err) {
      console.error("unable to sync:", err.stack);
    });
    uploader.on('progress', function() {
      console.log("progress", uploader.progressAmount, uploader.progressTotal);
    });
    uploader.on('end', function() {
      console.log("done uploading");
    });

  }

  callback
}

