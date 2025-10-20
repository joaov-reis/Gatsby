import React from "react";
import Layout from "../components/layout";
import {useState} from "react";

export default function Pagina4(){

  const [inputs, setInputs] = useState({ nome: "", email: "", assunto: "", mensagem: "" });

  const handleChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({ ...values, [name]: value }));
  };

  const encode = (data) => {
    return Object.keys(data)
      .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
      .join("&");
  };

  const handleSubmit = event => {
    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "form_react", ...inputs })
    }).then(() => {
        alert("Em breve daremos um retorno do seu contato. Obrigado!");
        setInputs({ nome: "", email: "", assunto: "", mensagem: "" });
    }).catch(error => alert(error));
  };
}

export const Head = () => <title>Formulario React</title>;