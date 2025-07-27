// import React, { useCallback, useEffect, useMemo, useState } from "react";
// import { Child } from "./Child";

import ToolKit from "./ToolKit";
import useWindow from "./useWindow.jsx";


const App = () => {
  // const [counter, setCounter] = useState(0);
  // const [number, setNumber] = useState("");

  // var result = useMemo(() => {
  //   console.log("Power has been calculated");
  //   return Math.pow(number, 3);
  // },[number]);

  // const countFunction = () => {
  //   setCounter((prev) => prev + 1);
  // };


  // const HandleOnclick = useCallback(()=>{
  //   console.log("Child render after click")
  // },[])

const width=useWindow()

  return (
    <div>
    {/* //   <input
    //     type="text"
    //     value={number}
    //     onChange={(e) => setNumber(e.target.value)}
    //   />
    //   <br />
    //   <h1>Result :{result}</h1>
    //   <br />
    //   <button onClick={countFunction}>Counter ++</button>
    //   <br />
    //   <h1>Counter :{counter}</h1>

    //   <Child onclick={HandleOnclick}/> */}
    <ToolKit/>
        {width}
    </div>

  );
};

export default App;
