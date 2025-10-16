import * as React from "react"
import { Link } from "gatsby"  //Pega tudosomente o elemento "link" que está dentro do módulo "gatsby"

export default function About() {
  return (
    <div>
      <h1>Sobre Esse Site</h1>
      <p>Estamos desenvolvendo estudos de Jamstack com Gatsby</p>
      <Link to="/">Home</Link> {/*Volta para a página principal*/}
    </div>
  )
}

export const Head = () => <title>Sobre</title>