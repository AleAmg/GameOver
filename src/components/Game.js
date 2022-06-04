import { useState } from "react";
import { useNavigate } from "react-router";
import useInput from "../hook/useInput";
import FailMan from "./FailMan";

const Game = ({ palabra, palCodificada }) => {
  const navigate = useNavigate();
  const world = useInput("world");

  const [fail, setFail] = useState(0);

  const handleSubmit = (e) => {
    e.preventDefault();
    let p = [];
    for (let i = 0; i < palabra.length; i++) {
      if (palabra[i] === world.value.toUpperCase()) {
        palCodificada[i] = world.value.toUpperCase();
        p.push(i);
      }
    }

    if (p.length === 0) {
      setFail(fail + 1);
    }

    world.reset();
  };

  const win = palCodificada.filter((world) => {
    return world === "_";
  });

  return (
    <div>
      <FailMan fail={fail} />
      {fail === 6 && <h1>GameOver</h1>}
      {win.length === 0 && <h1>Winer</h1>}
      <h1>
        {palCodificada.map((pal, i) => {
          return <span key={i}>{pal} </span>;
        })}
      </h1>
      {fail < 6 && win.length !== 0 && (
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
      )}

      {(fail === 6 || win.length === 0) && (
        <>
          <button
            onClick={() => {
              navigate("/")
            }}
          >
            Main menu
          </button>
          <button
            onClick={() => {
              window.location.reload();
            }}
          >
            Play again
          </button>
        </>
      )}
    </div>
  );
};

export default Game;
