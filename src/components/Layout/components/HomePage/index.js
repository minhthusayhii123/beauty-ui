import Updates from "../Updates";
import Cards from "~/components/Layout/components/Cards";
import Table from "~/components/Layout/components/Table";
import styles from "./HomePage.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);
function HomePage() {
  return (
    <div className={cx('home-page')}>
      <div>
        <h1>Dashboard</h1>
        <Cards />
        <Table />
      </div>
      <div className={cx("updates")}>
        <Updates />
      </div>
    </div>
  );
}

export default HomePage;
