import * as React from "react" //Pega tudo que está dentro do módulo "React"
import Layout from "../components/layout"

export default function IndexPage () {
  return (
    <Layout title="Home Page">
      <h3>Bem vindo a Mati®</h3>
      <p>
        A Mati® acredita que os melhores dias começam com as melhores manhãs. Por isso desenvolvemos uma linha
        completa de produtos matinais saudáveis, naturais e nutritivos para oferecer leveza e equilíbrio no seu
        cotidiano. Nosso compromisso vai além do sabor: buscamos promover o bem-estar e incentivar um estilo de
        vida mais saudável e sustentável, sem comprometer o sabor. Trabalhamos com fornecedores responsáveis,
        priorizamos processos de produção que respeitam o meio ambiente e garantimos a qualidade que você e sua
        família merecem.
      </p>
      <h4>
        Inspirando você a transformar cada manhã em uma oportunidade de cuidar do corpo, da mente e do planeta.
      </h4>
    </Layout>
  )
}

export const Head = () => <title>Pagina inicial</title>