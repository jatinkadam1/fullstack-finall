import React from "react";
import { Link } from "react-router-dom";

const Women = () => {
  const products = [
    {
      id: 5,
      src: "https://images.pexels.com/photos/965992/pexels-photo-965992.jpeg",
      title: "Daisy N'2",
      price: 21,
      description: "A youthful scent that’s perfect for everyday use.",
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/724646/pexels-photo-724646.jpeg",
      title: "Daisy Jacobs",
      price: 23,
      description: "A floral fragrance that captivates the senses.",
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/1200502/pexels-photo-1200502.jpeg",
      title: "Gabrielle Chanel: Paris",
      price: 29,
      description: "A tribute to the essence of femininity.",
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/1830450/pexels-photo-1830450.jpeg",
      title: "Victoria's Secret Bombshell",
      price: 31,
      description: "An enchanting scent with vibrant and fruity notes.",
    },
  ];
  return (
    <div className="w-full h-auto mt-20 px-10">
      <h1 className="font-bold text-4xl mb-10">For Women</h1>
      <ul className="flex gap-20 flex-wrap">
        {products.map((product) => (
          <li
            key={product.id}
            className="w-72 overflow-hidden cursor-pointer hover:border-4 border-black rounded-xl transition-all"
          >
            <Link to={`/product/${product.id}`}>
              <img
                className="object-cover w-full h-72 rounded-lg"
                src={product.src}
                alt={product.title}
              />
              <div className="flex flex-col items-center mt-2">
                <h1 className="font-bold text-xl">{product.title}</h1>
                <h1 className="font-bold text-xl text-green-600">
                  ${product.price}
                </h1>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Women;
