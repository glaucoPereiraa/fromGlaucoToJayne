"use client"
import React, { useState, useEffect } from 'react';
import styles from './CountdownTimer.module.css';

export default function Footer() {
  const calculateTimeLeft = () => {
    const difference = +new Date() - +new Date("2024-01-22");
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
    <div className={styles.container}>
      <div className={styles.timer}>
        <span className={styles.number}>{timeLeft.days}</span> dias
        <span className={styles.number}>{timeLeft.hours}</span> horas
        <span className={styles.number}>{timeLeft.minutes}</span> minutos
        <span className={styles.number}>{timeLeft.seconds}</span> segundos
      </div>
    </div>
  );
};