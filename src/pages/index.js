import * as React from "react" //Pega tudo que está dentro do módulo "React"
import Layout from "../components/layout"

export default function IndexPage () {
  return (
    <Layout title="Home Page">
      <h3>Olá Mundo Gatsby!</h3>
      <p>primeiro paragrafo</p>
      <p>segundo paragrafo</p>
    </Layout>
  )
}

export const Head = () => <title>Pagina inicial</title>