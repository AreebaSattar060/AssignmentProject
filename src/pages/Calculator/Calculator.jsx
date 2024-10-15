import React, { useEffect, useState } from "react";
import Fields from "../../components/fields";
import CButtons from "../../components/cButtons";
function Calculator() {
  const [value, setValue] = useState("");
  const [history, setHistory] = useState([])

  useEffect(()=>{
const storedHistory = JSON.parse(localStorage.getItem("calcHistory"))|| [];
setHistory(storedHistory);
  },[]);

  function handleClick(e) {
    setValue(value + e.target.value);
  }

  function handleAction() {
    try {
      const result = eval(value);
      setValue(result.toString());


      const newHistory = [...history, `${value}=${result}`];
      setHistory(newHistory);
      localStorage.setItem("calcHistory", JSON.stringify(newHistory));

    } catch {
      setValue("Error");
    }
  }

  function handleClear() {
    setValue("");
  }

  function handleClearHistory(){
    localStorage.removeItem("calcHistory");
    setHistory([]);
  }

  return (
    <div>
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 mx-auto mt-14">
        <Fields value={value} />
        <div className="ms-8 mt-8 grid grid-cols-4 gap-2">
          <CButtons text="0" onClick={handleClick} />
          <CButtons text="1" onClick={handleClick} />
          <CButtons text="2" onClick={handleClick} />
          <CButtons text="3" onClick={handleClick} />
          <CButtons text="4" onClick={handleClick} />
          <CButtons text="5" onClick={handleClick} />
          <CButtons text="6" onClick={handleClick} />
          <CButtons text="7" onClick={handleClick} />
          <CButtons text="8" onClick={handleClick} />
          <CButtons text="9" onClick={handleClick} />
          <CButtons text="+" onClick={handleClick} />
          <CButtons text="-" onClick={handleClick} />
          <CButtons text="*" onClick={handleClick} />
          <CButtons text="/" onClick={handleClick} />
          <CButtons text="=" onClick={handleAction} />
          <CButtons text="C" onClick={handleClear} />
        </div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-lg w-80 mx-auto mt-14">
        <h1 className="font-bold text-slate-500">History</h1>
        <ul>
          {history.length>0 ? (
          history.map((item)=>(
            <li>
              {item}
            </li>
          )
        )) :
        (
          <li>No history</li>
        )
        }
        </ul>
        <cButton text="Show History" onClick={handleClearHistory}/>
        <button className="bg-slate-400 mt-4 rounded-lg text-white h-auto w-2/6" onClick={handleClearHistory}>Clear History</button>
        </div>

    </div>
  );
}

export default Calculator;
