import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import p1 from "~/assets/images/product1.jpg";
import p2 from "~/assets/images/p2.webp";
import p3 from "~/assets/images/p3.webp";
import p4 from "~/assets/images/p4.webp";
import p5 from "~/assets/images/product7.jpg";

import styles from "./AllProducts.module.scss";
import Product from "../Product";

import classNames from "classnames/bind";
import { useEffect, useState } from "react";
import { db } from "~/config/firestore";
import { collection, getDocs } from "firebase/firestore";
import Categories from "../Products/Categories";
import Brands from "../Products/Brands";
import PriceRange from "../Products/PriceRange";
import ListColor from "../Products/ListColor";
import Outstaning from "../Products/Outstanding";
import StatusProduct from "../Products/StatusProduct";
const cx = classNames.bind(styles);
const products = [
  {
    name: "Tinh chất cấp ẩm, sáng da L'Oreal Revitalift Serum 1.5% Hyaluronic Acid",
    urlImage: p1,
    priceCurrent: "319.000",
    priceOld: "419.000",
  },
  {
    name: "Serum L'Oreal Paris Glycolic Bright Hỗ Trợ Sáng Da 1.0%  Glycolic Acid 30Ml",
    urlImage: p2,
    priceCurrent: "365.000",
  },
  {
    name: "Sữa Dưỡng Thể OLAY B3+ Optics Glow & Radiance Vitamin C Dưỡng Trắng Da Toàn Thân ",
    urlImage: p3,
    priceCurrent: "245.000",
    priceOld: "500.000",
  },
  {
    name: "Tinh chất cấp ẩm, sáng da Olay Revitalift Serum 1.5% Hyaluronic Acid",
    urlImage: p4,
    priceCurrent: "150.000",
    priceOld: "500.000",
  },
  {
    name: "Dầu tẩy trang Hada Labo Advanced Nourish Hyaluron Cleansing Oil",
    urlImage: p5,
    priceCurrent: "216.000",
  },
  {
    name: "Tinh chất cấp ẩm, sáng da L'Oreal Revitalift Serum 1.5% Hyaluronic Acid",
    urlImage: p1,
    priceCurrent: "319.000",
    priceOld: "419.000",
  },
  {
    name: "Serum L'Oreal Paris Glycolic Bright Hỗ Trợ Sáng Da 1.0%  Glycolic Acid 30Ml",
    urlImage: p2,
    priceCurrent: "365.000",
  },
  {
    name: "Sữa Dưỡng Thể OLAY B3+ Optics Glow & Radiance Vitamin C Dưỡng Trắng Da Toàn Thân ",
    urlImage: p3,
    priceCurrent: "245.000",
    priceOld: "500.000",
  },
  {
    name: "Tinh chất cấp ẩm, sáng da Olay Revitalift Serum 1.5% Hyaluronic Acid",
    urlImage: p4,
    priceCurrent: "150.000",
    priceOld: "500.000",
  },
  {
    name: "Dầu tẩy trang Hada Labo Advanced Nourish Hyaluron Cleansing Oil",
    urlImage: p5,
    priceCurrent: "216.000",
  },
  {
    name: "Tinh chất cấp ẩm, sáng da Olay Revitalift Serum 1.5% Hyaluronic Acid",
    urlImage: p4,
    priceCurrent: "150.000",
    priceOld: "500.000",
  },
  {
    name: "Dầu tẩy trang Hada Labo Advanced Nourish Hyaluron Cleansing Oil",
    urlImage: p5,
    priceCurrent: "216.000",
  },
];

function AllProducts() {
  const [products1, setProducts] = useState();

  const getDataBeauty = async () => {
    let arr = [];
    const querySnapshot = await getDocs(collection(db, "products"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log(doc.id, " => ", doc.data());
      arr = [
        ...arr,
        {
          id: doc.id,
          ...doc.data(),
        },
      ];
    });
    console.log(arr);
    setProducts(arr);
  };

  console.log(products1);

  useEffect(() => {
    getDataBeauty();
  }, []);

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
                <span className={cx("all-products")}> Tất cả sản phẩm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={cx("container")}>
        <div className={cx("row")}>
          <div className={cx("col-lg-3")}>
            <div className={cx("collection")}>
              <Categories />
              <Brands />
              <PriceRange />

              <ListColor />
              <Outstaning />
            </div>
          </div>

          <div className={cx("col-lg-9")}>
            <div className={cx("category-products")}>
              <div className={cx("row")}>
                <div className={cx("col-lg-4")}>
                  <h1 className={cx("category-products-title")}>
                    Tất cả sản phẩm
                  </h1>
                </div>
                <div className={cx("col-lg-8")}>
                  <StatusProduct />
                </div>
              </div>

              <div className={cx("products-view")}>
                <div className={cx("row")}>
                  {products &&
                    products.length > 1 &&
                    products.map((product, index) => (
                      <div className={cx("col-lg-4")} key={index}>
                        <Product product={product} />
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AllProducts;
