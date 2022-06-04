import Game from "./Game";
import worlds from "./../worlds.json";

const Game1 = () => {
  let palCodificada = [];

  const number = Math.floor(Math.random() * (50 - 0)) + 0;

  const world = worlds.worlds[number];

  for (let i = 0; i < world.length; i++) {
    palCodificada.push("_");
  }

  return (
    <div>
      <Game palabra={world} palCodificada={palCodificada} />
    </div>
  );
};

export default Game1;
