import React from "react"; //Pega tudo que está dentro do módulo "React"
import Layout from "../components/layout";
import { useStaticQuery, graphql, Link } from "gatsby";

export default function ProductPage () {

  const data = useStaticQuery(graphql`
    query {
      allMdx (sort: {frontmatter: {date: DESC}}){
        nodes {
          frontmatter {
            date (formatString: "DD/MM/YYYY")
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
        <p>Esses são os últimos posts:</p>
          {
            products.map(item => (
              <article key={item.id}>
                <h2>
                  <Link to={`/${item.frontmatter.slug}`}>
                    {item.frontmatter.title}
                  </Link>
                </h2>
                <p>Posted: {item.frontmatter.date}</p>
                <p>{item.excerpt}</p>
              </article>
            ))
          }
    </Layout>
  )
}

export const Head = () => <title> Nossos produtos</title>