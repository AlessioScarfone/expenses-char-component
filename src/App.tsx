import React from 'react';
import styles from "./App.module.scss";
import { TitleCard } from './TitleCard/TitleCard';

function App() {
  return (
    <div className={styles.App}>
      <div className={styles.container}>

        <TitleCard title="My balance" balance={921.48}/>
      </div>
    </div>
  );
}

export default App;
