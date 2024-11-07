import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import puntos from '/puntos.png';

interface FAQItem {
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    question: '¿Qué es Payroll Plus?',
    answer: 'Payroll Plus es una plataforma integral de gestión de nómina que ofrece soluciones personalizadas y confiables para empresas de todos los tamaños. Utiliza tecnología avanzada para simplificar y optimizar los procesos de pago, promoviendo la satisfacción del cliente y la comodidad del empleado. Además, se destaca por su capacidad de adaptación a las necesidades cambiantes del entorno empresarial y su compromiso con la innovación tecnológica y el servicio al cliente.',
  },
  {
    question: '¿Cuáles son las ventajas de que Payroll Plus procese la nómina por mí?',
    answer: 'Nuestras soluciones de nómina no solo ahorran tiempo y alivian la carga de trabajo, sino que también combinan tecnología avanzada con servicios de nómina y recursos humanos. Mantenemos actualizadas nuestras soluciones para cumplir con las leyes laborales y protegerlo de sanciones.',
  },
  {
    question: '¿A qué empresas ofrecemos nuestros servicios?',
    answer: 'Brindamos servicios de nómina para empresas de todos los tamaños, nacionales e internacionales. Priorizamos flexibilidad, fiabilidad y atención personalizada. Nuestro paquete incluye contabilidad de nómina, listas y estados contables claros para que su contabilidad financiera sea más eficiente. Con nuestras soluciones, podrá crecer y centrarse en su negocio principal.',
  },
  {
    question: '¿Payroll Plus proporciona herramientas en línea para que los empleados gestionen su nómina y recursos humanos?',
    answer: 'Nuestras soluciones permiten a los empleados acceder desde cualquier dispositivo para ver recibos, gestionar horarios y solicitar licencias.',
  },
];

const FAQ: React.FC = () => {
  const [openIndexes, setOpenIndexes] = useState<number[]>([]);

  const toggleFAQ = (index: number) => {
    setOpenIndexes((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <div id="faq" className="bg-background relative pt-12 pb-20 container-section">
      <img 
        src={puntos} 
        alt="Decoración Fondo" 
        className="absolute z-0 bottom-0 right-0 h-[300px] lg:h-[600px] pointer-events-none" // La imagen no interrumpe la interacción
      />
      <div className="content-section mx-auto relative z-10"> {/* Contenedor sobre la imagen */}
        <p className="text-[33px] z-100 md:text-[33px] lg:text-[38px] xl:text-[44px] font-normal leading-[36px] md:leading-[54px] lg:leading-[64px] text-primary mb-10 text-center">
          Preguntas Frecuentes
        </p>

        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);

            return (
              <div key={index} className="rounded-3xl shadow-xl shadow-primary/15 max-w-[1200px] mx-auto">
                <motion.button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex justify-between items-center text-lg lg:text-xl font-bold p-5 lg:p-7 rounded-3xl transition-colors text-left ${
                    isOpen ? 'bg-primary text-white' : 'bg-secondary text-black'
                  }`}
                >
                  <span>{faq.question}</span>
                  <div className="flex items-center">
                    {isOpen ? <FaMinus size={16} /> : <FaPlus size={16} />}
                  </div>
                </motion.button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      key={index}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ height: { duration: 0.4 }, opacity: { duration: 0.3 } }}
                      className="z-[100]  overflow-hidden"
                    >
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className=" z-[100]  mt-2 p-4 rounded-3xl bg-slate-200 "
                      >
                        {faq.answer}
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
