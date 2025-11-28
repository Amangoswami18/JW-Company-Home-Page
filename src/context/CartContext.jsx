import { createContext, useEffect, useState } from "react";
import { toast } from "react-hot-toast";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem("jw_wishlist");
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  // Save  localStorage;
  useEffect(() => {
    localStorage.setItem("jw_wishlist", JSON.stringify(wishlist));
  }, [wishlist]);


  const addToCart = (product) => {
    const exists = cart.some((item) => item.id === product.id);

    if (!exists) {
      setCart((prev) => [...prev, { ...product, qty: 1 }]);
      toast.success("Added to cart!");
    } else {
      toast("Already in cart");
    }
  };

  const removeFromCart = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
    toast.error("Removed from cart!");
  };

  const updateQty = (id, qty) => {
    setCart((prev) =>
      prev.map((item) => (item.id === id ? { ...item, qty } : item))
    );
  };


  const isInWishlist = (id) => wishlist.some((item) => item.id === id);

  const addToWishlist = (product) => {
    if (!isInWishlist(product.id)) {
      setWishlist((prev) => [...prev, product]);
      toast.success("Added to wishlist!");
    } else {
      toast("Already in wishlist");
    }
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((item) => item.id !== id));
    toast("Removed from wishlist");
  };

  const toggleWishlist = (product) => {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        updateQty,
        wishlist,
        addToWishlist,
        removeFromWishlist,
        toggleWishlist,
        isInWishlist,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
