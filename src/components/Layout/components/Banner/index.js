import styles from "./Banner.module.scss";

import banner from "~/assets/images/banner.webp";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function Banner() {
  return (
    <div className={cx("wrapper")}>
      <img src={banner} alt="" />
    </div>
  );
}

export default Banner;
