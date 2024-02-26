import styles from "./ProductsSelling.module.scss";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import p1 from "~/assets/images/product1.jpg";
import p2 from "~/assets/images/p2.webp";
import p3 from "~/assets/images/p3.webp";
import p4 from "~/assets/images/p4.webp";
import p5 from "~/assets/images/product7.jpg";
import { responsive } from "~/utils/carousel";
import Product from "../Product";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const products = [
  {
    name: "Tinh chất cấp ẩm, sáng da L'Oreal Revitalift Serum 1.5% Hyaluronic Acid",
    urlImage: p1,
    priceCurrent: "319.000",
    priceOld: "419.000",
  },
  {
    name: "Serum L'Oreal Paris Glycolic Bright Hỗ Trợ Sáng Da 1.0%  Glycolic Acid 30Ml",
    urlImage: p2,
    priceCurrent: "365.000",
  },
  {
    name: "Sữa Dưỡng Thể OLAY B3+ Optics Glow & Radiance Vitamin C Dưỡng Trắng Da Toàn Thân ",
    urlImage: p3,
    priceCurrent: "245.000",
    priceOld: "500.000",
  },
  {
    name: "Tinh chất cấp ẩm, sáng da Olay Revitalift Serum 1.5% Hyaluronic Acid",
    urlImage: p4,
    priceCurrent: "150.000",
    priceOld: "500.000",
  },
  {
    name: "Dầu tẩy trang Hada Labo Advanced Nourish Hyaluron Cleansing Oil",
    urlImage: p5,
    priceCurrent: "216.000",
  },
];

function Products() {
  return (
    <div className={cx("section-product")}>
      <div className={cx("line-arrow")}></div>
      <div className={cx("container")}>
        <div className={cx("row")}>
          <div className={cx("col-lg-12")}>
            <div className={cx("heading-hotdeal")}>
              <h2 className={cx("title-head")}>
                <a href="/product">Sản phẩm bán chạy</a>
              </h2>
            </div>
          </div>

          <div className={cx("list-product")}>
            <Carousel focusOnSelect={true} responsive={responsive}>
              {products &&
                products.length > 1 &&
                products.map((product, index) => (
                  <Product product={product} key={index} />
                ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
