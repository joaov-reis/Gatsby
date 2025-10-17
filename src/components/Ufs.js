import * as React from "react"
import { useState, useEffect } from "react"

export default function Ufs(){
    
    const [options, setOptions] = useState([]); //iniciando com um array vazio
    
    useEffect(() => {
        const opt = [{id: "", nome: "Selecione..."}];
        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados?orderBy=nome")
        .then(results => results.json())
        .then(data => {
            data.array.forEach(uf => {
                opt.push({id: uf.id, nome: uf.nome});
            });
            setOptions(opt);
        })
    }, []);//array com o que queremos monitorar

    return(
        <select name="uf">
            {options.map(estado => {
                return(
                    <option key={estado.id} value={estado.id}>
                        {estado.nome}
                    </option>
                )
            })}      
        </select>
    )
}