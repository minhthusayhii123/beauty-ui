import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import ListMenuMini from "~/components/Layout/components/ListProductMini";
import p1 from "~/assets/images/product1.jpg";
import p2 from "~/assets/images/p2.webp";
import p3 from "~/assets/images/p3.webp";
import p4 from "~/assets/images/p4.webp";
import p5 from "~/assets/images/product7.jpg";
import styles from "./Outstaning.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const miniMenu = [
  {
    title: "Tinh chất cấp ẩm, sáng da L'Oreal Revitalift Serum 1.5%",
    urlImg: p1,
    currentPrice: "319.000",
    oldPrice: "319.000",
  },
  {
    title:
      "Serum L'Oreal Paris Glycolic Bright Hỗ Trợ Sáng Da 1.0%  Glycolic Acid 30Ml",
    urlImg: p2,
    currentPrice: "365.000",
    oldPrice: "519.000",
  },
  {
    title:
      "Sữa Dưỡng Thể OLAY B3+ Optics Glow & Radiance Vitamin C Dưỡng Trắng Da Toàn Thân ",
    urlImg: p3,
    currentPrice: "245.000",
    oldPrice: "500.000",
  },
  {
    title:
      "Tinh chất cấp ẩm, sáng da Olay Revitalift Serum 1.5% Hyaluronic Acid",
    urlImg: p4,
    currentPrice: "150.000",
    oldPrice: "319.000",
  },
  {
    title: "Dầu tẩy trang Hada Labo Advanced Nourish Hyaluron Cleansing Oil",
    urlImg: p5,
    currentPrice: "216.000",
    oldPrice: "319.000",
  },
];
function Outstaning() {
  return (
    <div className={cx("filter-hightlight")}>
      <div className={cx("filter-hightlight-title")}>
        <h2>
          <a href="">Sản phẩm nổi bật</a>
        </h2>
      </div>
      <div className={cx("product-mini-lists")}>
        {miniMenu &&
          miniMenu.length > 1 &&
          miniMenu.map((itemMenu, index) => (
            <ListMenuMini itemMenu={itemMenu} key={index} />
          ))}
      </div>

      <a href="" className={cx("see-more")}>
        Xem thêm
        <FontAwesomeIcon icon={faAngleRight} style={{ marginLeft: "10px" }} />
      </a>
    </div>
  );
}

export default Outstaning;
