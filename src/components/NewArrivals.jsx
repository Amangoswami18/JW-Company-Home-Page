import { useContext } from "react";
import siteData from "../data/siteData.json";
import { CartContext } from "../context/CartContext";

export default function NewArrivals() {
  const { cart, addToCart, removeFromCart, toggleWishlist, isInWishlist } =
    useContext(CartContext);

  const isInCart = (id) => cart.some((item) => item.id === id);

  return (
    <div className="container my-5" id="new-arrivals">
      <h4 className="mb-4 text-center fw-semibold">New Arrivals</h4>

      <style>
        {`
          .arr-card {
            border-radius: 10px;
            overflow: hidden;
            transition: all 0.25s ease;
          }
          .arr-card:hover {
            transform: translateY(-4px);
            box-shadow: 0 8px 20px rgba(0,0,0,0.12);
          }
          .arr-img {
            transition: transform 0.3s ease;
          }
          .arr-card:hover .arr-img {
            transform: scale(1.03);
          }
          .heart-btn {
            transition: transform 0.2s ease;
          }
          .heart-btn:active {
            transform: scale(1.3);
          }
        `}
      </style>

      <div className="row g-4">
        {siteData.newArrivals.map((product) => (
          <div
            key={product.id}
            className="col-12 col-sm-6 col-md-3"
          >
            <div className="card h-100 arr-card">

              
              <div style={{ position: "relative" }}>
                <img
                  src={product.image}
                  alt={product.title}
                  className="card-img-top arr-img"
                  style={{
                    height: 200,
                    objectFit: "cover",
                  }}
                />

                
                <button
                  onClick={() => toggleWishlist(product)}
                  className="heart-btn"
                  aria-label="wishlist"
                  style={{
                    position: "absolute",
                    top: 10,
                    right: 10,
                    background: "#fff",
                    border: "1px solid #ddd",
                    borderRadius: "50%",
                    width: 36,
                    height: 36,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                    fontSize: 18,
                  }}
                >
                  {isInWishlist(product.id) ? "♥" : "♡"}
                </button>
              </div>

            
              <div className="card-body d-flex flex-column">
                <h6 className="mb-1">{product.title}</h6>
                <p className="text-muted mb-3">₹{product.price}</p>

                {isInCart(product.id) ? (
                  <button
                    className="btn btn-outline-danger w-100 mt-auto"
                    onClick={() => removeFromCart(product.id)}
                  >
                    Remove
                  </button>
                ) : (
                  <button
                    className="btn btn-dark w-100 mt-auto"
                    onClick={() => addToCart(product)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
