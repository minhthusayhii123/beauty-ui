import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import styles from "./Login.module.scss";
import { useNavigate } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import loginFb from "~/assets/images/loginFB.svg";
import loginGg from "~/assets/images/loginGG.svg";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import classNames from "classnames/bind";

import { db } from "~/config/firestore";

const cx = classNames.bind(styles);
function Login() {
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        showToastMessage();
        setTimeout(() => {
          navigate("/");
        }, 3000);
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
        <h1 className={cx("title-login")}>Đăng nhập tài khoản</h1>
        <div className={cx("except-login")}>
          Nếu đã có tài khoản, xin đăng nhập vào form dưới đây
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
            <form className={cx("login")} onSubmit={handleLogin}>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email:
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Mật khẩu:
                </label>
                <input
                  name="password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">
                Đăng nhập
              </button>
              <span className={cx("forget-pass")}>
                <a href="">Bạn quên mật khẩu?</a>
              </span>
            </form>

            <ToastContainer />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
