import React from "react";
import Tasklist from "./componenets/tasklist";
import AddTask from "./componenets/AddTask";

function App(){
  return(
    <div>
      <AddTask/>
      <Tasklist/>
    </div>
  )
}

export default App