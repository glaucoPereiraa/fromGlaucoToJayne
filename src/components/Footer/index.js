"use client"
import React, { useState, useEffect } from 'react';
import styles from './CountdownTimer.module.css';

export default function Footer() {
  const calculateTimeLeft = () => {
    const difference = +new Date() - +new Date('Janary 22, 2024 19:00:00 GMT-3:00');
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        year: Math.floor(difference / (1000 * 60 * 60 * 24 * 30 * 365)),
        mothn: Math.floor(difference / (1000 * 60 * 60 * 24 * 30) % 365),
        days: Math.floor(difference / (1000 * 60 * 60 * 24) % 30),
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
        <span className={styles.number}>{timeLeft.year}</span> ano
        <span className={styles.number}>{timeLeft.mothn}</span> meses
        <span className={styles.number}>{timeLeft.days}</span> dias
        <span className={styles.number}>{timeLeft.hours}</span> horas
        <span className={styles.number}>{timeLeft.minutes}</span> minutos
        <span className={styles.number}>{timeLeft.seconds}</span> segundos
      </div>
    </div>
  );
};