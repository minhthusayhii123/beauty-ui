import styles from "./Menu.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

import { Wrapper as PopperWrapper } from "~/components/Popper";
import bannerImgae from "~/assets/images/bannerImage.webp";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Menu() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container h-100")}>
        <div className={cx("row")}>
          <div className={cx("col-12")}>
            <div className={cx("header-menu")}>
              <ul className={cx("menu-content")}>
                <li className={cx("menu-item")}>
                  <a href="/">Trang chủ</a>
                </li>
                <li className={cx("menu-item")}>
                  <a href="/intro">Giới thiệu</a>
                </li>

                <div>
                  <Tippy
                    // visible={true}
                    interactive={true}
                    placement="bottom"
                    render={(attrs) => (
                      <div className={cx("menu")} tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                          <div>
                            <div className={cx("wrapper-menu")}>
                              <div className={cx("col-md-9")}>
                                <ul
                                  className={cx(
                                    "list-menu d-flex p-0 flex-wrap"
                                  )}
                                >
                                  <li className={cx("list-menu-item")}>
                                    <h2 className={cx("list-menu-title")}>
                                      <a href="">Dưỡng da</a>
                                    </h2>
                                    <ul className={cx("list-menu-level-1")}>
                                      <li>
                                        <a href="">Mặt nạ</a>
                                      </li>
                                      <li>
                                        <a href="">Kem dưỡng</a>
                                      </li>
                                      <li>
                                        <a href="">Kem chống nắng</a>
                                      </li>
                                      <li>
                                        <a href="">Xịt khoáng</a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className={cx("list-menu-item")}>
                                    <h2 className={cx("list-menu-title")}>
                                      <a href="">Làm sạch</a>
                                    </h2>
                                    <ul className={cx("list-menu-level-1")}>
                                      <li>
                                        <a href="">Sữa rửa mặt</a>
                                      </li>
                                      <li>
                                        <a href="">Dầu tẩy trang</a>
                                      </li>
                                      <li>
                                        <a href="">Kem tẩy trang</a>
                                      </li>
                                      <li>
                                        <a href="">Nước tẩy trang</a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className={cx("list-menu-item")}>
                                    <h2 className={cx("list-menu-title")}>
                                      <a href="">Trang điểm nền</a>
                                    </h2>
                                    <ul className={cx("list-menu-level-1")}>
                                      <li>
                                        <a href="">Kem lót</a>
                                      </li>
                                      <li>
                                        <a href="">Kem tạo hiệu ứng</a>
                                      </li>
                                      <li>
                                        <a href="">Kem che khuyết điểm</a>
                                      </li>
                                      <li>
                                        <a href="">Phấn phủ bột</a>
                                      </li>
                                    </ul>
                                  </li>
                                  <li className={cx("list-menu-item")}>
                                    <h2 className={cx("list-menu-title")}>
                                      <a href="">Trang điểm mắt môi</a>
                                    </h2>
                                    <ul className={cx("list-menu-level-1")}>
                                      <li>
                                        <a href="">Son thỏi</a>
                                      </li>
                                      <li>
                                        <a href="">Son dưỡng</a>
                                      </li>
                                      <li>
                                        <a href="">Màu mắt</a>
                                      </li>
                                      <li>
                                        <a href="">Viền mắt</a>
                                      </li>
                                    </ul>
                                  </li>

                                  <li className={cx("list-menu-item")}>
                                    <h2 className={cx("list-menu-title")}>
                                      <a href="">Chăm sóc cơ thể</a>
                                    </h2>
                                    <ul className={cx("list-menu-level-1")}>
                                      <li>
                                        <a href="">Sữa tắm</a>
                                      </li>
                                      <li>
                                        <a href="">Sữa dưỡng thể</a>
                                      </li>
                                      <li>
                                        <a href="">Nước hoa</a>
                                      </li>
                                      <li>
                                        <a href="">Dầu gội, dầu xả</a>
                                      </li>
                                    </ul>
                                  </li>

                                  <li className={cx("list-menu-item")}>
                                    <h2 className={cx("list-menu-title")}>
                                      <a href="">Dược mỹ phẩm</a>
                                    </h2>
                                    <ul className={cx("list-menu-level-1")}>
                                      <li>
                                        <a href="">Dưỡng ẩm da</a>
                                      </li>
                                      <li>
                                        <a href="">Dưỡng trắng da</a>
                                      </li>
                                      <li>
                                        <a href="">Chống lão hóa da</a>
                                      </li>
                                      <li>
                                        <a href="">Tẩy tế bào chết</a>
                                      </li>
                                    </ul>
                                  </li>

                                  <li className={cx("list-menu-item")}>
                                    <h2 className={cx("list-menu-title")}>
                                      <a href="">Sức khỏe - Làm đẹp</a>
                                    </h2>
                                    <ul className={cx("list-menu-level-1")}>
                                      <li>
                                        <a href="">Tinh dầu</a>
                                      </li>
                                      <li>
                                        <a href="">Nước tẩy trang</a>
                                      </li>
                                      <li>
                                        <a href="">Thực phẩm chức năng</a>
                                      </li>
                                      <li>
                                        <a href="">Nước hoa</a>
                                      </li>
                                    </ul>
                                  </li>

                                  <li className={cx("list-menu-item")}>
                                    <h2 className={cx("list-menu-title")}>
                                      <a href="">Thực phẩm chức năng</a>
                                    </h2>
                                    <ul className={cx("list-menu-level-1")}>
                                      <li>
                                        <a href="">Vitamin và khoáng chất</a>
                                      </li>
                                      <li>
                                        <a href="">Chống lão hóa da</a>
                                      </li>
                                      <li>
                                        <a href="">Sữa dưỡng thể</a>
                                      </li>
                                      <li>
                                        <a href="">Dầu tẩy trang</a>
                                      </li>
                                    </ul>
                                  </li>
                                </ul>
                              </div>

                              <div className={cx("col-md-3")}>
                                <div className={cx("banner-image")}>
                                  <a href="">
                                    <img src={bannerImgae} alt="banner" />
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </PopperWrapper>
                      </div>
                    )}
                  >
                    <li className={cx("menu-item")}>
                      <a href="/products">
                        Sản phẩm
                        <FontAwesomeIcon
                          className={cx("menu-icon")}
                          icon={faCaretDown}
                        />
                      </a>
                    </li>
                  </Tippy>
                </div>

                <div>
                  <Tippy
                    // visible={true}
                    interactive={true}
                    placement="bottom"
                    // animation="fade"
                    render={(attrs) => (
                      <div tabIndex="-1" {...attrs}>
                        <PopperWrapper>
                          <ul className={cx("menu-sale")}>
                            <li className={cx("menu-sale-item")}>
                              <a href="">Vừa ra mắt</a>
                            </li>
                            <li className={cx("menu-sale-item")}>
                              <a href="">Big sale</a>
                            </li>
                          </ul>
                        </PopperWrapper>
                      </div>
                    )}
                  >
                    <li className={cx("menu-item")}>
                      <a href="/hot-product">
                        {" "}
                        Khuyến mãi hot
                        <FontAwesomeIcon
                          className={cx("menu-icon")}
                          icon={faCaretDown}
                        />
                      </a>
                    </li>
                  </Tippy>
                </div>
                <li className={cx("menu-item")}>
                  <a href="/news">Tin tức</a>
                </li>
                <li className={cx("menu-item")}>
                  <a href="/contact">Liên hệ</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* <Banner /> */}
    </div>
  );
}

export default Menu;
