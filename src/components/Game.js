import { useState } from "react";
import useInput from "../hook/useInput";
const Game = ({ palabra, palDecodificada }) => {
  const world = useInput("world");

  const [fail, setFail] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let p = [];
    for (let i = 0; i < palabra.length; i++) {
      if (palabra[i] === world.value.toUpperCase()) {
        palDecodificada[i] = world.value.toUpperCase();
        p.push(i);
      }
    }
    if (p.length === 0) {
      setFail(fail + 1);
    }

    world.reset();
  };

  return (
    <div>
      <h1>{fail} errors</h1>
      <h1>
        {palDecodificada.map((pal, i) => {
          return <span key={i}>{pal} </span>;
        })}
      </h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name={world.name}
          value={world.value}
          onChange={world.handleChange}
          maxLength={1}
          required
        ></input>
        <button>X</button>
      </form>
    </div>
  );
};

export default Game;
