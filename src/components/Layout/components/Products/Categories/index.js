import styles from "./Categories.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Categories() {
  return (
    <div>
      <div className={cx("title-collection")}>
        <h2>Danh mục</h2>
      </div>
      <div className={cx("content-collection")}>
        <ul>
          <li>
            <a href="/">Trang chủ</a>
          </li>
          <li>
            <a href="/intro">Giới thiệu</a>
          </li>
          <li>
            <a href="/">Sản phẩm</a>
          </li>
          <li>
            <a href="/">Khuyến mãi hot</a>
          </li>
          <li>
            <a href="/">Tin tức</a>
          </li>
          <li>
            <a href="/">Liên hệ</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Categories;
