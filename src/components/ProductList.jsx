
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../redux/CartSlice";

const categories = [
  {
    name: "Air Purifying Plants",
    plants: [
      { id: 1, name: "Snake Plant", price: 350, image: "photo-1501004318641-b39e6451bec6" },
      { id: 2, name: "Peace Lily", price: 450, image: "photo-1497250681960-ef046c08a56e" },
      { id: 3, name: "Spider Plant", price: 250, image: "photo-1459156212016-c812468e2115" },
      { id: 4, name: "Areca Palm", price: 550, image: "photo-1485955900006-10f4d324d411" },
      { id: 5, name: "Rubber Plant", price: 400, image: "photo-1509423350716-97f9360b4e09" },
      { id: 6, name: "Boston Fern", price: 300, image: "photo-1497250681960-ef046c08a56e" }
    ]
  },
  {
    name: "Succulents",
    plants: [
      { id: 7, name: "Aloe Vera", price: 200, image: "photo-1509423350716-97f9360b4e09" },
      { id: 8, name: "Jade Plant", price: 250, image: "photo-1485955900006-10f4d324d411" },
      { id: 9, name: "Echeveria", price: 180, image: "photo-1459156212016-c812468e2115" },
      { id: 10, name: "Haworthia", price: 220, image: "photo-1501004318641-b39e6451bec6" },
      { id: 11, name: "String of Pearls", price: 300, image: "photo-1497250681960-ef046c08a56e" },
      { id: 12, name: "Echeveria Elegans", price: 280, image: "photo-1485955900006-10f4d324d411" }
    ]
  },
  {
    name: "Decorative Plants",
    plants: [
      { id: 13, name: "Monstera", price: 650, image: "photo-1497250681960-ef046c08a56e" },
      { id: 14, name: "Pothos", price: 300, image: "photo-1459156212016-c812468e2115" },
      { id: 15, name: "Calathea", price: 450, image: "photo-1501004318641-b39e6451bec6" },
      { id: 16, name: "ZZ Plant", price: 400, image: "photo-1485955900006-10f4d324d411" },
      { id: 17, name: "Fiddle Leaf Fig", price: 750, image: "photo-1509423350716-97f9360b4e09" },
      { id: 18, name: "Chinese Evergreen", price: 350, image: "photo-1497250681960-ef046c08a56e" }
    ]
  }
];

function ProductList() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  return (
    <main className="products-page">
      <h1>Our Houseplants</h1>

      {categories.map(category => (
        <section className="category" key={category.name}>
          <h2>{category.name}</h2>

          <div className="product-grid">
            {category.plants.map(plant => {
              const added = items.some(
                item => item.id === plant.id
              );

              return (
                <article className="product-card" key={plant.id}>
                  <img
                    src={`https://images.unsplash.com/${plant.image}?auto=format&fit=crop&w=500&q=80`}
                    alt={plant.name}
                  />
                  <h3>{plant.name}</h3>
                  <p>Price: ₹{plant.price}</p>

                  <button
                    disabled={added}
                    onClick={() => dispatch(addToCart(plant))}
                  >
                    {added ? "Added to Cart" : "Add to Cart"}
                  </button>
                </article>
              );
            })}
          </div>
        </section>
      ))}
    </main>
  );
}

export default ProductList;
