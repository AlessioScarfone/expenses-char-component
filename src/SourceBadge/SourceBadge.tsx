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
  const [animateOut, setAnimateOut] = useState(false);

  useEffect(() => {
    let t: NodeJS.Timeout | null | undefined = null;
    if (url) {
      t = setTimeout(() => {
        setShow(true);
      }, time);
    }
    return () => {
      if (t) clearTimeout(t);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const close = (event: any) => {
    event.preventDefault();
    setAnimateOut(true);
  };

  return (
    <>
      {show && (
        <a
          className={[
            styles.SourceBadgeContainer,
            animateOut ? styles.closing : "",
          ].join(" ")}
          href={url}
          target="blank"
          style={{
            top: `${distanceFromTop}vh`,
          }}
        >
          <span className={styles.closeButton} onClick={close}>
            <Close strokeWidth={3} />
          </span>
          <GitHub />
        </a>
      )}
    </>
  );
};

export default SourceBadge;
