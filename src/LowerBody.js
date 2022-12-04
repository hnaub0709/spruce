import React from "react";
import { RiMoneyDollarCircleLine } from "react-icons/ri";
import {TfiMoney} from "react-icons/tfi"
import {GrTransaction} from "react-icons/gr";
import {FaGreaterThan} from "react-icons/fa";
import "./LowerBody.css";

function LowerBody() {
  return (
    <div className="lbody1">
      <div className="money-in">
        <h1 className="moneyin">Money In <br /><p className="span1">Recent transactions <GrTransaction className="transact"/></p>  </h1>
        
        <section className="ach-2">
        <div>
        <TfiMoney className="naked-dollar"/>
        </div>
        <div>
            <h4 className="achcredit">Chase *7433</h4>
            <p className="date">December 2, 2022</p>
        </div>
        <p className="amount-3">+$50</p>
      </section>

      <hr />

      </div>
      <section className="ach">
        <div className="d">
          <RiMoneyDollarCircleLine className="dollar" />
        </div>

        
        <div>
        <h4 className="achcredit">ACH Credit</h4> 
          <p className="date">September 14, 2022</p>
        </div>

        <p className="amount"> +$4,375</p>
      </section> 
      <hr /> 

      <section className="ach-2">
        <div>
        <TfiMoney className="naked-dollar"/>
        </div>
        <div>
            <h4 className="achcredit">Chase *7433</h4>
            <p className="date">October 28, 2022</p>
        </div>
        <p className="amount-1">+$632</p>
      </section>
      <hr /> 
      <section>

        <div>
            <h3 className="spend">
                View Spending Account  <h3 className="fa"><FaGreaterThan/></h3> 
            </h3>
        </div>
      </section>
    </div>
  );
}

export default LowerBody;
