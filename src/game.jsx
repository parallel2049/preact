import { h } from "preact";
import { useEffect, useRef, useState } from "preact/hooks";
import "./game_style.css";

const Game = () => {
    const sound = useRef(null);
    const firstRun = useRef(true);
    const lastIndex = useRef(0);
    const [soundLoaded, setSoundLoaded] = useState(false);

    useEffect(() => {
        const options = document.querySelectorAll(".picker-popup .selector .column .option");
        const column = document.querySelector(".picker-popup .selector .column");
        let isScrolling = false;

        function updateUI() {
            let centerY = window.innerHeight / 2;
            let minDiff = Infinity, closestIndex = -1;

            options.forEach((option, index) => {
                const rect = option.getBoundingClientRect();
                const optionCenter = rect.top + rect.height / 2;
                const diff = Math.abs(optionCenter - centerY);

                if (diff < minDiff) {
                    minDiff = diff;
                    closestIndex = index;
                }
            });

            options.forEach((option, index) => {
                const name = option.querySelector(".optionname");

                if (index === closestIndex) {
                    option.style.height = "28vh";
                    option.style.opacity = "1";
                    if (name) name.style.fontSize = "2.8vh";
                } else if (index === closestIndex - 1 || index === closestIndex + 1) {
                    option.style.height = "22vh";
                    option.style.opacity = "0.7";
                    if (name) name.style.fontSize = "2vh";
                } else {
                    option.style.height = "16vh";
                    option.style.opacity = "0.5";
                    if (name) name.style.fontSize = "1.6vh";
                }
            });


            if (closestIndex !== lastIndex.current) {
                lastIndex.current = closestIndex;
                if (!firstRun.current && sound.current && soundLoaded) {
                    sound.current.currentTime = 0;
                    sound.current.play().catch(err => console.log("Sound blocked:", err));
                }
            }

            firstRun.current = false; // first switch sound
            isScrolling = false;
        }

        function onScroll() {
            if (!isScrolling) {
                isScrolling = true;
                requestAnimationFrame(updateUI);
            }
        }

        if (column) {
            column.addEventListener("scroll", onScroll);
            column.addEventListener("touchmove", onScroll);
            column.addEventListener("wheel", onScroll);
            updateUI();
        }

        // first option
        setTimeout(() => {
            const firstOption = column.querySelector(".option");
            if (firstOption) {
                const top = firstOption.offsetTop;
                const columnHeight = column.clientHeight;
                const optionHeight = firstOption.clientHeight;
                column.scrollTop = top - (columnHeight / 2 - optionHeight / 2);
                updateUI();
            }
        }, 1);

        if (sound.current) {
            sound.current.oncanplaythrough = () => {
                setSoundLoaded(true);
            };
        }

        return () => {
            if (column) {
                column.removeEventListener("scroll", onScroll);
                column.removeEventListener("touchmove", onScroll);
                column.removeEventListener("wheel", onScroll);
            }
        };
    }, [soundLoaded]);


    return (
        <html>

        <body className="picker-popup">
            <audio ref={sound} id="switchsound" src="./public/sound_switch.mp3"></audio>

            {/*option list*/}
            <div className="selector">
                <div className="column">
                    <div className="before"></div>
                    <div className="option">
                        <div className="optionname">元首</div>
                        <img className="optionimg" src="./public/home_image_xitel.png"/>
                        <img className="optionimgbg" src="./public/home_image_xitelbg.png"/>
                    </div>
                    <div className="option">
                        <div className="optionname">慈父</div>
                        <img className="optionimg" src="./public/home_image_sdalin.png"/>
                        <img className="optionimgbg" src="./public/home_image_sdalinbg.png"/>
                    </div>
                    <div className="option">
                        <div className="optionname">太阳</div>
                        <img className="optionimg" src="./public/home_image_king.png"/>
                        <img className="optionimgbg" src="./public/home_image_kingbg.png"/>
                    </div>
                    <div className="option">
                        <div className="optionname">元首</div>
                        <img className="optionimg" src="./public/home_image_xitel.png"/>
                        <img className="optionimgbg" src="./public/home_image_xitelbg.png"/>
                    </div>
                    <div className="option">
                        <div className="optionname">慈父</div>
                        <img className="optionimg" src="./public/home_image_sdalin.png"/>
                        <img className="optionimgbg" src="./public/home_image_sdalinbg.png"/>
                    </div>
                    <div className="option">
                        <div className="optionname">太阳</div>
                        <img className="optionimg" src="./public/home_image_king.png"/>
                        <img className="optionimgbg" src="./public/home_image_kingbg.png"/>
                    </div>
                    <div className="option">
                        <div className="optionname">元首</div>
                        <img className="optionimg" src="./public/home_image_xitel.png"/>
                        <img className="optionimgbg" src="./public/home_image_xitelbg.png"/>
                    </div>
                    <div className="option">
                        <div className="optionname">慈父</div>
                        <img className="optionimg" src="./public/home_image_sdalin.png"/>
                        <img className="optionimgbg" src="./public/home_image_sdalinbg.png"/>
                    </div>
                    <div className="option">
                        <div className="optionname">太阳</div>
                        <img className="optionimg" src="./public/home_image_king.png"/>
                        <img className="optionimgbg" src="./public/home_image_kingbg.png"/>
                    </div>
                    <div className="after"></div>
                </div>
            </div>

            {/*star game button*/}
            <div className="footer">
                <button className="start-button" onClick={() => navigate("game", true)}>
                    <svg height="24" width="168" fill="none"
                         viewBox="0 0 173 26" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M18.0547 7.99999V5.42856V2.85713H15.4833V0.285706H12.9118H10.3404H7.76897H5.19755H2.62611V2.85713H0.0546875V5.42856V7.99999V10.5714V13.1428H2.62611V15.7143H5.19755H7.76897H10.3404H12.9118V18.2857V20.8571H10.3404H7.76897H5.19755V18.2857H2.62611H0.0546875V20.8571V23.4286H2.62611V26H5.19755H7.76897H10.3404H12.9118H15.4833V23.4286H18.0547V20.8571V18.2857V15.7143V13.1428H15.4833V10.5714H12.9118H10.3404H7.76897H5.19755V7.99999V5.42856H7.76897H10.3404H12.9118V7.99999H15.4833H18.0547ZM20.6328 0.285706H23.2042H25.7757H28.3471H30.9185H33.49H36.0614V2.85713V5.42856H33.49H30.9185V7.99999V10.5714V13.1428V15.7143V18.2857V20.8571V23.4286V26H28.3471H25.7757V23.4286V20.8571V18.2857V15.7143V13.1428V10.5714V7.99999V5.42856H23.2042H20.6328V2.85713V0.285706ZM46.3471 2.85713H43.7757V5.42856H41.2042V7.99999H38.6328V10.5714V13.1428V15.7143V18.2857V20.8571V23.4286V26H41.2042H43.7757V23.4286V20.8571H46.3471H48.9185H51.49V23.4286V26H54.0614H56.6328V23.4286V20.8571V18.2857V15.7143V13.1428V10.5714V7.99999H54.0614V5.42856H51.49V2.85713H48.9185V0.285706H46.3471V2.85713ZM46.3471 7.99999H48.9185V10.5714H51.49V13.1428V15.7143H48.9185H46.3471H43.7757V13.1428V10.5714H46.3471V7.99999ZM64.3538 13.1428H66.9252H69.4967H72.0681V10.5714V7.99999V5.42856H69.4967H66.9252H64.3538V7.99999V10.5714V13.1428ZM66.9252 18.2857H64.3538V20.8571V23.4286V26H61.7824H59.2109V23.4286V20.8571V18.2857V15.7143V13.1428V10.5714V7.99999V5.42856V2.85713V0.285706H61.7824H64.3538H66.9252H69.4967H72.0681H74.6395V2.85713H77.2109V5.42856V7.99999V10.5714V13.1428H74.6395V15.7143H77.2109V18.2857V20.8571V23.4286V26H74.6395H72.0681V23.4286V20.8571V18.2857H69.4967H66.9252ZM97.769 0.285706H95.1975H92.6261V2.85713H90.0547V5.42856V7.99999V10.5714V13.1428V15.7143V18.2857V20.8571V23.4286H92.6261V26H95.1975H97.769H100.34H102.912H105.483V23.4286H108.055V20.8571V18.2857V15.7143V13.1428V10.5714H105.483H102.912H100.34H97.769V13.1428V15.7143H100.34H102.912V18.2857V20.8571H100.34H97.769V18.2857H95.1975V15.7143V13.1428V10.5714V7.99999H97.769V5.42856H100.34H102.912V7.99999H105.483H108.055V5.42856V2.85713H105.483V0.285706H102.912H100.34H97.769ZM115.776 2.85713H118.347V0.285706H120.919V2.85713H123.49V5.42856H126.061V7.99999H128.633V10.5714V13.1428V15.7143V18.2857V20.8571V23.4286V26H126.061H123.49V23.4286V20.8571H120.919H118.347H115.776V23.4286V26H113.204H110.633V23.4286V20.8571V18.2857V15.7143V13.1428V10.5714V7.99999H113.204V5.42856H115.776V2.85713ZM120.919 7.99999H118.347V10.5714H115.776V13.1428V15.7143H118.347H120.919H123.49V13.1428V10.5714H120.919V7.99999ZM131.211 26H133.782H136.354V23.4286V20.8571V18.2857V15.7143V13.1428V10.5714H138.925V13.1428H141.497V15.7143H144.068V13.1428H146.64V10.5714H149.211V13.1428V15.7143V18.2857V20.8571V23.4286V26H151.782H154.354V23.4286V20.8571V18.2857V15.7143V13.1428V10.5714V7.99999V5.42856V2.85713V0.285706H151.782H149.211V2.85713H146.64V5.42856H144.068V7.99999H141.497V5.42856H138.925V2.85713H136.354V0.285706H133.782H131.211V2.85713V5.42856V7.99999V10.5714V13.1428V15.7143V18.2857V20.8571V23.4286V26ZM159.517 0.285706H156.945V2.85713V5.42856V7.99999V10.5714V13.1428V15.7143V18.2857V20.8571V23.4286V26H159.517H162.088H164.66H167.231H169.802H172.374V23.4286V20.8571H169.802H167.231H164.66H162.088V18.2857V15.7143H164.66H167.231H169.802V13.1428V10.5714H167.231H164.66H162.088V7.99999V5.42856H164.66H167.231H169.802H172.374V2.85713V0.285706H169.802H167.231H164.66H162.088H159.517Z"
                            fill="white" fillRule="evenodd"/>
                    </svg>
                </button>
            </div>
        </body>

        </html>
    );
};

export default Game;
