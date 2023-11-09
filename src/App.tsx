import { useState, useEffect } from "react";
import "./App.css";

function App() {
  const padsArr = ["q", "w", "e", "a", "s", "d", "z", "x", "c"];

  const [volume, setVolume] = useState(0.5);
  const [text, setText] = useState("");
  const [power, setPower] = useState(true);

  const clickHandler = (key: string) => {
    if (power) {
      const audioElement = document.getElementById(
        key
      ) as HTMLAudioElement | null;
      switch (key) {
        case "q":
          if (audioElement) {
            setText("Heater-1");
            audioElement.volume = volume;
            audioElement.src =
              "https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3";
            audioElement.play();
          }
          break;
        case "w":
          if (audioElement) {
            setText("Heater-2");
            audioElement.volume = volume;
            audioElement.src =
              "https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3";
            audioElement.play();
          }
          break;
        case "e":
          if (audioElement) {
            setText("Heater-3");
            audioElement.volume = volume;
            audioElement.src =
              "https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3";
            audioElement.play();
          }
          break;
        case "a":
          if (audioElement) {
            setText("Heater-4");
            audioElement.volume = volume;
            audioElement.src =
              "https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3";
            audioElement.play();
          }
          break;
        case "s":
          if (audioElement) {
            setText("Clap");
            audioElement.volume = volume;
            audioElement.src =
              "https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3";
            audioElement.play();
          }
          break;
        case "d":
          if (audioElement) {
            setText("Open HH");
            audioElement.volume = volume;
            audioElement.src =
              "https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3";
            audioElement.play();
          }
          break;
        case "z":
          if (audioElement) {
            setText("Kick n' Hat");
            audioElement.volume = volume;
            audioElement.src =
              "https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3";
            audioElement.play();
          }
          break;
        case "x":
          if (audioElement) {
            setText("Kick");
            audioElement.volume = volume;
            audioElement.src =
              "https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3";
            audioElement.play();
          }
          break;
        case "c":
          if (audioElement) {
            setText("Closed HH");
            audioElement.volume = volume;
            audioElement.src =
              "https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3";
            audioElement.play();
          }
          break;
      }
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    clickHandler(event.key);
  };

  const updateVolume = (val: string) => {
    setVolume(+val);
    setText(`Volume: ${Math.round(volume * 100)}`);
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
                <audio id={item} />
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
          <div id="display">{text}</div>
          <div className="volume-slider">
            <input
              type="range"
              min={0}
              max={1}
              step="0.01"
              value={volume}
              onChange={(e) => updateVolume(e.target.value)}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
