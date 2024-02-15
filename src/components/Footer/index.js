"use client"
import React, { useState, useEffect } from 'react';

const Footer = () => {
  const calculateTimeLeft = () => {
    const difference = +new Date("2024-01-22T") - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  return (
    <div>
      <h2>Countdown Timer</h2>
      <div>
        <span>{timeLeft.days}</span> days {' '}
        <span>{timeLeft.hours}</span> hours {' '}
        <span>{timeLeft.minutes}</span> minutes {' '}
        <span>{timeLeft.seconds}</span> seconds
      </div>
    </div>
  );
};

export default Footer;