import { useEffect, useState } from "react";
import Guitar from "./components/Guitar";
import Header from "./components/Header";
import { db } from "./db";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);

  const getLocalStorage = () => {
    const cartLocal = JSON.parse(localStorage.getItem("cart"));
    setCart(cartLocal);
  };

  useEffect(() => {
    setProducts(db);
    getLocalStorage();
  }, []);

  const addToCart = (item) => {
    const itemExist = cart.findIndex((product) => product.id === item.id);
    if (itemExist >= 0) {
      const updatedCart = [...cart];
      updatedCart[itemExist].quantity++;
      setCart(updatedCart);
    } else {
      item.quantity = 1;
      setCart((prev) => [...prev, item]);
    }
  };

  return (
    <>
      <Header cart={cart} setCart={setCart} />
      <main className="container-xl mt-5">
        <h2 className="text-center">Our Collection</h2>

        <div className="row mt-5">
          {products.map((product) => (
            <Guitar
              key={product.id}
              product={product}
              addToCart={addToCart}
              cart={cart}
            />
          ))}
        </div>
      </main>

      <footer className="bg-dark mt-5 py-5">
        <div className="container-xl">
          <p className="text-white text-center  mt-4 m-md-0">
            GuitarLA - All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}

export default App;
