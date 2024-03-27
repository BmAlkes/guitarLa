import React, { useMemo } from "react";

const Header = ({ cart, setCart }) => {
  const increaseCart = (id) => {
    const itemExist = cart.findIndex((product) => product.id === id);
    if (itemExist >= 0) {
      const updatedCart = [...cart];
      updatedCart[itemExist].quantity++;
      setCart(updatedCart);
    }
  };
  const decreaseCart = (id) => {
    console.log("decrease");
  };
  const handleDeleteItem = (id) => {
    const filterCart = cart.filter((item) => item.id !== id);
    setCart(filterCart);
  };

  const cartTotal = useMemo(
    () =>
      cart.reduce((total, item) => {
        return total + item.price * item.quantity;
      }, 0),
    [cart]
  );
  const handleDeleteCart = () => {
    setCart([]);
  };
  return (
    <header className="py-5 header">
      <div className="container-xl">
        <div className="row justify-content-center justify-content-md-between">
          <div className="col-8 col-md-3">
            <a href="/">
              <img
                className="img-fluid"
                src="./public/img/logo.svg"
                alt="imagen logo"
              />
            </a>
          </div>
          <nav className="col-md-6 a mt-5 d-flex align-items-start justify-content-end">
            <div className="carrito">
              <img
                className="img-fluid"
                src="./public/img/carrito.png"
                alt="imagen carrito"
              />

              <div id="carrito" className="bg-white p-3">
                {cart.length === 0 ? (
                  <p className="text-center">The cart is empty</p>
                ) : (
                  <table className="w-100 table">
                    <thead>
                      <tr>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {cart.map((cartItem) => (
                        <tr key={cartItem.id}>
                          <td>
                            <img
                              className="img-fluid"
                              src={`./img/${cartItem.image}.jpg`}
                              alt="imagen guitarra"
                            />
                          </td>
                          <td>{cartItem.name}</td>
                          <td className="fw-bold">${cartItem.price}</td>
                          <td className="flex align-items-start gap-4">
                            <button
                              type="button"
                              className="btn btn-dark"
                              onClick={() => decreaseCart(cartItem.id)}
                            >
                              -
                            </button>
                            {cartItem.quantity}
                            <button
                              type="button"
                              className="btn btn-dark"
                              onClick={() => increaseCart(cartItem.id)}
                            >
                              +
                            </button>
                          </td>
                          <td>
                            <button
                              className="btn btn-danger"
                              type="button"
                              onClick={() => handleDeleteItem(cartItem.id)}
                            >
                              X
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}

                <p className="text-end">
                  Total checkout: <span className="fw-bold">{cartTotal}</span>
                </p>

                <button className="btn btn-dark w-100 mt-3 p-2">
                  Checkout
                </button>

                <button
                  className="btn btn-dark w-100 mt-3 p-2"
                  onClick={handleDeleteCart}
                >
                  empty cart
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
