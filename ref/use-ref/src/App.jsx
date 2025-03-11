import React,{useRef} from 'react'
import "bootstrap/dist/css/bootstrap.min.css"

export default function App() {

  const inputRef = useRef(null);
  console.log(inputRef);

  const value = inputRef.current.value;
  console.log(value);

  function getvalue(){
  inputRef.current.focuse();
  }
  
  return (
    <>

      <center>
        <h1>use reference</h1>
        <input type="text" className=''  ref={inputRef} />
        <button className='btn btn-danger ms-3'onClick={getvalue}>click</button>
      </center>
    </>
  )

}

