import React from "react"; //Pega tudo que está dentro do módulo "React"
import Layout from "../components/layout";
import { useStaticQuery, graphql, Link } from "gatsby";

export default function ProductsPage () {

  const data = useStaticQuery(graphql`
    query {
      allMdx {
        nodes {
          frontmatter {
            title
            slug
            hero_image_alt
            hero_image {
          childImageSharp {
            gatsbyImageData(
              width: 500
              height: 500
              placeholder: BLURRED
              formats: [AUTO, WEBP, AVIF]
            )
          }
        }
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