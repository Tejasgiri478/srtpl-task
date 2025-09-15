import "bootstrap/dist/css/bootstrap.min.css";

export default function Card({ product, onAddToCart }) {
  return (
    <div
      className="card h-100 shadow-sm m-2 col-12 col-sm-6 col-md-4 col-lg-3"
      style={{ maxWidth: "320px", cursor: "pointer" }}
      onClick={() => onAddToCart(product.id)}
    >
      <img
        src={product.image}
        alt={product.description}
        className="card-img-top"
        style={{ height: "180px", objectFit: "cover" }}
      />
      <div className="card-body text-center d-flex flex-column">
        <h3 style={{ fontSize: "1.1rem", margin: "12px 0 8px" }}>
          {product.description}
        </h3>
        <p style={{ fontWeight: "bold", color: "#2e7d32" }}>₹{product.price}</p>
        <button
          style={{
            marginTop: "10px",
            padding: "8px 16px",
            background: "#388e3c",
            color: "#fff",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
          onClick={(e) => {
            e.stopPropagation();
            onAddToCart(product.id);
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
