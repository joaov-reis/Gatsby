import * as React from "react" //Pega tudo que está dentro do módulo "React"
import { Link } from "gatsby"  //Pega tudosomente o elemento "link" que está dentro do módulo "gatsby"
import Layout from "../components/layout"

export default function IndexPage () {
  return (
    <Layout title="Home Page">
      <h3>Olá Mundo Gatsby!</h3>
      <p>primeiro paragrafo</p>
      <p>segundo paragrafo</p>
      <Link to="/about">Sobre</Link>
    </Layout>
  )
}

export const Head = () => <title>Pagina inicial</title>