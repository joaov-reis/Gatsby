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
          <Link to="/produtos">Produtos</Link>
          <Link to="/sac">SAC</Link>
          <Link to="/reviews">Reviews</Link>
          <Link to="/pagina2">Dados Externos</Link>
        </nav>
      </div>
      <div className="main">
        {children}
      </div>
      <Footer copyrightYear={2025}/>
    </main>
  )
}