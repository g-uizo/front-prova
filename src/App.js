import { useState, useEffect } from "react";
import { produtoService } from "./services/produto";

function App() {
  const [lista, setLista] = useState([])

  useEffect(() => {
    const call = async () => {
      const ret = await produtoService.get()
      setLista(ret);
    }
    call();
  }, [])



  return (
  <main>
    <h1>Produtos</h1>
    <section>
      {lista ? lista.map((item, position) => (
        <h1 key={position}>{item.nome}</h1>
      )): (
        <p>Lista vazia</p>
      )}
    </section>
  </main>
  )
}

export default App;
