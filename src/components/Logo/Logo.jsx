import Tilt from "react-parallax-tilt";
import mask from "./icons8-anonymous-mask-512.png";

const Logo = () => {
  return (
    <div className="flex justify-center mb-8">
      <Tilt className="h-40 w-40 bg-indigo-500 rounded-lg shadow-[-10px_-10px_30px_4px_rgba(0,0,0,0.1),_10px_10px_30px_4px_rgba(45,78,255,0.15)]">
        <div>
          <img alt="logo" src={mask} draggable="false" />
        </div>
      </Tilt>
    </div>
  );
};

export default Logo;
