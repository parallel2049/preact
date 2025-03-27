import { render } from 'preact';

import preactLogo from './assets/preact.svg';
import './style.css';

// chat
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
    const bgm = new Audio("/src/assets/sound_bgm.mp3");
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
      const startSound = new Audio("/src/assets/sound_stargame.mp3");
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

// chat



//
// export function App() {
// 	return (
// 		<div>
// 			<a href="https://preactjs.com" target="_blank">
// 				<img src={preactLogo} alt="Preact logo" height="160" width="160" />
// 			</a>
// 			<h1> Started buildvfbdf哈哈哈哈还是breact Apps </h1>
// 			<section>
// 				<Resource
// 					title="Learn Preact"
// 					description="If you're new to Preact, try the interactive tutorial to learn important concepts"
// 					href="https://preactjs.com/tutorial"
// 				/>
// 				<Resource
// 					title="Differences to React"
// 					description="If you're coming from React, you may want to check out our docs to see where Preact differs"
// 					href="https://preactjs.com/guide/v10/differences-to-react"
// 				/>
// 				<Resource
// 					title="Learn Vite"
// 					description="To learn more about Vite and how you can customize it to fit your needs, take a look at their excellent documentation"
// 					href="https://vitejs.dev"
// 				/>
// 			</section>
// 		</div>
// 	);
// }
//
// function Resource(props) {
// 	return (
// 		<a href={props.href} target="_blank" class="resource">
// 			<h2>{props.title}</h2>
// 			<p>{props.description}</p>
// 		</a>
// 	);
// }
//
// render(<App />, document.getElementById('app'));
