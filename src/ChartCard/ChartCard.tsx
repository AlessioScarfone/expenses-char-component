import React from "react";
import styles from "./ChartCard.module.scss";

export interface ChartCardIterface {
  title: string;
  data: Array<{ day: string; amount: number }>;
  totalAmount: number;
  percentage: string;
}

const ChartCard: React.FC<ChartCardIterface> = ({
  data,
  title,
  totalAmount,
  percentage,
}) => {
  //TODO: find max value and color

  return (
    <div className={styles.ChartCard}>
      <h2 style={{ marginBottom: "2rem" }}>{title}</h2>
      <div className={styles.chart}>
        <div className={styles.chartBarContainer}>
          {data.map((d) => (
            <ChartBar label={d.day} value={d.amount} key={d.day} />
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

const ChartBar: React.FunctionComponent<{ label: string; value: number }> = ({
  label,
  value,
}) => {
  const barSize = value * 3;
  return (
    <div className={styles.chartBar}>
      <div className={styles.bar} style={{ height: `${barSize}px` }}></div>
      <div className={styles.tooltip}>${value}</div>
      <div className={styles.label}>{label}</div>
    </div>
  );
};

export default ChartCard;
