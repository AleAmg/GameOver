import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

    const handleSubmit = ()=>{
        navigate("/game")
    }
  return (
    <div className="inicio conteiner">
      <h1>GameOver</h1>
      <h5>Hangman game</h5>
      <button onClick={handleSubmit} >Play</button>
    </div>
  );
};

export default Home;
