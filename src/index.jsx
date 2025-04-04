import { h } from "preact";
import { useState } from "preact/hooks";
import Home from "./home.jsx";
import Game from "./game.jsx";

const App = () => {
    const [page, setPage] = useState("home");
    const [showGame, setShowGame] = useState(false);


    const navigate = (newPage, playSound = false) => {
        if (playSound) {
            const buttonSound = new Audio("./public/sound_stargame.mp3");
            buttonSound.play().catch(err => console.log("Button sound blocked:", err));
        }

        if (newPage === "game") {
            const overlay = document.querySelector(".overlay");
            console.log(overlay);
            if (overlay) {
                overlay.classList.add("active");
                console.log(overlay.classList.contains("active"));
                setTimeout(() => {
                    setPage("game");
                    setShowGame(true);

                    const bgm = new Audio("./public/sound_bgm.mp3");
                    bgm.loop = true;
                    bgm.play().catch(err => console.log("BGM autoplay blocked:", err));
                }, 1000);
            }
        } else {
            setPage("home");
            setShowGame(false);
        }
    };

    return (
        <div>
            {page === "home" && <Home navigate={navigate} />}
            {showGame && <Game />}
        </div>
    );
};

export default App;
