import React from "react";

const Events = () => {
  const teste = (e) => {
    // e = a propriedades do evento que chamou a função
    console.log(e);

    console.log("Testei a função exerna");
  };

  return (
    <div>
      <button
        onClick={() => {
          console.log("Testei o primeiro botton ;)");
        }}
      >
        {" "}
        Cli k aqui{" "}
      </button>
      <br />
      <button onClick={teste}>Cli k 2</button>
    </div>
  );
};

export default Events;
