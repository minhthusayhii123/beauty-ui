import styles from "./News.module.scss";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import tip1 from "~/assets/images/tip1.webp";
import tip2 from "~/assets/images/tip2.webp";
import tip3 from "~/assets/images/tip3.webp";
import tip4 from "~/assets/images/tip4.jpg";

import BlogItem from "../BlogItem";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const news = [
  {
    urlImage: tip1,
    titleBlog: "Mách cho bạn bí quyết trị nám tại nhà hiệu quả nhất",
    content:
      "Da chúng ta dễ bị thâm nám là do tiếp xúc với ánh nắng mặt trời thường xuyên, chế độ ăn uống nghỉ...",
  },
  {
    urlImage: tip2,
    titleBlog: "Mách cho bạn bí quyết trị nám tại nhà hiệu quả nhất",
    content:
      "Da chúng ta dễ bị thâm nám là do tiếp xúc với ánh nắng mặt trời thường xuyên, chế độ ăn uống nghỉ...",
  },
  {
    urlImage: tip3,
    titleBlog: "Mách cho bạn bí quyết trị nám tại nhà hiệu quả nhất",
    content:
      "Da chúng ta dễ bị thâm nám là do tiếp xúc với ánh nắng mặt trời thường xuyên, chế độ ăn uống nghỉ...",
  },
  {
    urlImage: tip1,
    titleBlog: "Mách cho bạn bí quyết trị nám tại nhà hiệu quả nhất",
    content:
      "Da chúng ta dễ bị thâm nám là do tiếp xúc với ánh nắng mặt trời thường xuyên, chế độ ăn uống nghỉ...",
  },
];

function News() {
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
                <span className={cx("all-products")}> Tin tức</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={cx("container")}>
        <div className={cx("row")}>
          <div className={cx("col-lg-9")}>
            <div className={cx("content-box")}>
              <div className={cx("box-heading")}>
                <h1>Tin tức</h1>
              </div>

              <div className={cx("row")}>
                {news &&
                  news.length > 1 &&
                  news.map((newitem, index) => (
                    <div className={cx("col-6")} key={index}>
                      <BlogItem newitem={newitem} />
                    </div>
                  ))}
              </div>
            </div>
          </div>
          <div className={cx("col-lg-3")}>
            <div className={cx("sidebar-category")}>
              <div className={cx("sidebar-category-title")}>
                <h2>Danh mục tin tức</h2>
              </div>
              <div className={cx("aside-content")}>
                <ul>
                  <li>
                    <a href="/">Trang chủ</a>
                  </li>
                  <li>
                    <a href="/intro">Giới thiệu</a>
                  </li>
                  <li>
                    <a href="/products">Sản phẩm</a>
                    <FontAwesomeIcon
                      className={cx("icon-menu")}
                      icon={faAngleRight}
                    />
                  </li>
                  <li>
                    <a href="/hot-product">Khuyến mãi hot</a>
                    <FontAwesomeIcon
                      className={cx("icon-menu")}
                      icon={faAngleRight}
                    />
                  </li>
                  <li>
                    <a href="/news">Tin tức</a>
                  </li>
                  <li>
                    <a href="/contact ">Liên hệ</a>
                  </li>
                </ul>
              </div>
              <div className={cx("blog-aside")}>
                <div className={cx("blog-aside-title")}>
                  <h2>Tin tức nổi bật</h2>
                </div>
                <div className={cx("aside-content-bottom")}>
                  <div className={cx("blog-list")}>
                    <div className={cx("loop-blog")}>
                      <div className={cx("thumb-left")}>
                        <a href="">
                          <img src={tip1} alt="" />
                        </a>
                      </div>
                      <div className={cx("name-right")}>
                        <h3>
                          <a href="">
                            Mách cho bạn bí quyết trị nám tại nhà hiệu quả nhất
                          </a>
                        </h3>
                      </div>
                    </div>

                    <div className={cx("loop-blog")}>
                      <div className={cx("thumb-left")}>
                        <a href="">
                          <img src={tip2} alt="" />
                        </a>
                      </div>
                      <div className={cx("name-right")}>
                        <h3>
                          <a href="">
                            Xu hướng lông mày năm 2018 không thể không biết
                          </a>
                        </h3>
                      </div>
                    </div>

                    <div className={cx("loop-blog")}>
                      <div className={cx("thumb-left")}>
                        <a href="">
                          <img src={tip3} alt="" />
                        </a>
                      </div>
                      <div className={cx("name-right")}>
                        <h3>
                          <a href="">
                            Top 3 cushion chống nắng HOT nhất 2018 bạn gái sành
                            điệu không thể bỏ qua
                          </a>
                        </h3>
                      </div>
                    </div>

                    <div className={cx("loop-blog")}>
                      <div className={cx("thumb-left")}>
                        <a href="">
                          <img src={tip4} alt="" />
                        </a>
                      </div>
                      <div className={cx("name-right")}>
                        <h3>
                          <a href="">
                            Những công dụng đặc biệt trong làm đẹp da và tóc từ
                            nước vo gạo
                          </a>
                        </h3>
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
  );
}

export default News;
