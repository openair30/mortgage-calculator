import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [principle, setPrinciple] = useState(0);
  const [interest, setInterest] = useState(0);
  const [years, setYears] = useState(0);
  const [emi, setEMI] = useState(0);

  const handleChange = (e) => {
    console.log(e.target.id, e.target.value);
    const id = e.target.id;
    const value = parseInt(e.target.value);
    if(id === 'principle'){
      setPrinciple(value);
    } else if(id === 'interest'){
      setInterest(value);
    } else {
      setYears(value);
    }
  }

  // P(r(1+r)^n/((1+r)^n)-1))
  const calculateEMI = () => {
    let p = principle;
    let r = interest;
    let n = years;
    if(p && r && n){
      r = r / 12 / 100;
      const calcPow = Math.pow(1+r, n*12);
      const amount = p * ((r * calcPow)/(calcPow - 1));
      setEMI(Math.round(amount));
    }
  }


  return (
    <div className="App">
      <h2>Mortgage Calculator</h2>
      <div className='inputs'>
        <p>Principle:</p>
        <input onChange={handleChange} type='number' id='principle' />

        <p>Interest:</p>
        <input onChange={handleChange} type='number' id='interest' />

        <p>Years:</p>
        <input onChange={handleChange} type='number' id='year' />
      </div>
      <button onClick={calculateEMI}>Calculate</button>
      <div className='output'>
        Your EMI is {emi}
      </div>
    </div>
  );
}

export default App;
