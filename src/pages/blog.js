import React from "react"
import { Link, graphql } from "gatsby"


import Layout from "../components/layout"
import SEO from "../components/seo"

import "../style/main.scss"

class BlogIndex extends React.Component {
  render() {
    const { data } = this.props
    const siteTitle = data.site.siteMetadata.title
    const posts = data.allMarkdownRemark.edges

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Blog" />
        
<div className='hero-page'>
  <div className="flex">
    <div className="col-7 " style={{margin: "0 auto"}}>    
      <h1 className="align-center">Blog</h1>     
      <h2 className="align-center">Learn about our web design and development process </h2> 
    </div>   
  </div>  
  </div>
  
  <div className="flex blog-wrap" >
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <article  className="col-5 blog-article" key={node.fields.slug}>
              
         
                <h3 >
                  <Link className="secondary-color" style={{padding: "5px"}}  to={node.fields.slug}>
                    {title}
                  </Link>
                </h3>            
            
              <div>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.description || node.excerpt,
                  }}
                />
               
              </div>
              <div>
                <p
                  dangerouslySetInnerHTML={{
                    __html: node.frontmatter.country || node.excerpt,
                  }}
                />
               
              </div>
              <Link  to={node.fields.slug}>
                    Read More
                  </Link>
            </article>
          )
        })}</div>
      </Layout>
    )
  }
}

export default BlogIndex

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: {  order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            
            title
            description
            country
          }
        }
      }
    }
  }
`
