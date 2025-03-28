import { h } from "preact";
import { useState, useEffect } from "preact/hooks";
import "./style.css";

const Home = ({ navigate }) => (
  <div>
    <h1>Home</h1>
    <button onClick={() => navigate("game", true)}>Go to Game</button>
  </div>
);

const Game = ({ navigate }) => {
  useEffect(() => {
    const bgm = new Audio("public/sound_bgm.mp3");
    bgm.loop = true;
    bgm.play().catch(err => console.log("BGM autoplay blocked:", err));

    return () => {
      bgm.pause();
      bgm.currentTime = 0;
    };
  }, []);

  return (
    <div>
      <h1>Game</h1>
      <button onClick={() => navigate("home")}>Go to Home</button>
    </div>
  );
};

const App = () => {
  const [page, setPage] = useState("home");

  const navigate = (newPage, playSound = false) => {
    if (playSound) {
      const startSound = new Audio("public/sound_stargame.mp3");
      startSound.play().catch(err => console.log("Start sound blocked:", err));
    }
    setPage(newPage);
  };

  return (
    <div>
      {page === "home" && <Home navigate={navigate} />}
      {page === "game" && <Game navigate={navigate} />}
    </div>
  );
};

export default App;
