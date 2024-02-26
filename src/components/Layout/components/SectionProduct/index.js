import styles from "./SectionProduct.module.scss";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import Product from "../Product";

import classNames from "classnames/bind";
const cx = classNames.bind(styles);

export const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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

function SectionProduct({ products, backgroundColor, poster, title, linkto }) {
  return (
    <div className={cx("section-product")}>
      <div className={cx("container")}>
        <div className={cx("row")}>
          <div className={cx("col-lg-3 col-md-3")}>
            <div className={cx("banner-img")}>
              <span>
                <img src={poster} alt="" />

                <h2 className={cx("title-img")}>
                  <a href="/3ce">{title}</a>
                </h2>
                <a href={linkto} className={cx("btn-more")}>
                  Xem thêm
                </a>
              </span>
            </div>
          </div>

          <div className={cx("col-lg-9 col-md-9")}>
            <Carousel focusOnSelect={true} responsive={responsive}>
              {products &&
                products.length > 1 &&
                products.map((product, index) => (
                  <Product product={product} key={index} />
                ))}
            </Carousel>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionProduct;
