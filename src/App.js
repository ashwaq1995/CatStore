import './App.css';
// import cat1 from "./public/images/cat1.jfif";

import cat1 from "./images/cat1.jfif";
import cat2 from "./images/cat2.jfif";
import cat3 from "./images/cat3.jfif";
import cat4 from "./images/cat4.jfif";

function App() {
  return (
    <div className="App">
    
    <h1>Cat Store</h1>
 
    <div className='position'>

  <div>
  <img src={cat1} className="img" />
  <h3>name:cat1</h3>
  <h5>Age:3 months</h5>
  </div>

  <div>
  <img src={cat2} className="img" />
  <h3>name:cat2</h3>
  <h5>Age:4 months</h5>
  </div>

  <div>
  <img src={cat3} className="img" />
  <h3>name:cat3</h3>
  <h5>Age:3 months</h5>
  </div>

  <div>
  <img src={cat4} className="img" />
  <h3>name:cat4</h3>
  <h5>Age:2 months</h5>
  </div>
  </div>

  </div>
  );
}

export default App;
