import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const padsArr = ["q", "w", "e", "a", "s", "d", "z", "x", "c"];

  const [power, setPower] = useState(true);
  const [bank, setBank] = useState(true);

  const clickHandler = (key: string) => {
    const audioElement = document.getElementById(
      key
    ) as HTMLAudioElement | null;
    switch (key) {
      case "q":
        if (audioElement) {
          audioElement.src =
            "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3";
          audioElement.play();
        }
        break;
      case "w":
        if (audioElement) {
          audioElement.src =
            "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3";
          audioElement.play();
        }
        break;
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    clickHandler(event.key);
  };

  useEffect(() => {
    if (power) {
      document.addEventListener("keydown", handleKeyDown);
    } else {
      document.removeEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [power]);

  return (
    <>
      <div id="drum-machine">
        <div className="drums">
          {padsArr.map((item) => {
            return (
              <div onClick={() => clickHandler(item)} className="drum-pad">
                {item}
                <audio id={item}></audio>
              </div>
            );
          })}
        </div>

        <div className="controls">
          <div className="power">
            <p>Power</p>
            <div className="select">
              <div
                onClick={() => setPower(!power)}
                className={power ? "power-turn" : "power-turn power-turn-off"}
              ></div>
            </div>
          </div>
          <div id="display">chord</div>
          <div className="volume-slider">
            <input type="range" min={0} max={1} step={0.01} />
          </div>
          <div className="bank">
            <p>Bank</p>
            <div className="select">
              <div
                onClick={() => setBank(!bank)}
                className={bank ? "power-turn" : "power-turn power-turn-off"}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
