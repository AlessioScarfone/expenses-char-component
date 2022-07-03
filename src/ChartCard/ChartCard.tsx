import React, { useMemo } from "react";
import styles from "./ChartCard.module.scss";

type DataType = { day: string; amount: number };

export interface ChartCardIterface {
  title: string;
  data: Array<DataType>;
  totalAmount: number;
  percentage: string;
}

const ChartCard: React.FC<ChartCardIterface> = ({
  data,
  title,
  totalAmount,
  percentage,
}) => {
  const maxIndexList: number[] = useMemo(() => {
    const max = Math.max(...data.map((d) => d.amount));
    return data
      .map((d, i) => (d.amount === max ? i : -1))
      .filter((e) => e !== -1);
  }, [data]);

  // console.log("maxIndexList:", maxIndexList);

  return (
    <div className={styles.ChartCard}>
      <h2 style={{ marginBottom: "2rem" }}>{title}</h2>
      <div className={styles.chart}>
        <div className={styles.chartBarContainer}>
          {data.map((d, i) => (
            <ChartBar
              label={d.day}
              value={d.amount}
              key={d.day}
              isMax={maxIndexList.includes(i)}
            />
          ))}
        </div>
      </div>
      <div className={styles.stats}>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <p className={styles.lightText}>Total this month</p>
          <h1>${totalAmount}</h1>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
          }}
        >
          <p style={{ fontWeight: "700" }}>{percentage}%</p>
          <p className={styles.lightText}>from last month</p>
        </div>
      </div>
    </div>
  );
};

const maxBarHeight = 250;
const ChartBar: React.FunctionComponent<{
  label: string;
  value: number;
  isMax?: boolean;
}> = ({ label, value, isMax }) => {
  //maxBarHeight : 100 = value : x
  // const barSize = (value * 100) / maxBarHeight;
  // console.log("Bar:", value, barSize);
  const barSize = useMemo(() => value * 3, [value]);
  const barClassNames = useMemo(() => [styles.bar, styles.fadeIn, isMax ? styles.maxBar : ""].join(" "), [isMax])

  return (
    <div className={styles.chartBar} style={{ height: `${maxBarHeight}px` }}>
      <div
        className={barClassNames}
        style={{ height: `${barSize}px`, maxHeight: `${maxBarHeight}px` }}
      ></div>
      <div className={styles.tooltip}>${value}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
};

export default ChartCard;
