import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
//import ProductCard from './components/ProductCard';
//import Cart from './pages/Cart';
//import ProductDetails from './pages/ProductDetails';
//import Navbar from './components/Navbar';

function App() {
  return (
    <>
  
      <Routes>
      <Route path="/" element={<Home />} />
      
      </Routes>
      
    </>
  );
}

export default App;
