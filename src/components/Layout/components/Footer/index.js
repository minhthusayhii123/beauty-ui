import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGoogle,
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

import payment from "~/assets/images/payment.webp";
import styles from "./Footer.module.scss";
import bgFooter from "~/assets/images/bgFooter.webp";
import logoFooter from "~/assets/images/logoFooter.webp";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Footer() {
  return (
    <div className={cx("footer")}>
      <div className={cx("mid-footer")}>
        <span>
          <img src={bgFooter} alt="" />
        </span>
        <div className={cx("container")}>
          <div className={cx("row")}>
            <div className={cx("col-lg-4")}>
              <div className={cx("first-wrapper")}>
                <div className={cx("logo-footer")}>
                  <a href="">
                    <img src={logoFooter} alt="" />
                  </a>
                </div>
                <div className={cx("content")}>
                  <h4 className={cx("title-menu")}>
                    <span>
                      Shop mỹ phẩm Mthusayhi
                      <br />
                      Làm đẹp trở nên dễ dàng hơn
                    </span>
                  </h4>
                  <div className={cx("hotline-footer")}>
                    <ul>
                      <li>
                        Địa chỉ: Trung Mỹ Tây, Quận 12, Thành phố Hồ Chí Minh{" "}
                      </li>
                      <li>
                        Hotline:
                        <a href=""> 0357609458</a>
                      </li>
                      <li>
                        Email:
                        <a href=""> mthusayhi_@gmail.com</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            <div className={cx("col-lg-8")}>
              <div className={cx("row")}>
                <div className={cx("col-4")}>
                  <div className={cx("first")}>
                    <h4 className={cx("title-footer")}>
                      <a href="">Hỗ trợ khách hàng</a>
                    </h4>
                    <div className={cx("list-sp")}>
                      <ul>
                        <li>
                          <a href="/">Trang chủ</a>
                        </li>
                        <li>
                          <a href="/intro">Giới thiệu</a>
                        </li>
                        <li>
                          <a href="/products">Sản phẩm</a>
                        </li>
                        <li>
                          <a href="/hot-product">Khuyến mãi hot</a>
                        </li>
                        <li>
                          <a href="/news">Tin tức</a>
                        </li>
                        <li>
                          <a href="/contact">Liên hệ</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={cx("col-4")}>
                  <div className={cx("first")}>
                    <h4 className={cx("title-footer")}>
                      <a href="">Chính sách </a>
                    </h4>
                    <div className={cx("list-sp")}>
                      <ul>
                        <li>
                          <a href="/">Trang chủ</a>
                        </li>
                        <li>
                          <a href="/intro">Giới thiệu</a>
                        </li>
                        <li>
                          <a href="/products">Sản phẩm</a>
                        </li>
                        <li>
                          <a href="/hot-product">Khuyến mãi hot</a>
                        </li>
                        <li>
                          <a href="/news">Tin tức</a>
                        </li>
                        <li>
                          <a href="contact">Liên hệ</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className={cx("col-4")}>
                  <div className={cx("last")}>
                    <div className={cx("social-footer")}>
                      <h4 className={cx("title-footer")}>
                        <a href="#">Kết nối với chúng tôi</a>
                      </h4>
                      <ul className={cx("follow")}>
                        <li>
                          <a href="#">
                            <FontAwesomeIcon icon={faFacebook} />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FontAwesomeIcon icon={faTwitter} />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FontAwesomeIcon icon={faGoogle} />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <FontAwesomeIcon icon={faInstagram} />
                          </a>
                        </li>
                        <li>
                          <a href="">
                            <FontAwesomeIcon icon={faYoutube} />
                          </a>
                        </li>
                      </ul>
                    </div>
                    <div className={cx("mail-footer")}>
                      <h4>
                        <a href="#">Phương thức thanh toán</a>
                      </h4>
                      <ul className={cx("payment")}>
                        <li>
                          <a href="">
                            <img src={payment} alt="" />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={cx("footer-bottom")}>
          <div className={cx("container")}>
            <div className={cx("row")}>
              <div className={cx("col-lg-12")}>
                <div className={cx("wsp")}>
                  <span className={cx("content-first")}>
                    © Bản quyền thuộc về
                  </span>
                  <b> Cool Team </b>

                  <span className={cx("content-last")}> | Cung cấp bởi </span>
                  <a href=""> mthusayhi_</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
