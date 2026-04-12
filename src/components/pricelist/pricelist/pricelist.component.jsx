import { useEffect } from "react";
import { BiPrinter, BiSearch } from "react-icons/bi";
import { IoIosAddCircle } from "react-icons/io";
import useProductStore from "../../../stores/products.store";
import "./pricelist-component.styles.css";

function Pricelist() {
  const products = useProductStore((state) => state.products);
  const { getProducts } = useProductStore();

  useEffect(() => {
    const init = async () => {
      await getProducts();
    };

    init();
  }, [getProducts]);

  const COLUMNS = [
    { key: "articleNumber", label: "Article No." },
    { key: "name", label: "Product/Service" },
    { key: "inPrice", label: "In Price" },
    { key: "price", label: "Price" },
    { key: "unit", label: "Unit" },
    { key: "inStock", label: "In Stock" },
    { key: "description", label: "Description" },
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
          <thead>
            <tr>
              {COLUMNS.map((column) => {
                return (
                  <td key={column.label} className="table-head">
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
                    <td key={column.key}>{product[column.key]}</td>
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
