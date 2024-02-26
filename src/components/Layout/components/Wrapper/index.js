import styles from "./Wrapper.module.scss";

import "bootstrap/dist/css/bootstrap.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import "tippy.js/dist/tippy.css";

import logo from "~/assets/images/logo.png";
import { Wrapper as PopperWrapper } from "~/components/Popper";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Wrapper() {
  // const [resultProfile, setResultProfile] = useState([])
  return (
    <div className={cx("wrapper")}>
      <div className={cx("container")}>
        <div className={cx("row")}>
          <div className={cx("col-lg-3 col-md-3")}>
            <div className={cx("logo")}>
              <a href="/">
                <img className={cx("logo-img")} src={logo} />
              </a>
            </div>
          </div>
          <div className={cx("col-lg-7 col-md-7")}>
            <div className={cx("search")}>
              <form className={cx("search-wrapper")}>
                <input
                  type="search"
                  placeholder="Tìm kiếm sản phẩm ..."
                  spellCheck={false}
                />
                <button className={cx("search-btn")}>
                  <FontAwesomeIcon icon={faSearch} />
                </button>
              </form>
            </div>
          </div>
          <div className={cx("col-lg-2 col-md-2")}>
            <div className={cx("topbar-right d-flex")}>
              <div className={cx("profile")}>
                <span className={cx("avt-profile")}>
                  <Tippy
                    // visible={true}
                    interactive={true}
                    placement="bottom"
                    render={(attrs) => (
                      <div
                        className={cx("profile-result")}
                        tabIndex="-1"
                        {...attrs}
                      >
                        <PopperWrapper>
                          <ul className={cx("ul-profile")}>
                            <li className={cx("login")}>
                              <a href="/login">Đăng nhập</a>
                            </li>
                            <li className={cx("register")}>
                              <a href="/register">Đăng ký</a>
                            </li>
                          </ul>
                        </PopperWrapper>
                      </div>
                    )}
                  >
                    <img src="https://bizweb.dktcdn.net/100/336/334/themes/939194/assets/businessman.svg?1706112573342" />
                  </Tippy>
                </span>
              </div>

              <div className={cx("mini-cart")}>
                <span className={cx("img-cart")}>
                  <Tippy
                    // visible={true}
                    interactive={true}
                    placement="bottom"
                    render={(attrs) => (
                      <div
                        className={cx("cart-result")}
                        tabIndex="-1"
                        {...attrs}
                      >
                        <PopperWrapper>
                          <ul className={cx("result-cartItem p-0")}>
                            <p className={cx("content-cart")}>
                              Không có sản phẩm nào trong giỏ hàng
                            </p>
                          </ul>
                        </PopperWrapper>
                      </div>
                    )}
                  >
                    <div>
                      <img src="//bizweb.dktcdn.net/100/336/334/themes/939194/assets/shopping-cart.svg?1706112573342" />
                      <p className={cx("number-cart")}>0</p>
                    </div>
                  </Tippy>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Wrapper;
