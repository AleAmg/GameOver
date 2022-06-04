import { useNavigate } from "react-router";

const Home = () => {
  const navigate = useNavigate();

    const handleSubmit = ()=>{
        navigate("/game")
    }
  return (
    <div>
      <button onClick={handleSubmit} >Jugar</button>
    </div>
  );
};

export default Home;
