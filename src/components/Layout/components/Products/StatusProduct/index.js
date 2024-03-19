import styles from "./StatusProduct.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function StatusProduct() {
  return (
    <div className={cx("sort")}>
      <h3>Ưu tiên xem:</h3>
      <ul>
        <li className={cx("btn-quick-sort")}>
          <a href="">
            <i></i>
            Hàng mới về
          </a>
        </li>
        <li className={cx("btn-quick-sort")}>
          <a href="">
            <i></i>
            Hàng cũ nhất
          </a>
        </li>
        <li className={cx("btn-quick-sort")}>
          <a href="">
            <i></i>
            Giá tăng dần
          </a>
        </li>
        <li className={cx("btn-quick-sort")}>
          <a href="">
            <i></i>
            Giá giảm dần
          </a>
        </li>
      </ul>
    </div>
  );
}

export default StatusProduct;
