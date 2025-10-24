import * as React from "react"
import "./layout.css"
import Footer from "./footer.js"
import { Link, useStaticQuery, graphql } from "gatsby"

export default function Layout({children}) { //Desestruturação de objeto

  const data = useStaticQuery (graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
    `);

  return (
    <main className="layout">
      <div className="header">
        <h3>{data.site.siteMetadata.title}</h3>
        <nav className="topnav">
          <Link to="/">Início</Link>
          <Link to="/blog">Blog</Link>
          
          <Link to="/pagina1">Formulario Netlify</Link>
          <Link to="/pagina4">Formulario React</Link>

          <Link to="/pagina2">Dados Externos</Link>
          <Link to="/pagina3">Dados Internos</Link>
        </nav>
      </div>
      <div className="main">
        {children}
      </div>
      <Footer copyrightYear={2025}/>
    </main>
  )
}