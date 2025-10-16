import * as React from "react"

export default function Footer({copyrightYear}) {
  return (
    <p className="footer">
        © {copyrightYear} Estudos de Gatsby. Todos os direitos reservados.
      </p>
  )
}