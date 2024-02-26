import styles from "./Slide.module.scss";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import brand_1 from "~/assets/images/brand_1.webp";
import brand_2 from "~/assets/images/brand_2.png";
import brand_3 from "~/assets/images/brand_3.png";
import brand_4 from "~/assets/images/brand_4.png";
import brand_5 from "~/assets/images/brand_5.png";
import brand_6 from "~/assets/images/brand_6.png";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function Slide() {
  return (
    <div className={cx("section-brand")}>
      <div className={cx("slide-banner")}>
        <div className={cx("row")}>
          <div className={cx("col-lg-3 col-md-3")}>
            <div className={cx("heading")}>
              <div className={cx("header-title")}>
                <span>Thương hiệu</span>
                <br />
                <span className={cx("btn-brand")}>Nổi bật</span>
              </div>
            </div>
          </div>
          <div className={cx("col-lg-9 col-md-9")}>
            <div className={cx("slide-brand")}>
              <div>
                <Carousel
                  // className={cx('custom-carousel')}
                  focusOnSelect={true}
                  responsive={responsive}
                >
                  <div>
                    <a href="#">
                      <img src={brand_1} alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src={brand_2} alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src={brand_3} alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src={brand_4} alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src={brand_5} alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="#">
                      <img src={brand_6} alt="" />
                    </a>
                  </div>
                </Carousel>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Slide;
