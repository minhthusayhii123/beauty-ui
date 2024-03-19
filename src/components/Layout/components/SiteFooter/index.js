import styles from "./SiteFooter.module.scss";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function SiteFooter() {
  return (
    <div className={cx("new-letter")}>
      <div className={cx("container")}>
        <div className={cx("row")}>
          <div className={cx("col-lg-6 col-md-6")}>
            <div className={cx("left-heading")}>
              <h3>Đăng ký nhận tin khuyến mại</h3>
            </div>
          </div>
          <div className={cx("col-lg-6 col-md-6")}>
            <form action="">
              <div className={cx("input-group")}>
                <input
                  type="email"
                  className={cx("form-input")}
                  placeholder="Nhập Email của bạn"
                />
                <span className={cx("btn-email")}>
                  <button>Đăng ký</button>
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SiteFooter;
