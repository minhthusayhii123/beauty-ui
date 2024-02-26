import styles from "./BrandsFirst.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

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

import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function BrandsFirst() {
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
                  <div className={cx("product-mini-item")}>
                    <div className={cx("row")}>
                      <div className={cx("col-sm-12")}>
                        <div className={cx("item-small")}>
                          <div className={cx("product-item")}>
                            <a className={cx("img-product-item")} href="">
                              <img src={son_3ce} alt="" />
                            </a>
                            <div className={cx("product-mini-info")}>
                              <h3>
                                <a href="">3CE SOFT MATTE LIPSTICK</a>
                              </h3>
                              <div className={cx("price-box")}>
                                <span className={cx("product-price")}>
                                  325.000₫
                                </span>
                                {/* <span className={cx("old-price")}>
                                  <del>319.000₫</del>
                                </span> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={cx("product-mini-item")}>
                    <div className={cx("row")}>
                      <div className={cx("col-sm-12")}>
                        <div className={cx("item-small")}>
                          <div className={cx("product-item")}>
                            <a className={cx("img-product-item")} href="">
                              <img src={sp3ce} alt="" />
                            </a>
                            <div className={cx("product-mini-info")}>
                              <h3>
                                <a href="">3CE MOOD RECIPE FACE BLUSH</a>
                              </h3>
                              <div className={cx("price-box")}>
                                <span className={cx("product-price")}>
                                  360.000₫
                                </span>
                                {/* <span className={cx("old-price")}>
                                  <del>319.000₫</del>
                                </span> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={cx("product-mini-item")}>
                    <div className={cx("row")}>
                      <div className={cx("col-sm-12")}>
                        <div className={cx("item-small")}>
                          <div className={cx("product-item")}>
                            <a className={cx("img-product-item")} href="">
                              <img src={sp3ce_5} alt="" />
                            </a>
                            <div className={cx("product-mini-info")}>
                              <h3>
                                <a href="">3CE MULTI EYE COLOR PALETTE</a>
                              </h3>
                              <div className={cx("price-box")}>
                                <span className={cx("product-price")}>
                                  680.000₫
                                </span>
                                <span className={cx("old-price")}>
                                  <del>780.000₫</del>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={cx("product-mini-item")}>
                    <div className={cx("row")}>
                      <div className={cx("col-sm-12")}>
                        <div className={cx("item-small")}>
                          <div className={cx("product-item")}>
                            <a className={cx("img-product-item")} href="">
                              <img src={sp3ce_2} alt="" />
                            </a>
                            <div className={cx("product-mini-info")}>
                              <h3>
                                <a href="">3CE NEW TAKE EYESHADOW PALETTE</a>
                              </h3>
                              <div className={cx("price-box")}>
                                <span className={cx("product-price")}>
                                  219.000₫
                                </span>
                                {/* <span className={cx("old-price")}>
                                  <del>319.000₫</del>
                                </span> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={cx("product-mini-item")}>
                    <div className={cx("row")}>
                      <div className={cx("col-sm-12")}>
                        <div className={cx("item-small-last")}>
                          <div className={cx("product-item")}>
                            <a className={cx("img-product-item")} href="">
                              <img src={sp3ce_3} alt="" />
                            </a>
                            <div className={cx("product-mini-info")}>
                              <h3>
                                <a href="">3CE GLAZE LIP TINT #ANY BETTER</a>
                              </h3>
                              <div className={cx("price-box")}>
                                <span className={cx("product-price")}>
                                  295.000₫
                                </span>
                                <span className={cx("old-price")}>
                                  <del>395 .000₫</del>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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
                  <div className={cx("col-lg-4")}>
                    <div className={cx("product_border")}>
                      <div className={cx("product-box-h")}>
                        <div className={cx("product-thumbnail")}>
                          <a href="">
                            <img src={lip_3ce_1} alt="" />
                          </a>
                        </div>
                        <div className={cx("product-info")}>
                          <h3>3CE BLUR MATTE LIPSTICK</h3>
                          <div className={cx("product-hides")}>
                            <span>355.000₫</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={cx("col-lg-4")}>
                    <div className={cx("product_border")}>
                      <div className={cx("product-box-h")}>
                        <div className={cx("product-thumbnail")}>
                          <a href="">
                            <img src={lip_3ce_2} alt="" />
                          </a>
                        </div>
                        <div className={cx("product-info")}>
                          <h3>3CE SHINE REFLECTOR</h3>
                          <div className={cx("product-hides")}>
                            <span>380.000₫</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={cx("col-lg-4")}>
                    <div className={cx("product_border")}>
                      <div className={cx("product-box-h")}>
                        <div className={cx("product-thumbnail")}>
                          <a href="">
                            <img src={mahong_1} alt="" />
                          </a>
                        </div>
                        <div className={cx("product-info")}>
                          <h3>3CE NEW TAKE FACE BLUSHER</h3>
                          <div className={cx("product-hides")}>
                            <span>395.000₫</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={cx("col-lg-4")}>
                    <div className={cx("product_border")}>
                      <div className={cx("product-box-h")}>
                        <div className={cx("product-thumbnail")}>
                          <a href="">
                            <img src={mahong_2} alt="" />
                          </a>
                        </div>
                        <div className={cx("product-info")}>
                          <h3>3CE VELVET LIQUID BLUSHER</h3>
                          <div className={cx("product-hides")}>
                            <span>340.000₫</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={cx("col-lg-4")}>
                    <div className={cx("product_border")}>
                      <div className={cx("product-box-h")}>
                        <div className={cx("product-thumbnail")}>
                          <a href="">
                            <img src={p3ce} alt="" />
                          </a>
                        </div>
                        <div className={cx("product-info")}>
                          <h3>3CE SOFT MATTE LIPSTICK</h3>
                          <div className={cx("product-hides")}>
                            <span>390.000₫</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={cx("col-lg-4")}>
                    <div className={cx("product_border")}>
                      <div className={cx("product-box-h")}>
                        <div className={cx("product-thumbnail")}>
                          <a href="">
                            <img src={sp3ce_2} alt="" />
                          </a>
                        </div>
                        <div className={cx("product-info")}>
                          <h3>3CE NEW TAKE EYESHADOW PALETTE</h3>
                          <div className={cx("product-hides")}>
                            <span>999.000₫</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={cx("col-lg-4")}>
                    <div className={cx("product_border")}>
                      <div className={cx("product-box-h")}>
                        <div className={cx("product-thumbnail")}>
                          <a href="">
                            <img src={fix} alt="" />
                          </a>
                        </div>
                        <div className={cx("product-info")}>
                          <h3>3CE MAKE UP FIXER MIST</h3>
                          <div className={cx("product-hides")}>
                            <span>360.000₫</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className={cx("col-lg-4")}>
                    <div className={cx("product_border")}>
                      <div className={cx("product-box-h")}>
                        <div className={cx("product-thumbnail")}>
                          <a href="">
                            <img src={sp3ce_4} alt="" />
                          </a>
                        </div>
                        <div className={cx("product-info")}>
                          <h3>3CE SOFT MATTE LIPSTICK</h3>
                          <div className={cx("product-hides")}>
                            <span>325.000₫</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx("col-lg-4")}>
                    <div className={cx("product_border")}>
                      <div className={cx("product-box-h")}>
                        <div className={cx("product-thumbnail")}>
                          <a href="">
                            <img src={sp3ce_5} alt="" />
                          </a>
                        </div>
                        <div className={cx("product-info")}>
                          <h3>3CE MULTI EYE COLOR PALETTE</h3>
                          <div className={cx("product-hides")}>
                            <span>680.000₫</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx("col-lg-4")}>
                    <div className={cx("product_border")}>
                      <div className={cx("product-box-h")}>
                        <div className={cx("product-thumbnail")}>
                          <a href="">
                            <img src={sp3ce_7} alt="" />
                          </a>
                        </div>
                        <div className={cx("product-info")}>
                          <h3>3CE NAIL LACQUER</h3>
                          <div className={cx("product-hides")}>
                            <span>160.000₫</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx("col-lg-4")}>
                    <div className={cx("product_border")}>
                      <div className={cx("product-box-h")}>
                        <div className={cx("product-thumbnail")}>
                          <a href="">
                            <img src={bangmat} alt="" />
                          </a>
                        </div>
                        <div className={cx("product-info")}>
                          <h3>3CE MULTI EYE COLOR PALETTE #BUTTER CREAM</h3>
                          <div className={cx("product-hides")}>
                            <span>780.000₫</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx("col-lg-4")}>
                    <div className={cx("product_border")}>
                      <div className={cx("product-box-h")}>
                        <div className={cx("product-thumbnail")}>
                          <a href="">
                            <img src={son_3ce} alt="" />
                          </a>
                        </div>
                        <div className={cx("product-info")}>
                          <h3>3CE SOFT MATTE LIPSTICK #SOFT MELLOW</h3>
                          <div className={cx("product-hides")}>
                            <span>325.000₫</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx("col-lg-4")}>
                    <div className={cx("product_border")}>
                      <div className={cx("product-box-h")}>
                        <div className={cx("product-thumbnail")}>
                          <a href="">
                            <img src={sp3ce} alt="" />
                          </a>
                        </div>
                        <div className={cx("product-info")}>
                          <h3>3CE MOOD RECIPE FACE BLUSH</h3>
                          <div className={cx("product-hides")}>
                            <span>360.000₫</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx("col-lg-4")}>
                    <div className={cx("product_border")}>
                      <div className={cx("product-box-h")}>
                        <div className={cx("product-thumbnail")}>
                          <a href="">
                            <img src={sp3ce_1} alt="" />
                          </a>
                        </div>
                        <div className={cx("product-info")}>
                          <h3>3CE GLOW LIP COLOR #LITTLE GROUND</h3>
                          <div className={cx("product-hides")}>
                            <span>390.000₫</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={cx("col-lg-4")}>
                    <div className={cx("product_border")}>
                      <div className={cx("product-box-h")}>
                        <div className={cx("product-thumbnail")}>
                          <a href="">
                            <img src={sp3ce_3} alt="" />
                          </a>
                        </div>
                        <div className={cx("product-info")}>
                          <h3>3CE GLAZE LIP TINT #ANY BETTER</h3>
                          <div className={cx("product-hides")}>
                            <span>295.000₫</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
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

export default BrandsFirst;
