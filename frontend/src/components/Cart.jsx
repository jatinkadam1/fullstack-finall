import { useState, useEffect } from "react";
import axios from "axios";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchCart = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) return;

        const response = await axios.get("http://localhost:5000/api/cart", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setCart(response.data);
      } catch (error) {
        console.error("Error fetching cart:", error);
      }
    };

    fetchCart();
  }, []);

  const removeFromCart = async (productId) => {
    try {
      const token = localStorage.getItem("token");
      if (!token) return;

      await axios.delete(`http://localhost:5000/api/cart/remove/${productId}`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      setCart(cart.filter((item) => item.productId !== productId));
    } catch (error) {
      console.error("Error removing item:", error);
    }
  };

  return (
    <div className="w-full min-h-screen mt-20 px-4 md:px-10">
      <h1 className="font-bold text-3xl md:text-4xl mb-6 md:mb-10 text-center">
        Your Cart
      </h1>

      {cart.length === 0 ? (
        <p className="text-center text-lg">Your cart is empty.</p>
      ) : (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cart.map((item) => (
            <li
              key={item.productId}
              className="border p-4 rounded-lg shadow-lg bg-white"
            >
              <img
                className="w-full h-40 md:h-48 object-cover rounded"
                src={item.image}
                alt={item.title}
              />
              <h2 className="font-bold text-lg md:text-xl mt-3">
                {item.title}
              </h2>
              <p className="text-green-600 font-bold text-lg">${item.price}</p>
              <p className="text-gray-600">Quantity: {item.quantity}</p>

              <button
                onClick={() => removeFromCart(item.productId)}
                className="mt-4 w-full bg-red-500 text-white py-2 px-4 rounded hover:bg-red-700 transition-all"
              >
                Remove
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Cart;
