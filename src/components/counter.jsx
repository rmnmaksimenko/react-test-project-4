import { useEffect, useState } from 'react';

export default function Counter() {
  const [counterA, setCounterA] = useState(0);
  const [counterB, setCounterB] = useState(0);

  const handleCounterAIncrement = () => {
    setCounterA(state => state + 1);
  };

  const handleCounterBIncrement = () => {
    setCounterB(state => state + 1);
  };

  useEffect(() => {
    const totalClicks = counterA + counterB;
    console.log(`Всего кликнули ${totalClicks} раз`);
  }, [counterA, counterB]);

  return (
    <div>
      <button type="button" onClick={handleCounterAIncrement}>
        Кликнули CounterA {counterA} раз
      </button>
      <button type="button" onClick={handleCounterBIncrement}>
        Кликнули CounterB {counterB} раз
      </button>
    </div>
  );
}
