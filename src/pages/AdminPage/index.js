import React, { useState } from "react";

import styles from "./AdminPage.module.scss";
import classNames from "classnames/bind";
import SideBar from "~/components/Layout/components/SideBar";
import ProductsAdmin from "~/components/Layout/components/ProductsAdmin";
import HomePage from "~/components/Layout/components/HomePage";
const cx = classNames.bind(styles);

function AdminPage() {
  const [selectedMenu, setSelectedMenu] = useState(0);

  const handleMenuClick = (index) => {
    setSelectedMenu(index);
  };
  return (
    <div className={cx("wrapper")}>
      <div className={cx("wrapper-in")}>
        <SideBar onMenuClick={handleMenuClick} />

        <div className={cx("main-dash")}>
          {selectedMenu === 0 && <HomePage />}
          {selectedMenu === 1 && <h1>Orders</h1>}
          {selectedMenu === 2 && <h1>Customers</h1>}
          {selectedMenu === 3 && <ProductsAdmin />}
          {selectedMenu === 4 && <h1>Analytics</h1>}
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
