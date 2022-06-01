import { useEffect, useState } from "react";
import useInput from "../hook/useInput";
const Game = () => {
  const world = useInput();

  const [index, setIndex] = useState([]);
  const [fail, setFail] = useState(0);
  const [palDecodificada, setPalDecodificada] = useState([]);

  const palabra = "GATAS";

  /* let palDecodificada = []; */

  const dec = () => {
    for (let i = 0; i < palabra.length; i++) {
      setPalDecodificada([...palDecodificada, "_"]);
      /* palDecodificada.push("_"); */
    }
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();
    let p = [];
    for (let i = 0; i < palabra.length; i++) {
      if (palabra[i] === world.value.toUpperCase()) {
        p.push(i);
      }
    }
    if (p.length === 0) {
      setFail(fail + 1);
    }
    setIndex(p);
  };

  console.log("Index", index);
  console.log("Fail", fail);
  console.log(palDecodificada);
  return (
    <div>
      <h1>
        {palDecodificada.map((pal, i) => {
          return <span key={i}>{pal} </span>;
        })}
      </h1>
      <form onSubmit={handleSubmit}>
        <input type="text" {...world} maxLength={1} required></input>
        <button>X</button>
      </form>
    </div>
  );
};

export default Game;
