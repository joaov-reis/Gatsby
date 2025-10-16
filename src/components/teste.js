import * as React from "react" //Pega tudo que está dentro do módulo "React"

export default function Teste(props){
    return (
        <div>
            <h1>Seja bem vindo, {props.nome}</h1>
        </div>
    )
}