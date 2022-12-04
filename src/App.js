import { BiUser } from "react-icons/bi";
import './App.css';
import LowerBody from "./LowerBody";
import Warning from "./Warning";
import {BsInfoCircle} from "react-icons/bs";




function App() {
  return (
  <><div className="App"> <br /> <br />
      <div className="container1">
        <h2 className="spruce">Spruce</h2>
        <BiUser className="icon" />
      </div> <br />
      <div className="container2">
        <h1 className="John">
          Evening, John! Take a <br /> peek at your recent <br /> money movememt.
        </h1>
      </div> <br />
      <section className="container3">
      
        <p className='container3txt'> <BsInfoCircle className="bscricle"/> Your Spending Account Balance</p>
        <h4 className='container3m' >$125.21</h4>
      </section>
      <hr className="tophr" />

    </div>
     <Warning/>
     <LowerBody /></>
  
     
  );
}

export default App;
