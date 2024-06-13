// components/Counter.js
import React from 'react';
import CountUp from 'react-countup';

const Counter = ({ start=0,end, duration = 2, prefix = '', suffix = '' }) => {
  return (
    <CountUp
      start={start}
      end={end}
      duration={duration}
      prefix={prefix}
      suffix={suffix}
    />
  );
};

export default Counter;
