import { useRef, useState } from "react";
import Home from "./Components/Home/Home";

function App() {
  const [todo, settodo] = useState([]);
  const getinput = useRef();

  const cleardata = () => {

    const clearArray = [];
    settodo(clearArray);

  }


  const addlist = () => {
    const text = getinput.current.value;
    if (text !== ""  ) {
      settodo([...todo, text]);
      getinput.current.value = "";

    }
    else {
      alert("you should add to list")

    }



  };




  return (<Home getinput={getinput} addlist={addlist} todo={todo} clearArray={cleardata} />)


}

export default App;
