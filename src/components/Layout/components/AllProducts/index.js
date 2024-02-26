import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

import p1 from "~/assets/images/product1.jpg";
import p2 from "~/assets/images/p2.webp";
import p3 from "~/assets/images/p3.webp";
import p4 from "~/assets/images/p4.webp";
import p5 from "~/assets/images/product7.jpg";

import styles from "./AllProducts.module.scss";
import Product from "../Product";
import ListMenuMini from "../ListProductMini";

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

const miniMenu = [
  {
    title: "Tinh chất cấp ẩm, sáng da L'Oreal Revitalift Serum 1.5%",
    urlImg: p1,
    currentPrice: "319.000",
    oldPrice: "319.000",
  },
  {
    title:
      "Serum L'Oreal Paris Glycolic Bright Hỗ Trợ Sáng Da 1.0%  Glycolic Acid 30Ml",
    urlImg: p2,
    currentPrice: "365.000",
    oldPrice: "519.000",
  },
  {
    title:
      "Sữa Dưỡng Thể OLAY B3+ Optics Glow & Radiance Vitamin C Dưỡng Trắng Da Toàn Thân ",
    urlImg: p3,
    currentPrice: "245.000",
    oldPrice: "500.000",
  },
  {
    title:
      "Tinh chất cấp ẩm, sáng da Olay Revitalift Serum 1.5% Hyaluronic Acid",
    urlImg: p4,
    currentPrice: "150.000",
    oldPrice: "319.000",
  },
  {
    title: "Dầu tẩy trang Hada Labo Advanced Nourish Hyaluron Cleansing Oil",
    urlImg: p5,
    currentPrice: "216.000",
    oldPrice: "319.000",
  },
];

