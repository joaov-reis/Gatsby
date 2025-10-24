import React from 'react';
import { graphql } from "gatsby"
import Layout from '../components/layout';

export default function BlogPost ({ data, children }) {
  
  return (
    <Layout>
      <h2>{data.mdx.frontmatter.title}</h2>
      <p>Data: {data.mdx.frontmatter.date}</p>
      {children}
    </Layout>
  )
}

export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      frontmatter {
        title
        date(formatString: "DD/MM/YYYY")
      }
    }
  }
`