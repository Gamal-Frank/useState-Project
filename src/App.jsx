import { useState } from "react";
function NameList(){
  const[list,setList]=useState(["jack","jill","john"])
  const[newName,setNewname]=useState("")

  function addName(){
    setList([...list,newName])
  }

  function getNewname(event){
    setNewname(event.target.value)
  }
  return(
    <div className="flex flex-col justify-center items-center">
      <input type="text" className="bg-white m-3" onChange={getNewname}  />
      <ul className=" bg-white p-2 rounded-md">
      {list.map((Name)=>{return <li key={Name}>{Name}</li>})}
      </ul>
      <button className="bg-white rounded-md m-2 p-2" onClick={addName}>add new name</button>
    </div>
  )
}

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
      <NameList />

    </div>
  );
}

 


export default App;
