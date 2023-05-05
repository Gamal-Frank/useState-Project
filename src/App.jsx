import { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(10);
  function add(){
    setCounter(counter+1)
  }

  return ( 
    <div className="flex justify-center items-center flex-col">
    <div className=" bg-slate-400 h-5 w-10 flex justify-center items-center rounded-md">
      {counter}
    </div>
    <button onClick={add} className=" bg-slate-300 m-5 w-20 rounded-lg">add</button>
  </div>
   );
}

function App() {

  return (
    <div className="bg-black h-[100vh] flex justify-center items-center flex-col">
      <Counter />
      <Counter />
      <Counter />
      <Counter />
      <Counter />

    </div>
  );
}

 


export default App;
