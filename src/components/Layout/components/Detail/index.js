import { useState } from "react";
import styles from "./Detail.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faCircle,
  faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";

import product1 from "~/assets/images/product1.jpg";
import l_1 from "~/assets/images/l-1.png";
import l from "~/assets/images/l.webp";
import l_2 from "~/assets/images/l-2.png";
import l_3 from "~/assets/images/l-3.png";
import l_4 from "~/assets/images/l-4.png";
import service_1 from "~/assets/images/service_1.png";
import service_2 from "~/assets/images/service_2.png";
import service_3 from "~/assets/images/service_3.png";

import Product from "../Product";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const products = [
  {
    name: "Tinh chất cấp ẩm, sáng da L'Oreal Revitalift Serum 1.5% Hyaluronic Acid",
    urlImage: l,
    priceCurrent: "319.000",
    priceOld: "419.000",
  },
  {
    name: "Serum L'Oreal Paris Glycolic Bright Hỗ Trợ Sáng Da 1.0%  Glycolic Acid 30Ml",
    urlImage: l_1,
    priceCurrent: "365.000",
  },
  {
    name: "Sữa Dưỡng Thể OLAY B3+ Optics Glow & Radiance Vitamin C Dưỡng Trắng Da Toàn Thân ",
    urlImage: l_2,
    priceCurrent: "245.000",
    priceOld: "500.000",
  },
  {
    name: "Tinh chất cấp ẩm, sáng da Olay Revitalift Serum 1.5% Hyaluronic Acid",
    urlImage: l_3,
    priceCurrent: "150.000",
    priceOld: "500.000",
  },
  {
    name: "Dầu tẩy trang Hada Labo Advanced Nourish Hyaluron Cleansing Oil",
    urlImage: l_4,
    priceCurrent: "216.000",
  },
  {
    name: "Tinh chất cấp ẩm, sáng da L'Oreal Revitalift Serum 1.5% Hyaluronic Acid",
    urlImage: l,
    priceCurrent: "319.000",
    priceOld: "419.000",
  },
];

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function DetailProduct() {
  const [quantity, setQuantity] = useState(1);

  const [activeTab, setActiveTab] = useState("tabs-1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const handleInputChange = (event) => {
    let newQuantity = parseInt(event.target.value);
    if (isNaN(newQuantity) || newQuantity < 1) {
      setQuantity(null);
    } else {
      setQuantity(newQuantity);
    }
  };
  return (
    <div>
      <div className={cx("bread-crumb")}>
        <div className={cx("container")}>
          <div className={cx("row")}>
            <div className={cx("col-lg-12")}>
              <div className={cx("list-bread-crumb")}>
                <ul>
                  <li>
                    <a href="/">Trang chủ</a>
                    <FontAwesomeIcon
                      className={cx("icon")}
                      icon={faAngleRight}
                    />
                  </li>
                  <li>
                    <a href="">Sản phẩm nổi bật</a>
                    <FontAwesomeIcon
                      className={cx("icon")}
                      icon={faAngleRight}
                    />
                  </li>
                  <li>
                    <a href="" className={cx("name-product-detail")}>
                      Tinh chất cấp ẩm, sáng da L'Oreal Revitalift Serum 1.5%
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className={cx("product")}>
          <div className={cx("container")}>
            <div className={cx("row")}>
              <div className={cx("col-lg-6")}>
                <div className={cx("content-left")}>
                  <div className={cx("default-img")}>
                    <a href="">
                      <img src={product1} alt="" />
                    </a>
                  </div>

                  <div className={cx("list-item")}>
                    <Carousel focusOnSelect={true} responsive={responsive}>
                      <div className={cx("menu-product-detail")}>
                        <div className={cx("item-img")}>
                          <a href="">
                            <img src={l} alt="" />
                          </a>
                        </div>
                      </div>
                      <div className={cx("menu-product-detail")}>
                        <div className={cx("item-img")}>
                          <a href="">
                            <img src={l_1} alt="" />
                          </a>
                        </div>
                      </div>
                      <div className={cx("menu-product-detail")}>
                        <div className={cx("item-img")}>
                          <a href="">
                            <img src={l_2} alt="" />
                          </a>
                        </div>
                      </div>
                      <div className={cx("menu-product-detail")}>
                        <div className={cx("item-img")}>
                          <a href="">
                            <img src={l_3} alt="" />
                          </a>
                        </div>
                      </div>
                      <div className={cx("menu-product-detail")}>
                        <div className={cx("item-img")}>
                          <a href="">
                            <img src={l_4} alt="" />
                          </a>
                        </div>
                      </div>
                    </Carousel>
                  </div>
                </div>
              </div>
              <div className={cx("col-lg-6")}>
                <h1 className={cx("title-product")}>
                  Tinh chất cấp ẩm, sáng da L'Oreal Revitalift Serum 1.5%
                </h1>
                <div className={cx("group-info")}>
                  <div className={cx("group-status")}>
                    <span className={cx("first-status")}>
                      <span>Thương hiệu: </span>
                      <span className={cx("status-name")}>Pháp</span>
                    </span>
                    <span className={cx("second-status")}>
                      <span className="p-1"> | </span>
                      <span> Tình trạng: </span>
                      <span className={cx("status-name")}>Còn hàng</span>
                    </span>
                  </div>
                  <div className={cx("price-box")}>
                    <div className={cx("special-price")}>319.000₫</div>
                    <del className={cx("old-price")}>219.000₫</del>
                  </div>

                  <div className={cx("product_description")}>
                    <span>Thông tin sản phẩm đang được cập nhật.</span>
                  </div>
                  <div className={cx("form-product-detail")}>
                    <div className={cx("col-sm-12")}>
                      <div className={cx("swatch-color")}>
                        <div className={cx("head-color")}>
                          Màu sắc:
                          <div className={cx("option-color")}>
                            <Tippy content="Đen">
                              <FontAwesomeIcon
                                className={cx("icon-checked")}
                                icon={faCircleCheck}
                              />
                            </Tippy>

                            <Tippy content="Hồng">
                              <FontAwesomeIcon
                                className={cx("icon-unchecked")}
                                icon={faCircle}
                              />
                            </Tippy>
                          </div>
                        </div>
                      </div>

                      <div className={cx("form_button_details")}>
                        <div className={cx("quantity")}>
                          <div className={cx("title-quantity")}>Số lượng: </div>
                          <div className={cx("input-quantity")}>
                            <button
                              className={cx("btn-left")}
                              onClick={decreaseQuantity}
                            >
                              -
                            </button>
                            <input
                              onChange={handleInputChange}
                              type="text"
                              value={quantity}
                            />
                            <button
                              className={cx("btn-right")}
                              onClick={increaseQuantity}
                            >
                              +
                            </button>
                          </div>
                        </div>
                        <div className={cx("button-action")}>
                          <button>
                            <span>Thêm vào giỏ hàng</span>
                          </button>
                        </div>
                        <div className={cx("call-phone")}>
                          <span>
                            Gọi đặt mua:
                            <a href="">0357609458</a>để nhanh chóng đặt hàng
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={cx("container")}>
        <div className={cx("row")}>
          <div className={cx("col-xs-12 col-lg-12")}>
            <div className={cx("section-service")}>
              <div className={cx("list-service")}>
                <div className={cx("item-service")}>
                  <div className={cx("col-item-service")}>
                    <span className={cx("img-service")}>
                      <img src={service_1} alt="" />
                    </span>
                    <div className={cx("content-service")}>
                      <span className={cx("title-service")}>
                        Giao hàng toàn quốc
                      </span>
                      <span className={cx("content-more")}>
                        Giao hàng toàn quốc với mức phí ưu đãi nhất
                      </span>
                    </div>
                  </div>
                </div>

                <div className={cx("item-service")}>
                  <div className={cx("col-item-service")}>
                    <span className={cx("img-service")}>
                      <img src={service_2} alt="" />
                    </span>
                    <div className={cx("content-service")}>
                      <span className={cx("title-service")}>
                        Hỗ trợ khách hàng
                      </span>
                      <span className={cx("content-more")}>
                        Hỗ trợ khách hàng 24/7 - Hãy gọi cho chúng tôi
                      </span>
                    </div>
                  </div>
                </div>

                <div className={cx("item-service")}>
                  <div className={cx("col-item-service")}>
                    <span className={cx("img-service")}>
                      <img src={service_3} alt="" />
                    </span>
                    <div className={cx("content-service")}>
                      <span className={cx("title-service")}>
                        Mua hàng giá ưu đãi
                      </span>
                      <span className={cx("content-more")}>
                        Cơ hội nhận khuyến mãi & giá sốc cuối tuần
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={cx("tab-h")}>
          <div className={cx("col-lg-12 col-md-12")}>
            <div>
              <ul className={cx("tabs-title")}>
                <li
                  className={cx("tabs-1", { active: activeTab === "tabs-1" })}
                  onClick={() => handleTabClick("tabs-1")}
                >
                  <h3> Mô tả sản phẩm</h3>
                </li>
                <li
                  className={cx("tabs-2", { active: activeTab === "tabs-2" })}
                  onClick={() => handleTabClick("tabs-2")}
                >
                  <h3> Hỏi đáp về sản phẩm</h3>
                </li>
              </ul>
            </div>
          </div>
          <div className={cx("tab-content")}>
            {activeTab === "tabs-1" && (
              <div
                className={cx("tab-pane", { active: activeTab === "tabs-1" })}
              >
                <div className={cx("content-tabs-1")}>
                  <p>
                    Kiara Phytoceuticals là thương hiệu chuyên về các sản phẩm
                    dạng dầu chăm sóc da của Úc, thương hiệu này cũng gắn liền
                    với nhiều loại dầu được yêu thích như Macadamia oil, camelia
                    oil, maracuja oil,… được sản xuất từ thiên nhiên, đảm bảo
                    chất lượng, độ tinh khiết, độ tươi mới an toàn cho người
                    dùng. Về dầu Argan, thì đây là loại dầu dưỡng da đắt đỏ bậc
                    nhất thế giới và được ví như “vàng lỏng” trong giới skincare
                    với nhiều tính năng đặc trưng như của em Kiara
                    Phytoceuticals Argan Oil này:
                  </p>
                  <br />
                  <p>
                    Giàu vitamin E, acid béo hàm lượng cao giúp làm ẩm và dịu da
                    hiệu quả. Chống lão hóa, cải thiện nếp nhăn, phục hồi độ đàn
                    hồi và tăng sinh collagen Cân bằng da bằng cách cung cấp độ
                    ẩm tự nhiên, chữa lành các tế bào hư, giảm viêm Giảm thâm
                    mụn, sẹo và ngăn ngừa mụn mới Ngoài ra, em này còn có công
                    dụng rất tốt trong việc phục hồi tóc bóng khỏe; nuôi dưỡng
                    móng không bị khô, giòn, dễ gãy; chữa ẩm cho môi khô nứt nẻ.
                    Sử dụng dầu Argan trước khi makeup hay trộn vào kem nền sẽ
                    giúp lớp nền được bóng khỏe, da mịn màng và kiềm dầu được
                    tốt hơn. Sản phẩm được giới thiệu hoàn toàn lành tính, có
                    thể sử dụng được cho trẻ em và phụ nữ có thai . Không chứa
                    hóa chất, không chất bảo quản, không hương liệu, phù hợp với
                    mọi loại da. Nên bảo quản sản phẩm trong môi trường mát mẻ,
                    dưới 25 độ C, và tránh ánh nắng.
                  </p>
                </div>
              </div>
            )}
            {activeTab === "tabs-2" && (
              <div
                className={cx("tab-pane", { active: activeTab === "tabs-2" })}
              >
                <p className={cx("content-tabs-2")}>
                  Các nội dung Hướng dẫn mua hàng viết ở đây
                </p>
              </div>
            )}
          </div>
        </div>
        <div className={cx("col-lg-12 related-product margin-bottom-30")}>
          <div className={cx("section-related-product")}>
            <div className={cx("module-header")}>
              <h2>
                <a href="">Sản phẩm liên quan</a>
              </h2>
            </div>
            <div className={cx("module-content")}>
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
    </div>
  );
}

export default DetailProduct;
