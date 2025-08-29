import React from 'react'
import Nav from './components/Nav'
import { Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Calculator from './Pages/Calculator';
import Table from './Pages/Table';
import Footer from './components/Footer';


const App = () => {
  return(

<div>
   <Nav />
   <div>
     <Routes>
     <Route path="/" element={<Home />}/>
     <Route path="/Calculator" element={<Calculator />}/>
     <Route path="/Table" element={<Table />}/>
     </Routes>
   </div>
   <div>
    <Footer />
   </div>
</div>

  )

}

export default App;