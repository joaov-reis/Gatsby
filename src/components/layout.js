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
        <h1>{data.site.siteMetadata.title}</h1>
        <nav className="topnav">
          <Link to="/">Início</Link>
          <Link to="/produtos">Produtos</Link>
          <Link to="/sac">SAC</Link>
          <Link to="/reviews">Reviews</Link>
        </nav>
      </div>
      <div className="main">
        {children}
      </div>
      <Footer copyrightYear={2025}/>
    </main>
  )
}