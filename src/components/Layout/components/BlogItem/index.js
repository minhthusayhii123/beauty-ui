import styles from "./BlogItem.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserTie } from "@fortawesome/free-solid-svg-icons";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function BlogItem({ newitem }) {
  const { urlImage, titleBlog, content } = newitem;
  return (
    <div className={cx("blog-item")}>
      <div className={cx("blog-img")}>
        <a href="">
          <img src={urlImage} alt="" />
        </a>
      </div>
      <div className={cx("img-blog-left")}>
        <a href="">
          <div className={cx("content-left")}>
            <span className={cx("top-content")}>23</span>
            <span className={cx("bottom-content")}>Tháng 10</span>
          </div>
        </a>
      </div>

      <div className={cx("tips-content")}>
        <div className={cx("content-right")}>
          <h3>
            <a href="/news">{titleBlog}</a>
          </h3>
          <span className={cx("time-post")}>
            <FontAwesomeIcon className={cx("iconUser")} icon={faUserTie} />
            <p> Đăng bởi: Mthusayhi</p>
          </span>
        </div>
        <div className={cx("summary-item-blog")}>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
}

export default BlogItem;
