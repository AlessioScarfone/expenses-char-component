import React from "react";
import styles from "./App.module.scss";
import ChartCard from "./ChartCard/ChartCard";
import { TitleCard } from "./TitleCard/TitleCard";
import data from './data.json';
import SourceBadge from "./SourceBadge/SourceBadge";

// console.log("data:", data);

function App() {
  
  return (
    <div className={styles.App}>
      <SourceBadge url="/" distanceFromTop={35}/>
      <div className={styles.container}>
        <div style={{marginBottom: '1rem'}}>
          <TitleCard title="My balance" balance={921.48}/>
        </div>
        <ChartCard
          title="Spending - Last 7 days"
          data={data || []}
          percentage="+2.4"
          totalAmount={478.33}
        />
      </div>
    </div>
  );
}

export default App;
