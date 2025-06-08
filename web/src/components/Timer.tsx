'use client';

import { useEffect, useState } from 'react';

type Props = {
  initialSeconds?: number;
  onExpire?: () => void;
};

export default function Timer({ initialSeconds = 180, onExpire }: Props) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    if (seconds <= 0) {
      onExpire?.();
      return;
    }

    const timer = setInterval(() => {
      setSeconds((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [seconds]);

  const format = (n: number) => n.toString().padStart(2, '0');
  const minutes = Math.floor(seconds / 60);
  const secs = seconds % 60;

  return (
    <span className="text-body1-regular text-error-600">
      {format(minutes)}:{format(secs)}
    </span>
  );
}
