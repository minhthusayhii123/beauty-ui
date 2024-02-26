import styles from "./Contact.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleRight,
  faEnvelope,
  faLocationDot,
  faMobileAlt,
} from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Contact() {
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
                <span className={cx("all-products")}> Liên hệ</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={cx("page-contact")}>
        <div className={cx("container")}>
          <div className={cx("row")}>
            <div className={cx("col-md-4")}>
              <div className={cx("contact-h")}>
                <ul>
                  <li className={cx("item-contact")}>
                    <span className={cx("icon-contact")}>
                      <FontAwesomeIcon icon={faLocationDot} />
                    </span>
                    <p>Trung Mỹ Tây, Quận 12, Thành phố Hồ Chí Minh</p>
                  </li>

                  <li className={cx("item-contact")}>
                    <span className={cx("icon-contact")}>
                      <FontAwesomeIcon icon={faMobileAlt} />
                    </span>
                    <p>19006750</p>
                  </li>

                  <li className={cx("item-contact")}>
                    <span className={cx("icon-contact")}>
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <p>minhthuu1203@gmail.com</p>
                  </li>
                </ul>
              </div>

              <div className={cx("page-login-contact")}>
                <h1>
                  <span>Liên hệ với chúng tôi</span>
                </h1>
                <div className={cx("form-contact")}>
                  <form>
                    <div className="mb-3">
                      <input
                        placeholder="Họ và tên"
                        type="text"
                        className="form-control"
                      />
                    </div>

                    <div className="mb-3">
                      <input
                        placeholder="Email"
                        type="email"
                        className="form-control"
                      />
                    </div>

                    <div className="mb-3">
                      <textarea
                        placeholder="Nội dung"
                        className="form-control"
                      ></textarea>
                    </div>

                    <button type="submit" className="btn btn-primary">
                      Gửi liên hệ
                    </button>
                  </form>
                </div>
              </div>
            </div>
            <div className={cx("col-md-8")}>
              <div className={cx("wrapcontact")}>
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d31348.459884711898!2d106.6037416938671!3d10.845137165684434!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e6!4m3!3m2!1d10.826402199999999!2d106.6173419!4m5!1s0x317529d0eabab26d%3A0x720f8ac0f2582e45!2zUXXhuq1uIDEyLCBUaMOgbmggcGjhu5EgSOG7kyBDaMOtIE1pbmg!3m2!1d10.8671531!2d106.6413322!5e0!3m2!1svi!2s!4v1708614964437!5m2!1svi!2s"
                  style={{ border: "0" }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
