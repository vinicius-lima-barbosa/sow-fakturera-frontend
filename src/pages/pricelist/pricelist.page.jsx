import PricelistHeader from "../../components/pricelist/header/pricelist-header.component";
import "./pricelist.styles.css";

function PriceList() {
  return (
    <main className="pricelist-main-container">
      {/* pricelist header */}
      <PricelistHeader />

      {/* pricelist sidebar */}
      <aside></aside>

      {/* main content */}
      <main></main>
    </main>
  );
}

export default PriceList;
