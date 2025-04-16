import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
// import Cart from './pages/Cart';
// import ProductDetails from './pages/ProductDetails';

import Navbar from './components/navbar';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
