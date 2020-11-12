import logo from './logo.svg';
import './App.css';
import First from './model/First.js';
const myelement = (
  <ul>
    <li>Apples</li>
    <li>Bananas</li>
    <li>Cherries</li>
  </ul>
);

function App() {
  
  return (
    <div className="App"> 
    <h1>Hellow Mani {myelement}</h1>
   
    <br/>
     
    </div>
  );
  
 }

 
// try
// {

//   var mycar = new First();
//   console.log(mycar);
// }
// catch(err)
// {
//   console.log(err);
// }
export default App;
