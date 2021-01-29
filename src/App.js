import React from 'react';
import {Header,Main} from "./components"

function App() {
return(
    <div className="wrapper">
      <Header/>
      <Main items={["Телефон","Телефон","Телефон","Телефон","Телефон","Телефон","Телефон"]}/>
    </div>
);  
}

export default App;
