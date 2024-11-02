import logo from '../img/zambiank-ciano.png';
import '../css/Preload.css';

function Preload() {
  return (
    <div className="Preload-header">
      <img src={logo} className="App-logo" alt="logo" />
      <div className="effectContainer">
        <h4 className="text-effect">
          A melhor ferramenta para sua empresa.
        </h4>
      </div>

      <p className="txt-footer">
        From <strong>Zambiank, inc.</strong>
      </p>

    </div>
  );
}

export default Preload;