import { useState } from "react";
import { useNavigate } from "react-router";
import useInput from "../hook/useInput";
import FailMan from "./FailMan";
import { TbSend } from "react-icons/tb";

const Game = ({ palabra, palCodificada }) => {
  const navigate = useNavigate();
  const world = useInput("world");

  const [fail, setFail] = useState(0);
  const [letterErr, setLetterErr] = useState([]);

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
      setLetterErr([...letterErr, world.value.toUpperCase()]);
    }

    world.reset();
  };

  const win = palCodificada.filter((world) => {
    return world === "_";
  });

  return (
    <div className="conteiner game">
      <div className="errs">
        <FailMan fail={fail} />
        {fail > 0 && (
          <h1 className="letterErr">
            {" "}
            {letterErr.map((letterErr, i) => {
              return <span key={i}>{letterErr}-</span>;
            })}
          </h1>
        )}
      </div>
      {fail === 6 && (
        <>
          <h1>GameOver</h1>
          <h2>{palabra}</h2>{" "}
        </>
      )}
      {win.length === 0 && <h1>Winner</h1>}
      <h1>
        {palCodificada.map((pal, i) => {
          return <span key={i}>{pal} </span>;
        })}
      </h1>
      {fail < 6 && win.length !== 0 && (
        <form onSubmit={handleSubmit}>
          <input
            className="input_game"
            type="text"
            name={world.name}
            value={world.value}
            onChange={world.handleChange}
            maxLength={1}
            required
          ></input>
          <button className="sendLetters">
            {" "}
            <TbSend />{" "}
          </button>
        </form>
      )}

      {(fail === 6 || win.length === 0) && (
        <>
          <button
            className="buttonEndGame"
            onClick={() => {
              navigate("/");
            }}
          >
            Main menu
          </button>
          {/* <button
            className="buttonEndGame"
            onClick={() => {
              window.location.reload();
            }}
          >
            Play again
          </button> */}
        </>
      )}
    </div>
  );
};

export default Game;
