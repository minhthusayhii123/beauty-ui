import styles from "./Product.module.scss";
import sale from "~/assets/images/sale.webp";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Product({ product }) {
  const { name, urlImage, priceCurrent, priceOld } = product;
  return (
    <div className={cx("border-wrap")}>
      <div className={cx("products")}>
        <div className={cx("product-item")}>
          <div className={cx("product-border")}>
            <div className={cx("thumbnail")}>
              <a href="/detail">
                <img src={urlImage} alt="" />
              </a>
              {priceOld && (
                <div className={cx("flash-sale")}>
                  <img src={sale} alt="" />
                </div>
              )}
            </div>
            <div className={cx("info-product")}>
              <h3 className={cx("product-name")}>
                <a href="#">{name}</a>
              </h3>
              <div className={cx("none")}></div>
              <div className={cx("product-price")}>
                <div className={cx("price-current")}>
                  <span>{priceCurrent}₫</span>
                </div>
                {priceOld && (
                  <div className={cx("price-old")}>
                    <span>{priceOld}₫</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
