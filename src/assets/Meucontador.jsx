import { useState } from "react";

export default function Meucontador() {
  const [contador, setContador] = useState(0);

  function dobrar() {
    setContador(contador * 2);
  }

  function aumentar() {
    setContador(contador + 1);
  }

  function diminuir() {
    setContador(contador - 1);
  }
  function zerar() {
    setContador(contador - contador);
  }

  return (
    <div>
      <h1>Meu Contador</h1>
      {contador > 100 ? <h2>então ta amigao tu passou do 100</h2> : null}
      {contador > 1000 ? <h2>então ta amigao tu passou do 1000</h2> : null}
      {contador > 10000 ? <h2>então ta amigao tu passou do 10000</h2> : null}

      <h3>{contador}</h3>
      <button onClick={aumentar}>aumentar</button>
      <button onClick={diminuir}>diminuir</button>
      <button onClick={dobrar}>dobrar</button>
      <button onClick={zerar}>zerar</button>
    </div>
  );
}
