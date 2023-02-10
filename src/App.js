import './App.css';
import Homepage from './components/Homepage';
import Introducing from './components/Introducing';
import "./styles/homepagestyles.css";
import Deals from "./components/Deals";
import Endtime from "./components/Endtime";
import Offers from "./components/Offers";


function App() {
  return (
    <div>
      <Homepage />
      <Introducing />
    <div className="card text-center">
      <div className="card-body row"> 
          <div className="col-md-6">
            <Deals />
          </div>
          <div className="col-md-6">
            <Endtime />
          </div>
      </div>
      <div className="card-footer text-muted">
        <Offers />
      </div>
    </div>
    </div>
  );
}

export default App;
