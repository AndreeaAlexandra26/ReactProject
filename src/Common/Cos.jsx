import React, { useState, useEffect } from "react";
import { Card, Button } from "react-bootstrap";
import NavBar from "./NavBar";

const ShoppingCart = () => {
  const [cart, setCart] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Simulăm preluarea de produse dintr-un server
    fetch(`http://localhost:3000/produse`)
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  return (
    <div>
       <NavBar isGuest={true}/>

      <h2>Produse disponibile</h2>
      <div className="product-list">
        {products.map((product) => (
          <Card key={product.id} style={{ width: "18rem", margin: "10px" }}>
            <Card.Img variant="top" src={product.img} />
            <Card.Body>
              <Card.Title>{product.name}</Card.Title>
              <Card.Text>{product.description}</Card.Text>
              <Button onClick={() => addToCart(product)}>Adaugă în coș</Button>
            </Card.Body>
          </Card>
        ))}
      </div>

      <h2>Coș de cumpărături</h2>
      <div className="cart">
        {cart.map((item) => (
          <Card key={item.id} style={{ width: "18rem", margin: "10px" }}>
            <Card.Img variant="top" src={item.img} />
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Text>{item.description}</Card.Text>
              <Card.Text>{item.price} lei </Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default ShoppingCart;
