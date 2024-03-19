import styles from "./ListColor.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function ListColor() {
  return (
    
      <div className={cx("filter-color")}>
        <div className={cx("filter-color-title")}>
          <h2>Màu sắc</h2>
        </div>
        <div className={cx("filter-color-group")}>
          <div className={cx("color-option", "yellow")}></div>
          <div className={cx("color-option", "purple")}></div>
          <div className={cx("color-option", "red")}></div>
          <div className={cx("color-option", "green")}></div>
          <div className={cx("color-option", "pink")}></div>
          <div className={cx("color-option", "orange")}></div>
        </div>
      </div>
    
  );
}

export default ListColor;
