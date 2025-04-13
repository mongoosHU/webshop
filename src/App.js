import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProductCard from './components/ProductCard';
//import Cart from './pages/Cart';
//import ProductDetails from './pages/ProductDetails';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar>
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path='/product' element={<ProductCard />} />
      </Routes>
      </Navbar>
    </>
  );
}

export default App;
