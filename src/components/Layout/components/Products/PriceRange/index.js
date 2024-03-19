import styles from "./PriceRange.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function PriceRange() {
  return (
    <div className={cx("filter-price")}>
      <div className={cx("filter-price-title")}>
        <h2>Khoảng giá</h2>
      </div>
      <div className={cx("filter-group")}>
        <ul>
          <li>
            <span>
              <input type="checkbox" name="" />
              <label htmlFor="mycheckbox">
                <p className={cx("my-check-title")}>Giá dưới 100.000đ</p>
              </label>
            </span>
          </li>
          <li>
            <span>
              <input type="checkbox" name="" />
              <label htmlFor="mycheckbox">
                <p className={cx("my-check-title")}>100.000đ - 200.000đ</p>
              </label>
            </span>
          </li>
          <li>
            <span>
              <input type="checkbox" name="" />
              <label htmlFor="mycheckbox">
                <p className={cx("my-check-title")}>200.000đ - 300.000đ</p>
              </label>
            </span>
          </li>
          <li>
            <span>
              <input type="checkbox" name="" />
              <label htmlFor="mycheckbox">
                <p className={cx("my-check-title")}>300.000đ - 500.000đ</p>
              </label>
            </span>
          </li>
          <li>
            <span>
              <input type="checkbox" name="" />
              <label htmlFor="mycheckbox">
                <p className={cx("my-check-title")}>500.000đ - 1.000.000đ</p>
              </label>
            </span>
          </li>
          <li>
            <span>
              <input type="checkbox" name="" />
              <label htmlFor="mycheckbox">
                <p className={cx("my-check-title")}>Giá trên 1.000.000đ</p>
              </label>
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PriceRange;
