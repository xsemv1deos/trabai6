import { useEffect } from "react";

function MonitorarProp({ nome }) {

  useEffect(() => {
    console.log("O nome atual é:", nome);
  }, [nome]);

  return <h2>Nome: {nome}</h2>;
}

export default MonitorarProp;
