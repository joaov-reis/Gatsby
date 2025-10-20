import React, { useState } from "react";
import Ufs from "../components/Ufs";
import Layout from "../components/layout";
import Municipios from "../components/Municipios";

export default function Pagina2(){
    const [opcaoUf, setOpcaoUf] = useState ({id: "", nome: ""});

    return(
        <Layout>
                <h3>Dados Externos</h3>
                <Ufs setOpcaoUf = {setOpcaoUf} />
                <Municipios uf = {opcaoUf.id} />
        </Layout>
    )
}