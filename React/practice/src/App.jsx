import { useState, useEffect } from "react";

const ProductCard = ({ image, title }) => {
  return (
    <div className="product-card">
      <img src={image} alt={title} />
      <span>{title}</span>
    </div>
  );
};

export default function App() {
  const [products, setProducts] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch("https://dummyjson.com/products?limit=500");
      const json = await res.json();
      setProducts(json.products); // Correct key
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return !products.length ? (
    <h1>No Products Found</h1>
  ) : (
    <div className="App">
      <h1>Pagination</h1>
      {products.map((p) => (
        <ProductCard key={p.id} image={p.thumbnail} title={p.title} />
      ))}
    </div>
  );
}
