import { useState } from "react";
import MonitorarProp from "./MonitorarProp";

function App() {
  const [nome, setNome] = useState("João");

  return (
    <div>
      <MonitorarProp nome={nome} />

      <button onClick={() => setNome("Maria")}>
        Alterar nome
      </button>
    </div>
  );
}

export default App;
