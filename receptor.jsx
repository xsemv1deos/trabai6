import { useEffect, useState } from "react";
import { subscribe } from "./eventBus";

function Receptor() {

  const [mensagem, setMensagem] = useState(
    "Esperando mensagem..."
  );

  useEffect(() => {

    const unsubscribe = subscribe("mensagem", (data) => {
      setMensagem(data);
    });

    return () => unsubscribe();

  }, []);

  return (
    <div>
      <h2>Receptor</h2>
      <p>{mensagem}</p>
    </div>
  );
}

export default Receptor;
