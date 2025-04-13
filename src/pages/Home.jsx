import ProductCard from '../components/ProductCard';

const products = [
  {
    id: 1,
    name: 'Fekete póló',
    price: 3990,
    image: 'https://via.placeholder.com/300x200?text=Fekete+póló',
  },
  {
    id: 2,
    name: 'Kék farmer',
    price: 9990,
    image: 'https://via.placeholder.com/300x200?text=Kék+farmer',
  },
  {
    id: 3,
    name: 'Sneaker cipő',
    price: 12990,
    image: 'https://via.placeholder.com/300x200?text=Sneaker+cipő',
  },
];

export default function Home() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Termékek</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}
