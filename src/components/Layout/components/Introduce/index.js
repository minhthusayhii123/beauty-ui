import styles from "./Intro.module.scss";


import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Introduce() {
  return (
    <div className={cx("intro")}>
      <div className={cx("container")}>
        <div className={cx("row")}>
          <div className={cx("col-xs-12 a-left")}>
            <ul className={cx("list-menu")}>
              <li className={cx("homePage")}>
                <a href="/">
                  <span>Trang chủ</span>
                </a>
                <span>
                  <FontAwesomeIcon
                    className={cx("icon-arrow")}
                    icon={faAngleRight}
                  />
                </span>
              </li>

              <li>
                <span className={cx("introduce")}>Giới thiệu</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={cx("page-intro")}>
        <div className={cx("container")}>
          <div className={cx("row")}>
            <div className={cx("col-xs-12 a-left")}>
              <div className={cx("title-intro-page")}>
                <h1>
                  <a href="">Giới thiệu</a>
                </h1>
              </div>
              <div className={cx("content-intro-page")}>
                <p>
                  Trang giới thiệu giúp khách hàng hiểu rõ hơn về cửa hàng của
                  bạn. Hãy cung cấp thông tin cụ thể về việc kinh doanh, về cửa
                  hàng, thông tin liên hệ. Điều này sẽ giúp khách hàng cảm thấy
                  tin tưởng khi mua hàng trên website của bạn.
                </p>
                <p>Một vài gợi ý cho nội dung trang Giới thiệu:</p>
                <ul>
                  <li>Bạn là ai</li>
                  <li>Giá trị kinh doanh của bạn là gì</li>
                  <li>Địa chỉ cửa hàng</li>
                  <li>Bạn đã kinh doanh trong ngành hàng này bao lâu rồi</li>
                  <li>Bạn kinh doanh ngành hàng online được bao lâu</li>
                  <li>Đội ngũ của bạn gồm những ai</li>
                  <li>Thông tin liên hệ</li>
                  <li>
                    Liên kết đến các trang mạng xã hội (Twitter, Facebook)
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Introduce;
