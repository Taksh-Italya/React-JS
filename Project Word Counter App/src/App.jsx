import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./componets/Navbar";

function App() {
  return (
    <>
      <Navbar title="word-counter" />
      <div className="form-floating container">
        <h2>hello</h2>
        <div className="mb-3">
          <textarea className="form-control" id="exampleFormControlTextarea1" rows="12"></textarea>
        </div>
        <button className="btn btn-success mt-3 text-light">Update Vlaue</button>
        <button className="btn btn-danger ms-3 mt-3 text-light">Update Vlaue</button>
      </div>
    </>
  )
}

export default App
