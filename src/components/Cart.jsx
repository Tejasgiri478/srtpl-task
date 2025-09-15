import { useCart } from "./CartContext";
import CustomNavbar from "./Navbar";
import Footer from "./Footer";

export default function Cart() {
  const { cart, updateQuantity, removeFromCart, clearCart } = useCart();
  const total = cart
    ? cart.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0)
    : 0;

  const handleCheckout = () => {
    alert("Checkout successful! (Demo)");
    clearCart();
  };

  return (
    <>
      <CustomNavbar />
      <div className="container py-4">
        <h2 className="mb-4">Cart</h2>
        {!cart || cart.length === 0 ? (
          <div className="alert alert-info">No products in cart.</div>
        ) : (
          <div className="list-group mb-3">
            {cart.map((item) => (
              <div
                key={item.id}
                className="list-group-item d-flex align-items-center"
              >
                <img
                  src={item.image}
                  alt={item.description}
                  style={{
                    width: "50px",
                    height: "50px",
                    borderRadius: "4px",
                    marginRight: "12px",
                  }}
                />
                <div className="flex-grow-1">
                  <div>{item.description}</div>
                  <div className="fw-bold text-success">₹{item.price}</div>
                </div>
                <div className="d-flex align-items-center">
                  <label className="me-2 mb-0">Qty:</label>
                  <select
                    className="form-select form-select-sm me-2"
                    style={{ width: 60 }}
                    value={item.quantity || 1}
                    onChange={(e) =>
                      updateQuantity(item.id, Number(e.target.value))
                    }
                  >
                    {[1, 2, 3, 4, 5].map((q) => (
                      <option key={q} value={q}>
                        {q}
                      </option>
                    ))}
                  </select>
                  <button
                    className="btn btn-danger btn-sm"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        <div className="fw-bold fs-5 mb-3">Total: ₹{total}</div>
        {cart && cart.length > 0 && (
          <button className="btn btn-primary" onClick={handleCheckout}>
            Checkout
          </button>
        )}
      </div>
      <Footer />
    </>
  );
}
