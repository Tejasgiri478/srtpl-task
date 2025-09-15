import React from "react";
import { useCart } from "./CartContext";

const offerProducts = [
  {
    id: 101,
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    description: "EcoBottle - 1L Reusable Water Bottle (Offer)",
    price: 299,
    oldPrice: 399,
  },
  {
    id: 102,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    description: "EcoBottle - 500ml Reusable Water Bottle (Offer)",
    price: 199,
    oldPrice: 299,
  },
  {
    id: 103,
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    description: "EcoBottle - 750ml Reusable Water Bottle (Offer)",
    price: 249,
    oldPrice: 349,
  },
  {
    id: 104,
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    description: "EcoBottle - 1.5L Reusable Water Bottle (Offer)",
    price: 349,
    oldPrice: 449,
  },
  {
    id: 105,
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80",
    description: "EcoBottle - 350ml Reusable Water Bottle (Offer)",
    price: 149,
    oldPrice: 249,
  },
];

export default function OfferZone() {
  const { addToCart } = useCart();
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">🔥 Offer Zone</h2>
      <div className="row justify-content-center">
        {offerProducts.slice(0, 5).map((product) => (
          <div
            key={product.id}
            className="card m-2 col-12 col-sm-6 col-md-4 col-lg-2 p-0"
            style={{ maxWidth: 220 }}
          >
            <img
              src={product.image}
              alt={product.description}
              className="card-img-top"
              style={{ height: 120, objectFit: "cover" }}
            />
            <div className="card-body text-center">
              <h6 className="card-title" style={{ fontSize: "1rem" }}>
                {product.description}
              </h6>
              <div>
                <span className="fw-bold text-success me-2">
                  ₹{product.price}
                </span>
                <span className="text-muted text-decoration-line-through">
                  ₹{product.oldPrice}
                </span>
              </div>
              <button
                className="btn btn-sm btn-warning mt-2"
                onClick={() => addToCart(product)}
              >
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
