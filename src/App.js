import React from 'react'; 
import Home from "./components/Home";
import Footer from "./components/Footer";
import Navbar1 from "./components/Navbar";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Formulario1 from "./components/Formulario";
import QuemSomos from "./components/Quemsomos";

function App() 
{ 
 return ( 
 <div className="App"> 
 <Navbar1 /> 
 <BrowserRouter> 
 <Routes> 
 <Route path='/' element={<Home />} />
 <Route path='/contato' element={<Formulario1 />} />
 <Route path='/quemsomos' element={<QuemSomos />} />
 </Routes> 
 </BrowserRouter> 
 <Footer /> 

</div> 
);
} 
export default App;