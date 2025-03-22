import { useState } from "react"; /*Código criado pelo própio react para usar variáveis*/

const Varia = () => {
  /*Variáveis padrões do javascript*/
  let algo = 10;
  console.log("Valor inicial de: ", algo);

  /*Variáveis utilizando o hook usestate*/

  const [number, setNumber] =
    useState(7); /*Não é tipado, pode-se usar qualquer tipo de variável*/
  console.log("Minha variável number:", number);

  return (
    <div>
      <p>Minha variável: {algo}</p>
      <button
        onClick={() => {
          "Novo valor de algo: ", (algo = 20);
        }}
      >
        Alterar
      </button>{" "} {/*Ao clicar no  botão, o objeto algo vira 20*/}
      <hr />
      <p>Valor da variável number: {number}</p>
      <button onClick={() => {setNumber(number + 5)}}>Aumentar</button>

      <hr />
      <p>Diminui</p>
      <button onClick={() => {setNumber(number - 5)}}> Diminuir </button>{/*Ao clicar no botão, diminui 5*/}

      <hr />
      <p>Reseta</p>
      <button onClick={() => {setNumber(7)}}> Reset </button>{/*Ao clicar no botão, diminui tudo*/}
    </div>
  );
};

export default Varia;
