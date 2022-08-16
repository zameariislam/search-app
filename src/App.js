
import './App.css';
import Header from './Header';
import { Routes,Route } from "react-router-dom";
import Home from './Home';


function App() {
  return (
    <div className=" mx-40  mt-5 ">
      
      

      <Header></Header>
      <Routes>
        <Route path='/' element={<Home/>}>
          {/* <Route path='/volunteer' element={<Volunteers/>}/> */}
      

        </Route>
      </Routes>
      
      
    </div>
  );
}

export default App;
