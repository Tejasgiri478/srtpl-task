import React from "react";

const products = [
  {
    id: 1,
    image:
      "https://www.solara.in/cdn/shop/files/IWB_Black_marble_001_44eeb7ff-11d6-4db4-b1db-fa1dd80abaff.jpg?v=1753946638&width=1080",
    description: "EcoBottle - 500ml Reusable Water Bottle",
    price: 299,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80",
    description: "EcoBottle - 1L Reusable Water Bottle",
    price: 399,
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=400&q=80",
    description: "EcoBottle - 750ml Reusable Water Bottle",
    price: 349,
  },
  {
    id: 4,
    image:
      "https://www.solara.in/cdn/shop/files/IWB_Unicorn_002.jpg?v=1752310767&width=300",
    description: "EcoBottle - 350ml Kids Edition",
    price: 249,
  },
  {
    id: 5,
    image:
      "https://www.solara.in/cdn/shop/files/Black_Knight_Elixir_M.jpg?v=1750876394&width=1080",
    description: "EcoBottle - 1.5L Large Capacity",
    price: 499,
  },
  {
    id: 6,
    image:
      "https://images.unsplash.com/photo-1564859227542-42d3f30e7c98?auto=format&fit=crop&w=400&q=80",
    description: "EcoBottle - 600ml Slim Travel Bottle",
    price: 329,
  },
  {
    id: 7,
    image:
      "https://images.unsplash.com/photo-1600181951521-7d5e36ef0f74?auto=format&fit=crop&w=400&q=80",
    description: "EcoBottle - 800ml Stainless Steel",
    price: 379,
  },
  {
    id: 8,
    image:
      "https://images.unsplash.com/photo-1595278069441-d1fa5a5d58ff?auto=format&fit=crop&w=400&q=80",
    description: "EcoBottle - 500ml Glass Edition",
    price: 449,
  },
  {
    id: 9,
    image:
      "https://images.unsplash.com/photo-1503602642458-232111445657?auto=format&fit=crop&w=400&q=80",
    description: "EcoBottle - 1L Sports Grip",
    price: 429,
  },
  {
    id: 10,
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=400&q=80",
    description: "EcoBottle - 700ml Classic Matte",
    price: 359,
  },
  {
    id: 11,
    image:
      "https://images.unsplash.com/photo-1556912173-3bb406ef7e77?auto=format&fit=crop&w=400&q=80",
    description: "EcoBottle - 900ml Insulated Bottle",
    price: 469,
  },
  {
    id: 12,
    image:
      "https://images.unsplash.com/photo-1583573636256-f77bcf040a24?auto=format&fit=crop&w=400&q=80",
    description: "EcoBottle - 400ml Kids Straw Edition",
    price: 279,
  },
  {
    id: 13,
    image:
      "https://images.unsplash.com/photo-1602874801003-4b7199d37c58?auto=format&fit=crop&w=400&q=80",
    description: "EcoBottle - 1.2L Hiking Bottle",
    price: 459,
  },
  {
    id: 14,
    image:
      "https://images.unsplash.com/photo-1602524206184-d7a9e9bfa933?auto=format&fit=crop&w=400&q=80",
    description: "EcoBottle - 650ml Bamboo Lid Edition",
    price: 389,
  },
  {
    id: 15,
    image:
      "https://images.unsplash.com/photo-1617196031131-cf17c3a2f8f6?auto=format&fit=crop&w=400&q=80",
    description: "EcoBottle - 500ml Limited Color Edition",
    price: 319,
  },
];

import Card from "./Card";
import CustomNavbar from "./Navbar";
import Footer from "./Footer";
import { useCart } from "./CartContext";

export default function Product() {
  const { addToCart } = useCart();
  const handleAddToCart = (id) => {
    const product = products.find((p) => p.id === id);
    if (product) addToCart(product);
  };

  return (
    <>
      <CustomNavbar />
      <div className="container py-4">
        <h1 className="text-center mb-4">EcoBottle Products</h1>
        <div className="row justify-content-center">
          {products.map((product) => (
            <Card
              key={product.id}
              product={product}
              onAddToCart={handleAddToCart}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}
