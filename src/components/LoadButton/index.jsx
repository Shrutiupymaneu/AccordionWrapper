import { useEffect, useState } from "react";
import "./styles.css";
import { FaSadCry } from "react-icons/fa";

export default function LoadMoreButton() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${count * 20}`
      );
      const data = await response.json();

      if (data && data.products && data.products.length) {
        setProducts((prevData) => {
          const existingIds = new Set(prevData.map((item) => item.id));
          const newProducts = data.products.filter((item) => !existingIds.has(item.id));
          return [...prevData, ...newProducts];
        });

        if (data.products.length < 20 || products.length + data.products.length >= 100) {
          setDisableButton(true);
        }
      } else {
        setDisableButton(true);
      }
    } catch (e) {
      console.error("Error fetching products:", e);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProducts();
    // eslint-disable-next-line
  }, [count]);

  return (
    <div className="containers">
      <div className="product-container">
        {products.length > 0 &&
          products.map((item) => (
            <div className="product" key={`${item.id}-${item.title}`}>
              <img src={item.thumbnail} alt={item.title} />
              <p>{item.title}</p>
            </div>
          ))}
      </div>
      <div className="button-container">
        <button
          disabled={disableButton || loading}
          onClick={() => setCount((prev) => prev + 1)}
        >
          {loading ? "Loading..." : "Load More Products"}
        </button>
        {disableButton && (
          <p>
            No more products <FaSadCry />
          </p>
        )}
      </div>
    </div>
  );
}
