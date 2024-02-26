import styles from "./Header.module.scss";

import "bootstrap/dist/css/bootstrap.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faClipboardList,
  faEnvelope,
  faMapMarkerAlt,
  faPhoneVolume,
} from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Header() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("row")}>
          <div className={cx("col-7")}>
            <div className={cx("topbar-left")}>
              <ul className={cx("flex-container")}>
                <li>
                  <span>
                    <i className={cx("icon")}>
                      <FontAwesomeIcon icon={faPhoneVolume} />
                    </i>
                    <a href="">0357609458</a>
                  </span>
                </li>
                <li>
                  <span>
                    <i className={cx("icon")}>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </i>
                    <a href="">minhthuu1203@gmail.com</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className={cx("col-5")}>
            <div className={cx("topbar-right")}>
              <ul className={cx("flex-container")}>
                <li>
                  <span>
                    <i className={cx("icon")}>
                      <FontAwesomeIcon icon={faClipboardList} />
                    </i>
                    <a href="">Kiểm tra đơn hàng</a>
                  </span>
                </li>
                <li>
                  <span>
                    <i className={cx("icon")}>
                      <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </i>
                    <a href="">Hệ thống cửa hàng</a>
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
