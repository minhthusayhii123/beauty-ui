import styles from "./Brands.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const sidebarBrand = [
  {
    name: "AHA",
    value: "aha",
  },
  {
    name: "Aroma",
    value: "aroma",
  },
  {
    name: "Benefit",
    value: "benefit",
  },
  {
    name: "Burberry",
    value: "burberry",
  },
  {
    name: "Chloé",
    value: "chloé",
  },
  {
    name: "Dior",
    value: "dior",
  },
  {
    name: "Dolce",
    value: "dolce",
  },
  {
    name: "A",
    value: "a",
  },
  {
    name: "B",
    value: "b",
  },
  {
    name: "C",
    value: "c",
  },
];
function Brands() {
  return (
    <div className={cx("filter")}>
      <div className={cx("title-filter")}>
        <h2>Thương hiệu</h2>
      </div>
      <div className={cx("filter-group")}>
        <ul>
          {sidebarBrand.map((brand,index) => (
            <li key={index}>
              <span>
                <input type="radio" name="sidebarBrand" id={brand.value} />
                <label htmlFor={brand.value}>
                  <p className={cx("my-check-title")}>{brand.name}</p>
                </label>
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Brands;
