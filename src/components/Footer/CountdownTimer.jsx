"use client"
import React, { useState, useEffect } from 'react';
import styles from './CountdownTimer.module.css';

export default function CountdownTimer() {
  const calculateTimeLeft = () => {
    const difference = +new Date() - +new Date('January 22, 2024 19:00:00 GMT-3:00');

    if (difference <= 0) return {};

    return {
      year: Math.floor(difference / (1000 * 60 * 60 * 24 * 30 * 12)),
      month: Math.floor((difference / (1000 * 60 * 60 * 24 * 30)) % 12),
      days: Math.floor((difference / (1000 * 60 * 60 * 24)) % 30),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / (1000 * 60)) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.timer}>
        <span className={styles.number}>{timeLeft.year ?? 0}</span> ano
        <span className={styles.number}>{timeLeft.month ?? 0}</span> meses
        <span className={styles.number}>{timeLeft.days ?? 0}</span> dias
        <span className={styles.number}>{timeLeft.hours ?? 0}</span> horas
        <span className={styles.number}>{timeLeft.minutes ?? 0}</span> minutos
        <span className={styles.number}>{timeLeft.seconds ?? 0}</span> segundos
      </div>
    </div>
  );
};