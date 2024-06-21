import React, { useState } from "react";
import { produtoService } from "./produto";
const create = () => { 
    const [nome, setNome] = useState("");
    const call = async () => {
        await produtoService.post({nome});
    }
    
    return <main>create
    <form onSubmit={(evento) => {
        evento.preventDefault();
call();
    }}>
<input name="nome" id="nome" type="text" value={nome} onChange={ (evento) => {
setNome(evento.target.value);
}}/>
<button type="submit">enviar</button>
    </form>


    </main>
};

export default create;