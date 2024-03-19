import styles from "./Table.module.scss";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

const header = [
  {
    id: "1",
    name: "STT",
  },
  {
    id: "2",
    name: "Trạng thái",
  },
  {
    id: "3",
    name: "Tên hàng",
  },
  {
    id: "4",
    name: "Thành tiền",
  },
];

const data = [
  {
    id: "1",
    status: "Đang gửi",
    name: "L'Oreal Revitalift Serum 1.5%",
    price: "365.000",
  },
  {
    id: "2",
    status: "Đang gửi",
    name: "L'Oreal Revitalift Serum 1.5%",
    price: "365.000",
  },
  {
    id: "3",
    status: "Đang gửi",
    name: "L'Oreal Revitalift Serum 1.5%",
    price: "365.000",
  },
  {
    id: "4",
    status: "Đang gửi",
    name: "L'Oreal Revitalift Serum 1.5%",
    price: "365.000",
  },
  {
    id: "5",
    status: "Đang gửi",
    name: "L'Oreal Revitalift Serum 1.5%",
    price: "365.000",
  },
  {
    id: "6",
    status: "Đang gửi",
    name: "L'Oreal Revitalift Serum 1.5%",
    price: "365.000",
  },
  {
    id: "7",
    status: "Đang gửi",
    name: "L'Oreal Revitalift Serum 1.5%",
    price: "365.000",
  },
];
function Table() {
  return (
    <div className={cx("table")}>
      <h3>Recent Orders</h3>
      <table className="table table-hover">
        <thead>
          <tr>
            {header.map((item, index) => (
              <th key={index} scope="col">
                {item.name}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((item, index) => (
            <tr key={index}>
              <th scope="row">{item.id}</th>
              <td>{item.status}</td>
              <td>{item.name}</td>
              <td>{item.price}₫</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
