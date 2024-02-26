import styles from "./HotProduct.module.scss";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import banner_br from "~/assets/images/romand.jpg";
import romand_1 from "~/assets/images/romand-1.webp";
import romand_2 from "~/assets/images/romand-2.webp";
import romand_3 from "~/assets/images/romand-3.webp";
import romand_4 from "~/assets/images/romand-4.webp";
import romand_5 from "~/assets/images/romand-5.webp";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function HotProduct() {
  return (
    <div className={cx("section-product")}>
      <div className={cx("container")}>
        <div className={cx("row")}>
          <div className={cx("col-lg-3 col-md-3")}>
            <div className={cx("banner-img")}>
              <span>
                <img src={banner_br} alt="" />

                <h2 className={cx("title-img")}>
                  <a href="/romand">
                    Sản phẩm
                    <br />
                    rom&nd
                  </a>
                </h2>
                <a href="/romand" className={cx("btn-more")}>
                  Xem thêm
                </a>
              </span>
            </div>
          </div>

          <div className={cx("col-lg-9 col-md-9")}>
            <Carousel responsive={responsive}>
              <div className={cx("border-wrap")}>
                <div className={cx("products")}>
                  <div className={cx("product-item")}>
                    <div className={cx("product-border")}>
                      <div className={cx("thumbnail")}>
                        <a href="">
                          <img src={romand_1} alt="" />
                        </a>
                        {/* <div className={cx("flash-sale")}>
                          <img src={sale} alt="" />
                        </div> */}
                        {/* <div className={cx("btn-select")}>
                        <button className={cx("btn")}>Tùy chọn</button>
                      </div> */}
                      </div>
                      <div className={cx("info-product")}>
                        <h3 className={cx("product-name")}>
                          <a href="#">
                            SEE-THROUGH VEILIGHTER Romand See-Through
                            Veillighter{" "}
                          </a>
                        </h3>
                        <div className={cx("none")}></div>
                        <div className={cx("product-price")}>
                          <div className={cx("price-current")}>
                            <span>199.000₫</span>
                          </div>
                          {/* <div className={cx("price-old")}>
                            <span>319.000₫</span>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={cx("border-wrap")}>
                <div className={cx("products")}>
                  <div className={cx("product-item")}>
                    <div className={cx("product-border")}>
                      <div className={cx("thumbnail")}>
                        <a href="">
                          <img src={romand_2} alt="" />
                        </a>
                        {/* <div className={cx("flash-sale")}>
                          <img src={sale} alt="" />
                        </div> */}
                        {/* <div className={cx("btn-select")}>
                        <button className={cx("btn")}>Tùy chọn</button>
                      </div> */}
                      </div>
                      <div className={cx("info-product")}>
                        <h3 className={cx("product-name")}>
                          <a href="#">BETTER THAN EYES W03 DRY STRAWBERRY</a>
                        </h3>
                        <div className={cx("none")}></div>
                        <div className={cx("product-price")}>
                          <div className={cx("price-current")}>
                            <span>386.000₫</span>
                          </div>
                          {/* <div className={cx("price-old")}>
                            <span>319.000₫</span>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={cx("border-wrap")}>
                <div className={cx("products")}>
                  <div className={cx("product-item")}>
                    <div className={cx("product-border")}>
                      <div className={cx("thumbnail")}>
                        <a href="">
                          <img src={romand_3} alt="" />
                        </a>
                        {/* <div className={cx("flash-sale")}>
                          <img src={sale} alt="" />
                        </div> */}
                        {/* <div className={cx("btn-select")}>
                        <button className={cx("btn")}>Tùy chọn</button>
                      </div> */}
                      </div>
                      <div className={cx("info-product")}>
                        <h3 className={cx("product-name")}>
                          <a href="#">
                            HAN ALL FIX MASCARA Romand Han All Fix Mascara - Han
                            All Line
                          </a>
                        </h3>
                        <div className={cx("none")}></div>
                        <div className={cx("product-price")}>
                          <div className={cx("price-current")}>
                            <span>185.000₫</span>
                          </div>
                          {/* <div className={cx("price-old")}>
                            <span>319.000₫</span>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={cx("border-wrap")}>
                <div className={cx("products")}>
                  <div className={cx("product-item")}>
                    <div className={cx("product-border")}>
                      <div className={cx("thumbnail")}>
                        <a href="">
                          <img src={romand_4} alt="" />
                        </a>
                        {/* <div className={cx("flash-sale")}>
                          <img src={sale} alt="" />
                        </div> */}
                        {/* <div className={cx("btn-select")}>
                        <button className={cx("btn")}>Tùy chọn</button>
                      </div> */}
                      </div>
                      <div className={cx("info-product")}>
                        <h3 className={cx("product-name")}>
                          <a href="#">
                            DEWY·FUL WATER TINT Milk Romand Milk Grocery Dewyful
                            Water
                          </a>
                        </h3>
                        <div className={cx("none")}></div>
                        <div className={cx("product-price")}>
                          <div className={cx("price-current")}>
                            <span>190.000₫</span>
                          </div>
                          {/* <div className={cx("price-old")}>
                            <span>319.000₫</span>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={cx("border-wrap")}>
                <div className={cx("products")}>
                  <div className={cx("product-item")}>
                    <div className={cx("product-border")}>
                      <div className={cx("thumbnail")}>
                        <a href="">
                          <img src={romand_5} alt="" />
                        </a>
                        {/* <div className={cx("flash-sale")}>
                          <img src={sale} alt="" />
                        </div> */}
                        {/* <div className={cx("btn-select")}>
                        <button className={cx("btn")}>Tùy chọn</button>
                      </div> */}
                      </div>
                      <div className={cx("info-product")}>
                        <h3 className={cx("product-name")}>
                          <a href="#">
                            BETTER THAN FINISH
                            <br /> Phấn Phủ Dạng Nén
                          </a>
                        </h3>
                        <div className={cx("none")}></div>
                        <div className={cx("product-price")}>
                          <div className={cx("price-current")}>
                            <span>299.000₫</span>
                          </div>
                          {/* <div className={cx("price-old")}>
                            <span>319.000₫</span>
                          </div> */}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HotProduct;
