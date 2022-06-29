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

  return <div className={styles.ChartCard}>
    <h2 style={{marginBottom: '1rem'}}>{title}</h2>
    <div className={styles.chart}>

    </div>
    <div className={styles.stats}>
      <div style={{display:'flex', flexDirection: 'column'}}>
        <p className={styles.lightText}>Total this month</p>
        <h1>${totalAmount}</h1>
      </div>
      <div style={{display:'flex', flexDirection: 'column'}}>
        <p style={{fontWeight: '700'}}>{percentage}%</p>
        <p className={styles.lightText}>from last month</p>
      </div>
    </div>
  </div>;
};

export default ChartCard;
