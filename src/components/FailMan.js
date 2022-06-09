import Defeat0 from "./../assets/Defeat0.png";
import Defeat1 from "./../assets/Defeat1.png";
import Defeat2 from "./../assets/Defeat2.png";
import Defeat3 from "./../assets/Defeat3.png";
import Defeat4 from "./../assets/Defeat4.png";
import Defeat5 from "./../assets/Defeat5.png";
import Defeat6 from "./../assets/Defeat6.png";

const FailMan = ({ fail }) => {
    
  let img = Defeat0;

  if (fail === 1) {
    img = Defeat1;
  } else if (fail === 2) {
    img = Defeat2;
  } else if (fail === 3) {
    img = Defeat3;
  } else if (fail === 4) {
    img = Defeat4;
  } else if (fail === 5) {
    img = Defeat5;
  } else if (fail === 6) {
    img = Defeat6;
  }

  return (
    <div className="imageErr">
      <img className="image" src={img} alt="Defeat0"></img>
    </div>
  );
};
export default FailMan;
