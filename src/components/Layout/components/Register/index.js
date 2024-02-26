import styles from "./Register.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import loginFb from "~/assets/images/loginFB.svg";
import loginGg from "~/assets/images/loginGG.svg";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Register() {
  return (
    <div className={cx("bread-crumb")}>
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
                <span className={cx("login-account")}>Đăng nhập tài khoản</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={cx("login-form")}>
        <h1 className={cx("title-login")}>Đăng ký tài khoản</h1>
        <div className={cx("except-login")}>
          Điền thông tin của bạn vào form dưới đây để đăng ký tài khoản của bạn
          nhé
        </div>
        <div className={cx("login-by-social")}>
          <a href="">
            <img src={loginFb} alt="" />
          </a>
          <a href="">
            <img src={loginGg} alt="" />
          </a>
        </div>
      </div>

      <div className={cx("row")}>
        <div className={cx("col-lg-12 col-md-12")}>
          <div className={cx("login-page")}>
            <form className={cx("login")}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Họ và tên:
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Mật khẩu:
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                />
              </div>
              <button type="submit" class="btn btn-primary">
                Đăng ký
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
