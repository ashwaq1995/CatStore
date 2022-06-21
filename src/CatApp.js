import React from "react";
import "./App.css";

// import cat1 from "./public/images/cat1.jfif";
import cat2 from "./public/images/cat2.jfif";
import cat3 from "./public/images/cat3.jfif";
import cat4 from "./public/images/cat4.jfif";

function CatApp() {
  return (
      <div className="CatApp">
      <h1>Cat Store</h1>

      <div className='position'>
        <div>
      <img src="./public/images/cat1.jfif" className="img" />
      <h3>name:cat1</h3>
      </div>
      <div>
      <img src={cat2} className="img" />
      <h3>name:cat2</h3>
      </div>

      <div>
      <img src={cat3} className="img" />
      <h3>name:cat3</h3>
      </div>
      <div>
      <img src={cat4} className="img" />
      <h3>name:cat4</h3>
      </div>
      </div> 
      </div>

  );
}

export default CatApp;