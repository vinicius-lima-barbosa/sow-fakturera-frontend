import { useEffect } from "react";
import { BiPrinter, BiSearch } from "react-icons/bi";
import { IoIosAddCircle } from "react-icons/io";
import useProductStore from "../../../stores/products.store";
import { transformProduct } from "../../../utils/transform-products.util";
import "./pricelist-component.styles.css";

function Pricelist() {
  const products = useProductStore((state) => state.products);
  const { getProducts, setProducts, updateProduct } = useProductStore();

  useEffect(() => {
    const init = async () => {
      await getProducts();
    };

    init();
  }, [getProducts]);

  const handleChange = (id, key, value) => {
    const updated = products.map((p) =>
      p.id === id ? { ...p, [key]: value } : p,
    );

    setProducts(updated);
  };

  const COLUMNS = [
    { key: "articleNumber", label: "Article No.", width: "8rem" },
    { key: "name", label: "Product/Service", width: "auto" },
    { key: "inPrice", label: "In Price", width: "7rem", hide: "768px" },
    { key: "price", label: "Price", width: "7rem", hide: "768px" },
    { key: "unit", label: "Unit", width: "7rem", hide: "768px" },
    { key: "inStock", label: "In Stock", width: "7rem", hide: "1269px" },
    { key: "description", label: "Description", hide: "1269px" },
  ];

  return (
    <main className="pricelist-main-container">
      {/* Search Buttons */}
      <div className="searchs-buttons-container">
        <div className="search-container-group">
          <div className="search-input-container ">
            <input
              type="text"
              placeholder="Search Articl No..."
              className="search-input"
            />
            <span className="search-icon">
              <BiSearch />
            </span>
          </div>

          <div className="search-input-container ">
            <input
              type="text"
              placeholder="Search Product..."
              className="search-input"
            />
            <span className="search-icon">
              <BiSearch />
            </span>
          </div>
        </div>

        <div className="buttons-container">
          <div className="button-item">
            <span className="button-name">New Product</span>
            <span className="button-icon">
              <IoIosAddCircle
                style={{
                  color: "green",
                }}
              />
            </span>
          </div>

          <div className="button-item">
            <span className="button-name">Print List</span>
            <span className="button-icon">
              <BiPrinter
                style={{
                  color: "blue",
                }}
              />
            </span>
          </div>

          <div className="button-item">
            <span className="button-name">Advanced Mode</span>
            <label className="toogle-button">
              <input type="checkbox" />
              <span className="slider round"></span>
            </label>
          </div>
        </div>
      </div>

      {/* The pricelist itself */}
      <div className="products-container">
        <table className="products-table">
          <thead className="table-head-container">
            <tr>
              {COLUMNS.map((column) => {
                return (
                  <td
                    key={column.label}
                    className={`table-head-item ${column.hide ? `hide-${column.hide}` : ""}`}
                    style={{
                      width: column.width,
                    }}
                  >
                    {column.label}
                  </td>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {products.length === 0 ? (
              <tr>
                <td className="table-empty">No products found.</td>
              </tr>
            ) : (
              products.map((product) => (
                <tr key={product.articleNumber} className="product-row">
                  {COLUMNS.map((column) => (
                    <td
                      key={column.key}
                      className={`table-data-item ${column.hide ? `hide-${column.hide}` : ""}`}
                    >
                      <input
                        value={product[column.key] ?? ""}
                        onChange={(e) =>
                          handleChange(product.id, column.key, e.target.value)
                        }
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            updateProduct(
                              product.id,
                              transformProduct(product),
                            );
                          }
                        }}
                        className="table-input"
                      />
                    </td>
                  ))}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </main>
  );
}

export default Pricelist;
