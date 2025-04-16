import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="text-2xl  font-bold text-gray-500"> Webshop</div>
      <div className="space-x-4">
        <Link to="/" className="hover:text-yellow-400">Home</Link>
        <Link to="/cart" className="hover:text-yellow-400">Cart</Link>
        <Link to="/product" className='hover:text-yellow-400'>Products</Link>
        <Link to="/about" className='hover:text-yellow-400'>About</Link>
      </div>
    </nav>
  );
}
