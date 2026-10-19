
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart
} from "../redux/CartSlice";

function CartItem() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <main className="cart-page">
      <h1>Your Shopping Cart</h1>

      {items.length === 0 ? (
        <>
          <p>Your cart is empty.</p>
          <Link to="/plants" className="button">
            Continue Shopping
          </Link>
        </>
      ) : (
        <>
          {items.map(item => (
            <article className="cart-item" key={item.id}>
              <img
                src={`https://images.unsplash.com/${item.image}?auto=format&fit=crop&w=200&q=80`}
                alt={item.name}
              />

              <div className="cart-details">
                <h3>{item.name}</h3>
                <p>Unit Price: ₹{item.price}</p>
                <p>Quantity: {item.quantity}</p>
                <p>
                  Item Total: ₹{item.price * item.quantity}
                </p>

                <button
                  disabled={item.quantity <= 1}
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                >
                  −
                </button>

                <span>{item.quantity}</span>

                <button
                  onClick={() => dispatch(increaseQuantity(item.id))}
                >
                  +
                </button>

                <button
                  className="delete-button"
                  onClick={() => dispatch(removeFromCart(item.id))}
                >
                  Delete
                </button>
              </div>
            </article>
          ))}

          <section className="cart-summary">
            <h2>Total Amount: ₹{total}</h2>

            <button onClick={() => alert("Checkout Coming Soon!")}>
              Checkout
            </button>

            <Link to="/plants" className="button">
              Continue Shopping
            </Link>
          </section>
        </>
      )}
    </main>
  );
}

export default CartItem;
