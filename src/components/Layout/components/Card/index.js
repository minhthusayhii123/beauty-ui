// Card.js
import React, { useState } from "react";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { UilTimes } from "@iconscout/react-unicons";
import ReactApexChart from "react-apexcharts";
import styles from "./Card.module.scss";
import { motion } from "framer-motion";
import classNames from "classnames/bind";
const cx = classNames.bind(styles);

function Card(props) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={cx("card-container")}
      onClick={() => setExpanded(!expanded)}
    >
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </div>
  );
}

//Compact Card
function CompactCard({ param, setExpanded }) {
  return (
    <motion.div
      className={cx("compact-card")}
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div className={cx("radia-bar")}>
        <CircularProgressbar
          styles={{
            root: { width: "3rem", overflow: "visible" },
            path: {
              stroke: "white",
              strokeWidth: "12px",
              filter: "drop-shadow(2px 4px 6px white)",
            },
            trail: { display: "none" },
            text: { fill: "white" },
          }}
          onClick={setExpanded}
          value={param?.barValue}
          text={`${param?.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className={cx("detail")}>
        <FontAwesomeIcon icon={param.png} />
        <span>${param?.value}</span>
        <span>last 24hours</span>
      </div>
    </motion.div>
  );
}

//Expended Card
function ExpandedCard({ param, setExpanded }) {
  const data = {
    options: {
      options: {
        chart: {
          type: "area",
          height: "auto",
        },

        dropShadow: {
          enabled: false,
          enabledOnSeries: undefined,
          top: 0,
          left: 0,
          blur: 3,
          color: "#000",
          opacity: 0.35,
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
          colors: ["white"],
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
        grid: {
          show: true,
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z",
          ],
        },
      },
    },
  };
  return (
    <motion.div
      className={cx("expanded-cart")}
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSeft: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={setExpanded} />
      </div>

      <span>{param.title}</span>
      <div className={cx("chart-container")}>
        <ReactApexChart
          series={param.series}
          type="area"
          options={data.options}
        />
      </div>
      <span>last 24hours</span>
    </motion.div>
  );
}

export default Card;
