import styles from "./Product3ce.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import lip_3ce_1 from "~/assets/images/lip-3ce-1.webp";
import lip_3ce_2 from "~/assets/images/lip-3ce-2.webp";
import mahong_1 from "~/assets/images/mahong-3ce-1.webp";
import mahong_2 from "~/assets/images/mahong-3ce-2.webp";
import p3ce from "~/assets/images/3ce.webp";
import sp3ce_2 from "~/assets/images/sp3ce-2.webp";
import sp3ce_4 from "~/assets/images/sp3ce-4.webp";
import sp3ce_5 from "~/assets/images/sp3ce-5.webp";
import sp3ce_7 from "~/assets/images/sp3ce-7.webp";
import fix from "~/assets/images/fixer-3ce.webp";
import son_3ce from "~/assets/images/son-3ce.webp";
import bangmat from "~/assets/images/bangmat3ce.webp";
import sp3ce from "~/assets/images/sp-3ce.webp";
import sp3ce_1 from "~/assets/images/sp-3ce-1.webp";
import sp3ce_3 from "~/assets/images/sp-3ce-2.jpg";

import Categories from "~/components/Layout/components/Products/Categories";
import Brands from "~/components/Layout/components/Products/Brands";
import PriceRange from "~/components/Layout/components/Products/PriceRange";
import ListColor from "~/components/Layout/components/Products/ListColor";
import Outstaning from "~/components/Layout/components/Products/Outstanding";
import StatusProduct from "~/components/Layout/components/Products/StatusProduct";
import Product from "~/components/Layout/components/Product";
import ListMenuMini from "~/components/Layout/components/ListProductMini";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const products = [
  {
    name: "3CE BLUR MATTE LIPSTICK 3CE",
    urlImage: lip_3ce_1,
    priceCurrent: "355.000",
  },
  {
    name: "3CE SHINE REFLECTOR 3CE 3CE",
    urlImage: lip_3ce_2,
    priceCurrent: "380.000",
  },
  {
    name: "3CE NEW TAKE FACE BLUSHER",
    urlImage: mahong_1,
    priceCurrent: "395.000",
  },
  {
    name: "3CE VELVET LIQUID BLUSHER",
    urlImage: mahong_2,
    priceCurrent: "340.000",
  },
  {
    name: "3CE SOFT MATTE LIPSTICK 3CE",
    urlImage: p3ce,
    priceCurrent: "390.000",
  },
  {
    name: "3CE NEW TAKE EYESHADOW PALETTE",
    urlImage: sp3ce_2,
    priceCurrent: "999.000",
  },
  {
    name: "3CE MAKE UP FIXER MIST 3CE",
    urlImage: fix,
    priceCurrent: "360.000",
  },
  {
    name: "3CE SOFT MATTE LIPSTICK 3CE",
    urlImage: sp3ce_4,
    priceCurrent: "325.000",
  },
  {
    name: "3CE MULTI EYE COLOR PALETTE",
    urlImage: sp3ce_5,
    priceCurrent: "680.000",
  },
  {
    name: "3CE 3CE NAIL 3CE LACQUER 3CE",
    urlImage: sp3ce_7,
    priceCurrent: "160.000",
  },
  {
    name: "3CE MULTI EYE COLOR PALETTE #BUTTER CREAM",
    urlImage: bangmat,
    priceCurrent: "780.000",
  },
  {
    name: "3CE SOFT MATTE LIPSTICK #SOFT MELLOW",
    urlImage: son_3ce,
    priceCurrent: "325.000",
  },
  {
    name: "3CE MOOD RECIPE FACE BLUSH",
    urlImage: sp3ce,
    priceCurrent: "360.000",
  },
  {
    name: "3CE GLOW LIP COLOR #LITTLE GROUND",
    urlImage: sp3ce_1,
    priceCurrent: "390.000",
  },
  {
    name: "3CE GLAZE LIP TINT #ANY BETTER",
    urlImage: sp3ce_3,
    priceCurrent: "295.000",
  },
];
const miniMenu = [
  {
    title: "3CE BLUR MATTE LIPSTICK",
    urlImg: lip_3ce_1,
    currentPrice: "555.000",
    oldPrice: "355.000",
  },
  {
    title: "3CE SHINE REFLECTOR",
    urlImg: lip_3ce_2,
    currentPrice: "380.000",
    oldPrice: "480.000",
  },
  {
    title: "3CE NEW TAKE FACE BLUSHER",
    urlImg: mahong_1,
    currentPrice: "495.000",
    oldPrice: "395.000",
  },
  {
    title: "3CE VELVET LIQUID BLUSHER",
    urlImg: mahong_2,
    currentPrice: "450.000",
    oldPrice: "340.000",
  },
  {
    title: "3CE SOFT MATTE LIPSTICK",
    urlImg: p3ce,
    currentPrice: "1.319.000",
    oldPrice: "999.000",
  },
];

function Product3ce() {
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
                <span className={cx("all-products")}>3ce</span>
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
    </div>
  );
}

export default Product3ce;
