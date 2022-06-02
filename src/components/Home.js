import Game from "./Game";

const Home = () => {
  let palDecodificada = [];
  const palabra = "JAVASCRIPT";

  for (let i = 0; i < palabra.length; i++) {
    palDecodificada.push("_");
  }

  return (
    <div>
      <Game palabra={palabra} palDecodificada={palDecodificada} />
    </div>
  );
};

export default Home;
