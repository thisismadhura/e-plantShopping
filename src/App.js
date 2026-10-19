
import { Link, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import AboutUs from "./components/AboutUs";

function App() {
  const items = useSelector(state => state.cart.items);

  const cartCount = items.reduce(
    (total, item) => total + item.quantity,
    0
  );

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="brand">
          Paradise Nursery
        </Link>

        <div className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/plants">Plants</Link>
          <Link to="/cart">Cart ({cartCount})</Link>
        </div>
      </nav>

      <Routes>
        <Route
          path="/"
          element={
            <main className="hero">
              <div className="hero-content">
                <h1>Paradise Nursery</h1>
                <h2>Bring Nature Into Your Home</h2>
                <p>
                  Discover beautiful indoor plants for
                  your living space.
                </p>
                <Link to="/plants" className="button">
                  Get Started
                </Link>
              </div>
              <AboutUs />
            </main>
          }
        />

        <Route path="/plants" element={<ProductList />} />
        <Route path="/cart" element={<CartItem />} />
      </Routes>
    </>
  );
}

export default App;
