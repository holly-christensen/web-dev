import {BrowserRouter, Route, Routes}
       from "react-router-dom";
import './App.css';
import './vendors/bootstrap/css/bootstrap.min.css';
import './vendors/bootstrap/bootstrap.min.css';
import './vendors/fontawesome/css/all.min.css';
import HelloWorld from "./components/hello-world";
import Labs from "./components/labs";
import Tuiter from "./components/tuiter";



function App() {
 return (
   <BrowserRouter>
     <div className="container">
       <Routes>
         <Route path="/hello"
                exact={true}
                element={<HelloWorld/>}/>
         <Route path="/"
                exact={true}
                element={<Labs/>}/>
         <Route path="/tuiter"
                exact={true}
                element={<Tuiter/>}/>
       </Routes>
     </div>
   </BrowserRouter>
 );
}




//function App() {
//  return (
//    <div className="App">
//      <header className="App-header">
//        <img src={logo} className="App-logo" alt="logo" />
//        <p>
//          Web Dev Spring 2022 - Holly Lovejoy
//        </p>
//        <a
//          className="App-link"
//          href="https://reactjs.org"
//          target="_blank"
//          rel="noopener noreferrer"
//        >
//          Learn React
//        </a>
//      </header>
//    </div>
//  );
//}

export default App;