function AllProducts() {
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
                <span className={cx("all-products")}> Tất cả sản phẩm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={cx("container")}>
        <div className={cx("row")}>
          <div className={cx("col-lg-3")}>
            <div className={cx("collection")}>
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
              <div className={cx("filter")}>
                <div className={cx("title-filter")}>
                  <h2>Thương hiệu</h2>
                </div>
                <div className={cx("filter-group")}>
                  <ul>
                    <li>
                      <span>
                        <input type="checkbox" name="" id="mycheckbox" />
                        <label htmlFor="mycheckbox">
                          <p className={cx("my-check-title")}>AHA</p>
                        </label>
                      </span>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" name="" id="mycheckbox" />
                        <label htmlFor="mycheckbox">
                          <p className={cx("my-check-title")}>Aroma</p>
                        </label>
                      </span>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" name="" id="mycheckbox" />
                        <label htmlFor="mycheckbox">
                          <p className={cx("my-check-title")}>Benefit</p>
                        </label>
                      </span>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" name="" id="mycheckbox" />
                        <label htmlFor="mycheckbox">
                          <p className={cx("my-check-title")}>Burberry</p>
                        </label>
                      </span>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" name="" id="mycheckbox" />
                        <label htmlFor="mycheckbox">
                          <p className={cx("my-check-title")}>Chloé</p>
                        </label>
                      </span>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" name="" id="mycheckbox" />
                        <label htmlFor="mycheckbox">
                          <p className={cx("my-check-title")}>
                            Christian Louboutin
                          </p>
                        </label>
                      </span>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" name="" id="mycheckbox" />
                        <label htmlFor="mycheckbox">
                          <p className={cx("my-check-title")}> Dior</p>
                        </label>
                      </span>
                    </li>

                    <li>
                      <span>
                        <input type="checkbox" name="" id="mycheckbox" />
                        <label htmlFor="mycheckbox">
                          <p className={cx("my-check-title")}>
                            {" "}
                            Dolce & Gabbana
                          </p>
                        </label>
                      </span>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" name="" id="mycheckbox" />
                        <label htmlFor="mycheckbox">
                          <p className={cx("my-check-title")}>Lancôme</p>
                        </label>
                      </span>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" name="" id="mycheckbox" />
                        <label htmlFor="mycheckbox">
                          <p className={cx("my-check-title")}>L'Occitane</p>
                        </label>
                      </span>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" name="" id="mycheckbox" />
                        <label htmlFor="mycheckbox">
                          <p className={cx("my-check-title")}>Louboutin Diva</p>
                        </label>
                      </span>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" name="" id="mycheckbox" />
                        <label htmlFor="mycheckbox">
                          <p className={cx("my-check-title")}>
                            Make Up For Ever
                          </p>
                        </label>
                      </span>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" name="" id="mycheckbox" />
                        <label htmlFor="mycheckbox">
                          <p className={cx("my-check-title")}>Marc Jacobs</p>
                        </label>
                      </span>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" name="" id="mycheckbox" />
                        <label htmlFor="mycheckbox">
                          <p className={cx("my-check-title")}> Maybelline</p>
                        </label>
                      </span>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" name="" id="mycheckbox" />
                        <label htmlFor="mycheckbox">
                          <p className={cx("my-check-title")}>Moon Shadow</p>
                        </label>
                      </span>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" name="" id="mycheckbox" />
                        <label htmlFor="mycheckbox">
                          <p className={cx("my-check-title")}>Oriflame</p>
                        </label>
                      </span>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" name="" id="mycheckbox" />
                        <label htmlFor="mycheckbox">
                          <p className={cx("my-check-title")}>Vichy</p>
                        </label>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
              <div className={cx("filter-price")}>
                <div className={cx("filter-price-title")}>
                  <h2>Khoảng giá</h2>
                </div>
                <div className={cx("filter-group")}>
                  <ul>
                    <li>
                      <span>
                        <input type="checkbox" name="" id="mycheckbox" />
                        <label htmlFor="mycheckbox">
                          <p className={cx("my-check-title")}>
                            Giá dưới 100.000đ
                          </p>
                        </label>
                      </span>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" name="" id="mycheckbox" />
                        <label htmlFor="mycheckbox">
                          <p className={cx("my-check-title")}>
                            100.000đ - 200.000đ
                          </p>
                        </label>
                      </span>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" name="" id="mycheckbox" />
                        <label htmlFor="mycheckbox">
                          <p className={cx("my-check-title")}>
                            200.000đ - 300.000đ
                          </p>
                        </label>
                      </span>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" name="" id="mycheckbox" />
                        <label htmlFor="mycheckbox">
                          <p className={cx("my-check-title")}>
                            300.000đ - 500.000đ
                          </p>
                        </label>
                      </span>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" name="" id="mycheckbox" />
                        <label htmlFor="mycheckbox">
                          <p className={cx("my-check-title")}>
                            500.000đ - 1.000.000đ
                          </p>
                        </label>
                      </span>
                    </li>
                    <li>
                      <span>
                        <input type="checkbox" name="" id="mycheckbox" />
                        <label htmlFor="mycheckbox">
                          <p className={cx("my-check-title")}>
                            Giá trên 1.000.000đ
                          </p>
                        </label>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className={cx("filter-color")}>
                <div className={cx("filter-color-title")}>
                  <h2>Màu sắc</h2>
                </div>
                <div className={cx("filter-color-group")}>
                  <div className={cx("color-option", "yellow")}></div>
                  <div className={cx("color-option", "purple")}></div>
                  <div className={cx("color-option", "red")}></div>
                  <div className={cx("color-option", "green")}></div>
                  <div className={cx("color-option", "pink")}></div>
                  <div className={cx("color-option", "orange")}></div>
                </div>
              </div>
              <div className={cx("filter-hightlight")}>
                <div className={cx("filter-hightlight-title")}>
                  <h2>
                    <a href="">Sản phẩm nổi bật</a>
                  </h2>
                </div>
                <div className={cx("product-mini-lists")}>
                  {miniMenu &&
                    miniMenu.length > 1 &&
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

          <div className={cx("navigation-bar clearfix mt-4")}>
            <ul className={cx("navigation-list")}>
              <li className={cx("navigation-item")}>
                <a href="#">
                  <FontAwesomeIcon
                    className={cx("icon-last")}
                    icon={faAngleDoubleLeft}
                  />
                </a>
              </li>
              <li className={cx("navigation-item")}>
                <a href="#">1 </a>
              </li>
              <li className={cx("navigation-item")}>
                <a href="#">2</a>
              </li>
              <li className={cx("navigation-item")}>
                <a href="#">3</a>
              </li>
              <li className={cx("navigation-item")}>
                <a href="#">
                  <FontAwesomeIcon
                    className={cx("icon-last")}
                    icon={faAngleDoubleRight}
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
