import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
let i = 0;
let inp = "";
let count = 0;

function App() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // Set up a timer to increment the seconds count every second
    const timerId = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    // Clean up the timer on component unmount
    return () => clearInterval(timerId);
  }, []);

  const [firstName, setFirstName] = useState('');
  const [color, setColor] = useState('black'); 
  let backspace = false;
  var name = "First Name last name is the best thing to ever do it yes";

  const handleChange = (e) =>{
    const input = e.target.value;
    setFirstName(input);
    inp = input;
    // Check if the last character is the one you're looking for
    console.log(input[i]," ",backspace," ",i," ",name[i])
    if(backspace == false){
      if (input[i] === name[i] && color != 'red'  ) {
        setColor('green');
        i+=1;
        count++;
      }else{
        setColor('red');
        i+=1;
      }
    }else{
      if (input== name.slice(0,i)) {
        setColor('green');
      }
    }
    

  };
  const handleKeyDown = (e) => {
    if (e.key == 'Backspace' && i !=0) {
      backspace = true;
      i-=1;
    }    
  };
  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">

      <label>
      First Name last name is the best thing to ever do it yes:
        <input value={firstName}  onKeyDown={handleKeyDown} onChange={handleChange} style={{color:color}} />
      </label>

        <button>
          
          count is { Math.round((count/5)/(seconds/60) * 100)/100}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
