import React from "react";
import Layout from "../components/layout";

export default function Sac(){
    return(
        <Layout>
            <h3>Teve algum problema com nosso produto ou deseja deixar uma avaliação? Entre em Contato:</h3>
            <div className="container">
                <form name="form_estatico" method="post" data-netlify="true" data-netlify-honeypot="bot-field">
                <input type="hidden" name="form-name" value="form_estatico" />
                <label>
                    Nome
                    <input type="text" name="nome"/>
                </label>
                <label>
                    Email
                    <input type="email" name="email"/>
                </label>
                <label>
                    Telefone
                    <input type="text" name="telefone"/>
                </label>
                <label>
                    Assunto
                    <input type="text" name="assunto"/>
                </label>
                <label>
                    Mensagem
                    <textarea name="mensagem" rows="5"></textarea>
                </label>
                <input type="submit" value="Enviar" />
                <input type="reset" value="Limpar" />
                </form>
            </div>
        </Layout>
    )
}

export const Head = () => <title>Formulário SAC</title>;