import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const padsArr = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

  const [power, setPower] = useState(true);
  const [bank, setBank] = useState(true);

  const clickHandler = (key: string) => {
    console.log(key);
  };
  const handleKeyDown = (event: KeyboardEvent) => {
    clickHandler(event.key);
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <>
      <div id="drum-machine">
        <div className="drums">
          {padsArr.map((item) => {
            return (
              <div onClick={() => clickHandler(item)} className="drum-pad">
                {item}
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
