import React from "react"; //Pega tudo que está dentro do módulo "React"
import Layout from "../components/layout";
import { useStaticQuery, graphql, Link } from "gatsby";

export default function ProductPage () {

  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
          }
        id
        excerpt
        }
      }
    }
  `)

  const products = data.allMdx.nodes;

  return (
    <Layout>
        <h4>Confira nossos principais produtos</h4>
          {
            products.map(item => (
              <article key={item.id}>
                <h2>
                  <Link to={`/${item.frontmatter.slug}`}>
                    {item.frontmatter.title}
                  </Link>
                </h2>
                <p>{item.excerpt}</p>
              </article>
            ))
          }
    </Layout>
  )
}

export const Head = () => <title> Nossos produtos</title>