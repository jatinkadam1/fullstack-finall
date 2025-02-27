import React from "react";
import { Link } from "react-router-dom";

const Products = () => {
  const products = [
    {
      id: 1,
      src: "https://images.unsplash.com/photo-1590156117763-d5909f5ccbc8?q=80&w=1935",
      title: "Chanel Gabrielle",
      price: 30,
    },
    {
      id: 2,
      src: "https://images.unsplash.com/photo-1581954489528-1683690ea188?q=80&w=1943",
      title: "Diesel Fuel for Life",
      price: 35,
    },
    {
      id: 3,
      src: "https://images.unsplash.com/photo-1592914658737-efc0f615b296?q=80&w=1935",
      title: "COCO Chanel: Paris",
      price: 22,
    },
    {
      id: 4,
      src: "https://images.unsplash.com/photo-1600025592188-4a1e3a225625?q=80&w=1887",
      title: "Chanel N'5",
      price: 40,
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/965992/pexels-photo-965992.jpeg",
      title: "Daisy N'2",
      price: 21,
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/724646/pexels-photo-724646.jpeg",
      title: "Daisy Jacobs",
      price: 23,
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/1200502/pexels-photo-1200502.jpeg",
      title: "Gabrielle Chanel: Paris",
      price: 29,
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/1830450/pexels-photo-1830450.jpeg",
      title: "Victoria's Secret Bombshell",
      price: 31,
    },
  ];

  return (
    <div className="w-full h-auto mt-20 px-4 sm:px-10">
      <h1 className="font-bold text-3xl sm:text-4xl mb-8 text-center">
        Featured Products
      </h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 justify-items-center">
        {products.map((product) => (
          <li
            key={product.id}
            className="w-72 bg-white shadow-md rounded-xl overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <Link to={`/product/${product.id}`}>
              <img
                className="w-full h-64 object-cover"
                src={product.src}
                alt={product.title}
              />
              <div className="p-4 text-center">
                <h1 className="font-semibold text-lg">{product.title}</h1>
                <h2 className="font-bold text-xl text-green-600">
                  ${product.price}
                </h2>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
