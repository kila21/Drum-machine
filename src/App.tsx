import "./App.css";

function App() {
  const padsArr = ["Q", "W", "E", "A", "S", "D", "Z", "X", "C"];

  return (
    <>
      <div id="drum-machine">
        <div className="drums">
          {padsArr.map((item) => {
            return <div className="drum-pad">{item}</div>;
          })}
        </div>

        <div className="controls">
          <div className="power">
            <p>Power</p>
            <div className="select">
              <div className="power-turn"></div>
            </div>
          </div>
          <div id="display">chord</div>
          <div className="volume-slider">
            <input type="range" min={0} max={1} step={0.01} />
          </div>
          <div className="bank">
            <p>Bank</p>
            <div className="select">
              <div className="power-turn"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
