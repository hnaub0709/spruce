import { BiUser } from "react-icons/bi";
import './App.css';
import LowerBody from "./LowerBody";



function App() {
  return (
  <><div className="App"> <br /> <br />
      <div className="container1">
        <h2 className="spruce">Spruce</h2>
        <BiUser className="icon" />
      </div> <br />
      <div className="container2">
        <h1 className="John">
          Morning, John! Take a <br /> peek at your recent <br /> money movememt.
        </h1>
      </div> <br />
      <section className="container3">
        <p>Your balance</p>
        <h4>$75.21</h4>
      </section>
      <hr className="tophr" />

    </div> <br /><LowerBody /></>
  
     
  );
}

export default App;
