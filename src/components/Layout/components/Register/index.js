import { useState } from "react";
import styles from "./Register.module.scss";

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import loginFb from "~/assets/images/loginFB.svg";
import loginGg from "~/assets/images/loginGG.svg";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: "top-right",
    });
  };
  const ErrorMessage = () => {
    toast.error("Failed Notification !", {
      position: "top-right",
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        showToastMessage();
      })
      .catch((error) => {
        ErrorMessage();
      });
  };

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
            <form className={cx("login")} onSubmit={handleRegister}>
              {/* <div className="mb-3">
                <label htmlFor="fullname" className="form-label">
                  Họ và tên:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="fullname"
                  aria-describedby="fullnamelHelp"
                  onChange={(e) => setName(e.target.value)}
                />
              </div> */}
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email:
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  aria-describedby="emailHelp"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Mật khẩu:
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Đăng ký
              </button>
            </form>
            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
