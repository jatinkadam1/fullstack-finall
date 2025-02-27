import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const ProductDetail = () => {
  const { id } = useParams(); // Get product ID from URL
  const [product, setProduct] = useState(null);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const products = [
      {
        id: 1,
        src: "https://images.unsplash.com/photo-1590156117763-d5909f5ccbc8?q=80&w=1935",
        title: "Chanel Gabrielle",
        price: 30,
        description: "An iconic fragrance embodying timeless elegance.",
      },
      {
        id: 2,
        src: "https://images.unsplash.com/photo-1581954489528-1683690ea188?q=80&w=1943",
        title: "Diesel Fuel for Life",
        price: 35,
        description: "A bold scent that energizes and excites your senses.",
      },
      {
        id: 3,
        src: "https://images.unsplash.com/photo-1592914658737-efc0f615b296?q=80&w=1935",
        title: "COCO Chanel: Paris",
        price: 22,
        description: "An alluring scent that defines sophistication.",
      },
      {
        id: 4,
        src: "https://images.unsplash.com/photo-1600025592188-4a1e3a225625?q=80&w=1887",
        title: "Chanel N'5",
        price: 40,
        description: "The classic fragrance loved by generations.",
      },
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

    const foundProduct = products.find((p) => p.id === Number(id));

    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      setMessage("Product not found.");
    }
  }, [id]);

  if (!product) {
    return <h1 className="text-red-500 text-center mt-10">{message}</h1>;
  }

  const addToCart = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        setMessage("Please log in to add items to the cart.");
        return;
      }

      const requestData = {
        productId: product.id,
        title: product.title,
        price: product.price,
        image: product.src,
      };

      const response = await axios.post(
        "http://localhost:5000/api/cart/add",
        requestData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      setMessage("Product added to cart!");
    } catch (error) {
      setMessage(
        error.response?.data?.error || "Failed to add product to cart."
      );
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto mt-10 p-4 sm:p-6 border rounded-lg shadow-lg">
      {/* Product Image */}
      <img
        className="w-full h-64 sm:h-96 object-cover rounded-lg"
        src={product.src}
        alt={product.title}
      />

      {/* Product Info */}
      <h1 className="text-2xl sm:text-3xl font-bold mt-4">{product.title}</h1>
      <p className="text-lg sm:text-xl text-green-600 font-semibold">
        ${product.price}
      </p>
      <p className="text-gray-700 mt-4 text-base sm:text-lg">
        {product.description}
      </p>

      {/* Add to Cart Button */}
      <button
        onClick={addToCart}
        className="mt-6 bg-blue-500 text-white text-lg sm:text-xl px-4 py-2 sm:px-6 sm:py-3 rounded-lg hover:bg-blue-700 transition-all w-full sm:w-auto"
      >
        Add to Cart
      </button>

      {/* Message */}
      {message && <p className="mt-4 text-red-500">{message}</p>}
    </div>
  );
};

export default ProductDetail;
