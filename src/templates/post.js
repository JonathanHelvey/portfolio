import { graphql } from "gatsby"

import React from "react"
import Layout from "../components/layout"

export default function Template({ data }) {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1 style={{ textAlign: 'center'}}>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
