import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';

//import ProductCard from './components/ProductCard';
//import Cart from './pages/Cart';
//import ProductDetails from './pages/ProductDetails';

import About from './pages/About';
// import Cart from './pages/Cart';
// import ProductDetails from './pages/ProductDetails';


import Navbar from './components/navbar';
import Products from './pages/Products';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path='/Product' element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
