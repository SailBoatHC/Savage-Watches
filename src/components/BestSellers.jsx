import React from 'react';
import Product from './Product'; 

const BestSellers = () => {
  const products = [
    {
      id: 1,
      name: 'Google Pixel Watch',
      price: 119.99,
      image: './watch3.jpeg',
      discount: 20,
    },
    {
      id: 2,
      name: 'REVYKIN Watch',
      price: 59.99,
      image: './watch1.avif',
      discount: 50,
    },
    {
      id: 3,
      name: 'Galaxy Watch 6',
      price: 159.99,
      image: './watch5.avif',
      discount: 20,
    },
    {
      id: 4,
      name: 'Realme Watch 3',
      price: 74.99,
      image: './watch6.webp',
      discount: 35,
    },
    {
      id: 5,
      name: 'Hammer Pulse',
      price: 89.99,
      image: './watch8.webp',
      discount: 25,
    },
    {
      id: 6,
      name: 'Tide Pulse',
      price: 59.99,
      image: './watch9.png',
      discount: 45,
    },
  ];

  return (
    <div className="best-sellers mx-[7.5%] mt-[40px]">
      <h2 className="4xs:text-2xl sm:text-3xl font-semibold mb-4">Our Best Sellers</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 4xs:grid-cols-1">
        {products.map((product) => (
          <Product
            key={product.id}
            name={product.name}
            price={product.price}
            image={product.image}
            discount={product.discount}
          />
        ))}
      </div>
    </div>
  );
};

export default BestSellers;
