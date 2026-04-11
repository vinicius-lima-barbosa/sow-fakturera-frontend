import PricelistHeader from "../../components/pricelist/header/pricelist-header.component";
import Pricelist from "../../components/pricelist/pricelist/pricelist.component";
import PricelistSidebar from "../../components/pricelist/sidebar/pricelist-sidebar.component";
import "./pricelist.styles.css";

function PriceListPage() {
  return (
    <main className="pricelist-page-container">
      {/* pricelist header */}
      <PricelistHeader />

      {/* Page Layout */}
      <div className="main-layout">
        {/* pricelist sidebar */}
        <PricelistSidebar />

        {/* main content */}
        <Pricelist />
      </div>
    </main>
  );
}

export default PriceListPage;
