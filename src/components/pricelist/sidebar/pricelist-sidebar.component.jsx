import { BiSolidOffer } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { GiPaperTray } from "react-icons/gi";
import { IoIosJournal, IoIosLogOut, IoIosPricetag } from "react-icons/io";
import { IoBusiness } from "react-icons/io5";
import { LiaFileInvoiceSolid } from "react-icons/lia";
import { LuImport } from "react-icons/lu";
import { MdUnpublished } from "react-icons/md";
import useAuthStore from "../../../stores/auth.store";

import "./pricelist-sidebar.styles.css";

function PricelistSidebar() {
  const { logout } = useAuthStore();

  const handleLogout = async () => {
    await logout();
  };

  const SIDEBAR_ITEMS = [
    { label: "Invoices", icon: <LiaFileInvoiceSolid />, color: "blue" },
    { label: "Customers", icon: <FiUsers />, color: "green" },
    { label: "My Business", icon: <IoBusiness />, color: "blue" },
    { label: "Invoice Journal", icon: <IoIosJournal />, color: "blue" },
    { label: "Price List", icon: <IoIosPricetag />, color: "orange" },
    { label: "Multiple Invoicing", icon: <GiPaperTray />, color: "blue" },
    { label: "Unpaid Invoices", icon: <MdUnpublished />, color: "red" },
    { label: "Offer", icon: <BiSolidOffer />, color: "yellow" },
    { label: "Import/Export", icon: <LuImport />, color: "blue" },
    {
      label: "Log out",
      icon: <IoIosLogOut />,
      color: "red",
      action: handleLogout,
    },
  ];

  return (
    <aside className="pricelist-sidebar">
      <h2 className="sidebar-menu">Menu</h2>
      <div className="sidebar-items">
        {SIDEBAR_ITEMS.map((item) => (
          <div className="sidebar-item" onClick={item.action}>
            <span
              className="sidebar-icon"
              style={{
                color: item.color,
              }}
            >
              {item.icon}
            </span>
            <span className="sidebar-label">{item.label}</span>
          </div>
        ))}
      </div>
    </aside>
  );
}

export default PricelistSidebar;
