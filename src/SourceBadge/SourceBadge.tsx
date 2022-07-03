import React, { useState, useEffect } from "react";
import { ReactComponent as GitHub } from "./github.svg";
import { ReactComponent as Close } from "./x.svg";
import styles from "./SourceBadge.module.scss";

interface SourceBadgeProps {
  url: string;
  distanceFromTop?: number;
  time?: number;
}

const SourceBadge = ({
  url,
  distanceFromTop = 25,
  time = 5000,
}: SourceBadgeProps) => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (url) {
      setTimeout(() => {
        setShow(true);
      }, time);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const close = (event: any) => {
    setShow(false);
    event.preventDefault();
  };

  return (
    <>
      {show && (
        <a
          className={styles.SourceBadgeContainer}
          href={url}
          target="blank"
          style={{
            top: `${distanceFromTop}vh`,
          }}
        >
          <span className={styles.closeButton} onClick={close}>
            <Close strokeWidth={3} />
          </span>
          <GitHub/>
        </a>
      )}
    </>
  );
};

export default SourceBadge;
