import React from "react"; //Pega tudo que está dentro do módulo "React"
import Layout from "../components/layout";
import { useStaticQuery, graphql } from "gatsby";

export default function BlogPage () {

  const data = useStaticQuery(graphql`
    query {
      allFile {
        nodes {
          name
        }
      }
    }
  `)

  return (
    <Layout>
        <p>Esses são os últimos posts:</p>
        <ul>
          {
            data.allFile.nodes.map(item => (
              <li key={item.name}>
                {item.name}
              </li>
            ))
          }
        </ul>
    </Layout>

  )
}

export const Head = () => <title> Meu Blog - Posts</title>