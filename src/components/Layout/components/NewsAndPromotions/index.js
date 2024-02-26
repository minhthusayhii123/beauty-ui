import styles from "./NewsAndPromotions.module.scss";

import tip1 from "~/assets/images/tip1.webp";
import tip2 from "~/assets/images/tip2.webp";
import tip3 from "~/assets/images/tip3.webp";

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
];
function NewsAndPromotions() {
  return (
    <div className={cx("section-promotion")}>
      <div className={cx("container")}>
        '
        <div className={cx("row")}>
          <div className={cx("col-lg-12 col-md-12")}>
            <div className={cx("heading")}>
              <h2>
                <a href="">Tin tức & khuyến mãi</a>
              </h2>
            </div>
            <div className={cx("content-blog")}>
              {news &&
                news.length > 1 &&
                news.map((newitem, index) => (
                  <BlogItem newitem={newitem} key={index} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewsAndPromotions;
