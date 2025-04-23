import React from 'react'
import { Data } from '../components/Data'

const Products = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Termékek</h2>

      <div className="flex flex-wrap gap-4">
        {Data.map((item, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-4 w-1/4">
            <img src={item.image} alt={item.name} className="w-full h-32 object-cover rounded-t-lg" />
            <h3 className="text-lg font-semibold mt-2">{item.name}</h3>
            <p className="text-gray-600">${item.price}</p>
          </div>
        ))} 
        </div>
        </div>
  )
}

export default Products
