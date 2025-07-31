import { useEffect, useState } from "react";

export default function RetroClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const seconds = time.getSeconds();
  const minutes = time.getMinutes();
  const hours = time.getHours();

  const secondDeg = seconds * 6;
  const minuteDeg = minutes * 6 + seconds * 0.1;
  const hourDeg = ((hours % 12) / 12) * 360 + minutes * 0.5;

  return (
    <svg
      viewBox="0 0 200 200"
      className="w-48 h-48"
      preserveAspectRatio="xMidYMid meet"
      role="img"
      aria-label="Analog clock showing current time"
    >
      <rect width="200" height="200" fill="#000" />
      <circle
        cx="100"
        cy="100"
        r="95"
        fill="#fff"
        stroke="#000"
        strokeWidth="6"
      />
      {[...Array(12)].map((_, i) => {
        const angle = i * 30 * (Math.PI / 180);
        return (
          <line
            key={i}
            x1={100 + Math.cos(angle) * 80}
            y1={100 + Math.sin(angle) * 80}
            x2={100 + Math.cos(angle) * 90}
            y2={100 + Math.sin(angle) * 90}
            stroke="#000"
            strokeWidth="4"
            strokeLinecap="round"
          />
        );
      })}
      {[...Array(60)].map((_, i) => {
        if (i % 5 === 0) return null;
        const angle = i * 6 * (Math.PI / 180);
        return (
          <line
            key={i}
            x1={100 + Math.cos(angle) * 85}
            y1={100 + Math.sin(angle) * 85}
            x2={100 + Math.cos(angle) * 90}
            y2={100 + Math.sin(angle) * 90}
            stroke="#000"
            strokeWidth="1"
            strokeLinecap="round"
          />
        );
      })}
      <line
        x1="100"
        y1="100"
        x2="100"
        y2="55"
        stroke="#000"
        strokeWidth="7"
        strokeLinecap="round"
        transform={`rotate(${hourDeg} 100 100)`}
      />
      <line
        x1="100"
        y1="100"
        x2="100"
        y2="35"
        stroke="#000"
        strokeWidth="5"
        strokeLinecap="round"
        transform={`rotate(${minuteDeg} 100 100)`}
      />
      <line
        x1="100"
        y1="110"
        x2="100"
        y2="25"
        stroke="#000"
        strokeWidth="2"
        strokeLinecap="round"
        transform={`rotate(${secondDeg} 100 100)`}
      />
      <circle cx="100" cy="100" r="6" fill="#000" />
    </svg>
  );
}
