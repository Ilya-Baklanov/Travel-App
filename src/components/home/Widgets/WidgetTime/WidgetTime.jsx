import React, { useEffect, useState } from 'react';

import Cadencer from '@/services/cadencer';

import styles from './widgetTime.scss';

const cadencer = new Cadencer();

function WidgetTime(props) {
  const [time, setNewTime] = useState({ time: '', date: '', day: '' });

  useEffect(() => {
    function getTime() {
      const date = new Date();

      const timeStr = date.toLocaleString(props.lang, {
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
        timeZone: props.zone,
      });

      const dateStr = date.toLocaleString(props.lang, {
        day: 'numeric',
        month: 'long',
        timeZone: props.zone,
      });

      const dayStr = date.toLocaleString(props.lang, {
        weekday: 'long',
        timeZone: props.zone,
      });
      setNewTime({ time: timeStr, date: dateStr, day: dayStr });
    }

    cadencer.setCallback(getTime);
    cadencer.start();

    return () => {
      cadencer.setCallback(null);
      cadencer.stop();
    };
  }, [props]);

  return (
    <div className={styles['widget-time']}>
      <p className={styles['date']}>{time.date}</p>
      <p className={styles['time']}>{time.time}</p>
      <p className={styles['day']}>{time.day}</p>
    </div>
  );
}

export default WidgetTime;
