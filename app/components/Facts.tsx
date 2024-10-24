import React, { useState, useEffect } from 'react';
import icono1 from '/check.png';
import icono2 from '/wheel.png';
import icono3 from '/work.png';

interface CounterProps {
  end: number;
  duration: number;
  prefix?: string;
  suffix?: string;
}

const Counter: React.FC<CounterProps> = ({ end, duration, prefix = '', suffix = '' }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const incrementTime = Math.floor((duration * 1000) / end); // Tiempo por incremento

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer); // Detenemos el contador
    }, incrementTime);

    return () => clearInterval(timer); // Limpiamos el interval cuando se desmonta el componente
  }, [end, duration]);

  return (
    <span>
      {prefix}
      {count}
      {suffix}
    </span>
  );
};

function Facts() {
  return (
    <div className="container-section bg-background flex justify-center py-16">
      <div className="w-[90%] max-w-[700px] -mt-[100px] lg:-mt-[180px] z-20 bg-white rounded-3xl shadow-xl p-8 grid grid-cols-3 gap-4 md:gap-8">
        {/* Sección 1 */}
        <div className="flex flex-col items-center text-center">
          <img src={icono1} alt="Icono 1" className="h-8 md:h-12 mb-2" />
          <h3 className="font-medium text-lg md:text-3xl mb-1 md:mb-2 text-primary">
            <Counter end={14} duration={2} prefix="+" suffix=" años" />
          </h3>
          <p className="text-xs md:text-sm text-neutral-600">Experiencia</p>
        </div>

        {/* Sección 2 */}
        <div className="flex flex-col items-center text-center">
          <img src={icono2} alt="Icono 2" className="h-8 md:h-12 mb-2" />
          <h3 className="font-medium text-lg md:text-3xl mb-1 md:mb-2 text-primary">
            <Counter end={95} duration={2} suffix="%" />
          </h3>
          <p className="text-xs md:text-sm text-neutral-600">NPS</p>
        </div>

        {/* Sección 3 */}
        <div className="flex flex-col items-center text-center">
          <img src={icono3} alt="Icono 3" className="h-8 md:h-12 mb-2" />
          <h3 className="font-medium text-lg md:text-3xl mb-1 md:mb-2 text-primary">
            <Counter end={30} duration={2} prefix="+" />
          </h3>
          <p className="text-xs md:text-sm text-neutral-600">Puestos de trabajo</p>
        </div>
      </div>
    </div>
  );
}

export default Facts;
