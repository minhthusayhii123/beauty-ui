import styles from "./ListProductMini.module.scss";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function ListProductMini({ itemMenu }) {
  const { urlImg, title, currentPrice, oldPrice } = itemMenu;
  return (
    <div className={cx("product-mini-item")}>
      <div className={cx("row")}>
        <div className={cx("col-sm-12")}>
          <div className={cx("item-small")}>
            <div className={cx("product-item")}>
              <a className={cx("img-product-item")} href="">
                <img src={urlImg} alt="" />
              </a>
              <div className={cx("product-mini-info")}>
                <h3>
                  <a href="">{title}</a>
                </h3>
                <div className={cx("price-box")}>
                  <span className={cx("product-price")}>{currentPrice}₫</span>
                  <span className={cx("old-price")}>
                    <del>{oldPrice}₫</del>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListProductMini;
