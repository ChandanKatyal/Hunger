import './App.css';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from './Home';
import Menupage from './Menupage';
import Aboutuspage from './Aboutuspage';
import Cart from './Cart';

function App() {
    return ( 
        
   <Router>
       <Routes>
           <Route path="/" element={<Home/>}/>
           <Route path="/Menupage" element={<Menupage/>}/>
           <Route path="/Aboutuspage" element={<Aboutuspage/>}/>
           <Route path="/Cart" element={<Cart/>}/>
       </Routes>
    </Router>
    );
}

export default App;