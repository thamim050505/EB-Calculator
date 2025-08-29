import React, { useState } from 'react'



function Calculator(){
  
      const [previous, setPrevious] = useState(null);
      const [current, setCurrent] = useState(null);
      const [result, setResult] = useState(null);

      const clearFields = () => {

setPrevious(null);
setCurrent(null);
setResult(null)
  };

     const CalculateBill = () =>{

        let prev = Number(previous);
      let curr = Number(current);

      if (prev === null || curr === null) {
          return alert("please enter valid readings.");
             
      }
      
      if (prev > curr) {
          return alert("previous unit must be smaller than than current unit")

      }
      let units = curr - prev;
      if (units <= 100) {
          setResult('Bill not generated for consumption up to 100 units.');
     return;
      }
      let cost = 0;
      if (units <= 500) {
          if (units > 400) cost += (units - 400) * 6;
          if (units > 200) cost += (Math.min(units, 400) - 200) * 4.5;
          if (units > 100) cost += (Math.min(units, 200) - 100) * 2.25;
      }
      else{
          if (units > 1000) cost += (units - 1000) * 11;
          if (units > 800) cost += (Math.min(units, 1000) - 800) * 10;
          if (units > 600) cost += (Math.min(units, 800) - 600) * 9;
          if (units > 500) cost += (Math.min(units, 600) - 500) * 8;
          cost += (Math.min(units, 500) - 400) * 6;
          cost += (Math.min(units, 400) - 100) * 4.5;
      }
      setResult(cost);
     };

     

  return (
       <div className='calwell'>
        <div className='head'>
            <h2 style={{paddingRight:`120px`,fontSize:`28px`}}>Electricity Bill Calculator</h2>
        <p>Use our interactive electricity bill calculator to get an accurate estimate of your monthly electricity costs. Simply input your usage details, and our calculator will do the rest. This tool helps you understand where your money is going and how you can start saving.</p>
       </div>
       <div className='calculator'>
       <h2 style={{fontSize:`28px`}}><b>EB Calculator</b></h2>
       <input type="number" placeholder='Previous Reading' value={previous} onChange={(e) => setPrevious(e.target.value)}/>
       <br />
       <input type="number" placeholder='Current Reading' value={current} onChange={(e) => setCurrent(e.target.value)}/>
       
       <div className='buttons'>
          <button onClick={CalculateBill} style={{color:`white`,backgroundColor:`black`}}>Calculate</button>
     </div>
     <div className='buttons'>
       <button onClick={clearFields}>Clear</button>
       </div>
       <div>
          {result !== null &&(
               <p className='result'>Total Electricity Bill:{" "}
                    {typeof result === "string" ? result : `₹${result.toFixed(2)}`}</p>)}
                    </div>
</div>
<div className='guidelines'>
     <h2>Guidelines</h2>
     <div className='guidepara'>
     <ul>
      <li>Put last month's reading as the previous reading.</li>
      <li>Check the current reading on your meter and put it in the current reading.</li>
      <li>This will only calculate for home use.</li>
     </ul>
     </div>
    </div>


       </div>

  );

}

export default Calculator;