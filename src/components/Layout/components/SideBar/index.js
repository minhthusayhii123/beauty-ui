import { useState } from "react";
import styles from "./SideBar.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faClipboardList,
  faUserGroup,
  faRectangleList,
  faChartColumn,
  faRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import logo from "~/assets/images/logoAdmin.png";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const dataList = [
  {
    icon: faHouse,
    heading: "Dashboard",
  },
  {
    icon: faClipboardList,
    heading: "Orders",
  },
  {
    icon: faUserGroup,
    heading: "Customers",
  },
  {
    icon: faRectangleList,
    heading: "Products",
  },
  {
    icon: faChartColumn,
    heading: "Analytiscs",
  },
];
function SideBar({ onMenuClick }) {
  const [status, setStatus] = useState(0);
  const handleMenuClick = (index) => {
    setStatus(index);
    onMenuClick(index);
  };
  return (
    <div className={cx("side-bar")}>
      <div className={cx("side-bar-logo")}>
        <img src={logo} alt="" />
        <span>
          m<span>thu</span>u
        </span>
      </div>
      <div className={cx("menu")}>
        {dataList.map((item, index) => (
          <div
            key={index}
            className={cx("menu-item", { active: status === index })}
            onClick={() => handleMenuClick(index)}
          >
            <FontAwesomeIcon icon={item.icon} />
            <span>{item.heading}</span>
          </div>
        ))}
        <div className={cx("menu-item")}>
          <FontAwesomeIcon icon={faRightFromBracket} />
        </div>
      </div>
    </div>
  );
}

export default SideBar;
