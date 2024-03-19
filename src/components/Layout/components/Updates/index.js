import { useState } from "react";
import styles from "./Updates.module.scss";

import ReactApexChart from "react-apexcharts";
import thu from "~/assets/images/thu.jpg";
import duong from "~/assets/images/duonh.jpg";
import hao from "~/assets/images/hao.jpg";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

const updateData = [
  {
    img: thu,
    name: "Minh Thư",
    note: "Sản phẩm tuyệt vời",
    time: "23 giây trước",
  },
  {
    img: duong,
    name: "Thái Dương",
    note: "Da tôi đã đen hơn khi sử dụng sản phẩm",
    time: "59 giây trước",
  },
  {
    img: hao,
    name: "Quốc Hào",
    note: "Tôi sử dụng sản phẩm thì bị mụn? Tại sao vậy?",
    time: "5 phút trước",
  },
];
const dataCustomer = {
  series: [
    {
      name: "Review",
      data: [10, 50, 30, 90, 40, 120, 100],
    },
  ],
  options: {
    chart: {
      type: "area",
      height: "auto",
    },

    fill: {
      colors: ["#fff"],
      type: "gradient",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      colors: ["#ff929f"],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    grid: {
      show: false,
    },
    xaxis: {
      type: "datetime",
      categories: [
        "2024-01-19T00:00:00.000Z",
        "2024-01-19T01:30:00.000Z",
        "2024-01-19T02:30:00.000Z",
        "2024-01-19T03:30:00.000Z",
        "2024-01-19T04:30:00.000Z",
        "2024-01-19T05:30:00.000Z",
        "2024-01-19T06:30:00.000Z",
      ],
    },
    yaxis: {
      show: false,
    },
    toolbar: {
      show: false,
    },
  },
};
function Updates() {
  return (
    <div className={cx("update")}>
      <h3>Updates</h3>
      {updateData.map((update,index) => (
        <div key={index} className={cx("update-update")}>
          <img src={update.img} alt="" />
          <div className={cx("note")}>
            <span className={cx("name")}>{update.name}</span>
            <span style={{ color: "#707070" }}>{update.note}</span>
            <span className={cx("time")}>{update.time}</span>
          </div>
        </div>
      ))}

      <div className={cx("customer-review")}>
        <h3>Customer Review</h3>
        <ReactApexChart
          series={dataCustomer.series}
          options={dataCustomer.options}
          type="area"
        />
      </div>
    </div>
  );
}

export default Updates;
