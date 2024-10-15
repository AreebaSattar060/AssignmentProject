import React, { useState } from "react";
import Button from "../components/button";

function AddButton() {
  const [data, setData] = useState([]);

  function newButton() {
    setData([...data, data.length + 1]);
  }

  function alerts(i) {
    if (i === 0) {
      one();
    } else if (i === 1) {
      two();
    } else {
      alert(i);
    }
  }

  function one() {
    alert("We are calling function 1");
  }
  function two() {
    alert("We are calling function 2");
  }

  return (
    <div>
      <div className="h-20 w-20 ms-14 mt-14">
        <Button text="+" onClick={newButton} />
      </div>
      {data.map((item, index) => (
        <div className="h-20 w-20 ms-14">
          <Button text={index + 1} onClick={() => alerts(index)} />
        </div>
      ))}
    </div>
  );
}

export default AddButton;
