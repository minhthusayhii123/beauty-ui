import styles from "./ProductDior.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import sp_dior from "~/assets/images/dior-sp1.webp";
import sp_dior_2 from "~/assets/images/dior-sp2.webp";
import sp_dior_3 from "~/assets/images/dior-1.webp";
import sp_dior_4 from "~/assets/images/dior-2.webp";
import sp_dior_5 from "~/assets/images/dior-3.webp";
import sp_dior_6 from "~/assets/images/dior-4.webp";
import sp_dior_7 from "~/assets/images/dior-5.webp";
import sp_dior_8 from "~/assets/images/dior-6.webp";
import sp_dior_9 from "~/assets/images/dior-7.webp";
import sp_dior_10 from "~/assets/images/dior-8.webp";
import sp_dior_11 from "~/assets/images/dior-9.webp";
import sp_dior_12 from "~/assets/images/dior-10.webp";
import sp_dior_13 from "~/assets/images/dior-11.webp";
import sp_dior_15 from "~/assets/images/dior-13.webp";

import ListMenuMini from "~/components/Layout/components/ListProductMini";
import Product from "~/components/Layout/components/Product";

import Categories from "~/components/Layout/components/Products/Categories";
import Brands from "~/components/Layout/components/Products/Brands";
import PriceRange from "~/components/Layout/components/Products/PriceRange";
import ListColor from "~/components/Layout/components/Products/ListColor";
import StatusProduct from "~/components/Layout/components/Products/StatusProduct";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const miniMenu = [
  {
    title: "Dầu tẩy trang Hada Labo Advanced Nourish Hyaluron Cleansing Oil",
    urlImg: sp_dior,
    currentPrice: "319.000",
    oldPrice: "319.000",
  },
  {
    title: "Dầu tẩy trang Hada Labo Advanced Nourish Hyaluron Cleansing Oil",
    urlImg: sp_dior_10,
    currentPrice: "319.000",
    oldPrice: "319.000",
  },
  {
    title: "Dầu tẩy trang Hada Labo Advanced Nourish Hyaluron Cleansing Oil",
    urlImg: sp_dior_11,
    currentPrice: "319.000",
    oldPrice: "319.000",
  },
  {
    title: "Dầu tẩy trang Hada Labo Advanced Nourish Hyaluron Cleansing Oil",
    urlImg: sp_dior_12,
    currentPrice: "319.000",
    oldPrice: "319.000",
  },
  {
    title: "Dầu tẩy trang Hada Labo Advanced Nourish Hyaluron Cleansing Oil",
    urlImg: sp_dior_13,
    currentPrice: "319.000",
    oldPrice: "319.000",
  },
];

const products = [
  {
    name: "Tinh chất cấp ẩm, sáng da L'Oreal Revitalift Serum 1.5% Hyaluronic Acid",
    urlImage: sp_dior,
    priceCurrent: "319.000",
    priceOld: "419.000",
  },
  {
    name: "Serum L'Oreal Paris Glycolic Bright Hỗ Trợ Sáng Da 1.0%  Glycolic Acid 30Ml",
    urlImage: sp_dior_15,
    priceCurrent: "365.000",
  },
  {
    name: "Sữa Dưỡng Thể OLAY B3+ Optics Glow & Radiance Vitamin C Dưỡng Trắng Da Toàn Thân ",
    urlImage: sp_dior_2,
    priceCurrent: "245.000",
    priceOld: "500.000",
  },
  {
    name: "Tinh chất cấp ẩm, sáng da Olay Revitalift Serum 1.5% Hyaluronic Acid",
    urlImage: sp_dior_3,
    priceCurrent: "150.000",
    priceOld: "500.000",
  },
  {
    name: "Dầu tẩy trang Hada Labo Advanced Nourish Hyaluron Cleansing Oil",
    urlImage: sp_dior_4,
    priceCurrent: "216.000",
  },
  {
    name: "Tinh chất cấp ẩm, sáng da L'Oreal Revitalift Serum 1.5% Hyaluronic Acid",
    urlImage: sp_dior_5,
    priceCurrent: "319.000",
    priceOld: "419.000",
  },
  {
    name: "Serum L'Oreal Paris Glycolic Bright Hỗ Trợ Sáng Da 1.0%  Glycolic Acid 30Ml",
    urlImage: sp_dior_6,
    priceCurrent: "365.000",
  },
  {
    name: "Sữa Dưỡng Thể OLAY B3+ Optics Glow & Radiance Vitamin C Dưỡng Trắng Da Toàn Thân ",
    urlImage: sp_dior_7,
    priceCurrent: "245.000",
    priceOld: "500.000",
  },
  {
    name: "Tinh chất cấp ẩm, sáng da Olay Revitalift Serum 1.5% Hyaluronic Acid",
    urlImage: sp_dior_8,
    priceCurrent: "150.000",
    priceOld: "500.000",
  },
  {
    name: "Dầu tẩy trang Hada Labo Advanced Nourish Hyaluron Cleansing Oil",
    urlImage: sp_dior_9,
    priceCurrent: "216.000",
  },
  {
    name: "Tinh chất cấp ẩm, sáng da Olay Revitalift Serum 1.5% Hyaluronic Acid",
    urlImage: sp_dior_10,
    priceCurrent: "150.000",
    priceOld: "500.000",
  },
  {
    name: "Dầu tẩy trang Hada Labo Advanced Nourish Hyaluron Cleansing Oil",
    urlImage: sp_dior_11,
    priceCurrent: "216.000",
  },
];

function ProductDior() {
  return (
    <div>
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
                <span className={cx("all-products")}>Dior</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={cx("container")}>
        <div className={cx("row")}>
          <div className={cx("col-lg-3")}>
            <div className={cx("collection")}>
              <Categories />
              <Brands />
              <PriceRange />
              <ListColor />
              <div className={cx("filter-hightlight")}>
                <div className={cx("filter-hightlight-title")}>
                  <h2>
                    <a href="">Sản phẩm nổi bật</a>
                  </h2>
                </div>
                <div className={cx("product-mini-lists")}>
                  {miniMenu &&
                    miniMenu.length &&
                    miniMenu.map((itemMenu, index) => (
                      <ListMenuMini itemMenu={itemMenu} key={index} />
                    ))}
                </div>

                <a href="" className={cx("see-more")}>
                  Xem thêm
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    style={{ marginLeft: "10px" }}
                  />
                </a>
              </div>
            </div>
          </div>

          <div className={cx("col-lg-9")}>
            <div className={cx("category-products")}>
              <div className={cx("row")}>
                <div className={cx("col-lg-4")}>
                  <h1 className={cx("category-products-title")}>
                    Tất cả sản phẩm
                  </h1>
                </div>
                <div className={cx("col-lg-8")}>
                  <StatusProduct />
                </div>
              </div>

              <div className={cx("products-view")}>
                <div className={cx("row")}>
                  {products &&
                    products.length > 1 &&
                    products.map((product, index) => (
                      <div className={cx("col-lg-4")} key={index}>
                        <Product product={product} />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDior;
