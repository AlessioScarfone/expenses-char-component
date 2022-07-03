import React from 'react';
import styles from './TitleCard.module.scss';

export interface TitleCardProps {
    title: string,
    balance: number
}

export const TitleCard: React.FunctionComponent<TitleCardProps> = ({title, balance}) => {
  return (
    <div className={styles.TitleCard}>
      <div>
        <h4>{title}</h4>
        <h2>${balance}</h2>
      </div>
      <img alt="logo" src={`${process.env.PUBLIC_URL}/images/logo.svg`} className={[styles.logo,styles.rotateHorCenter].join(" ")}/>
    </div>
  )
}
