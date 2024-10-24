import React, { useState } from 'react';
import { motion } from 'framer-motion';

import admin1 from '/admin1.png';
import admin2 from '/admin2.jpg';
import admin3 from '/admin3.jpg';
import vector3 from '/vector3.png'; // Agregando la imagen vector3

function Administracion() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    {
      title: 'Empresas Pequeñas',
      content: [
        'En Payroll Plus, comprendemos las necesidades únicas de las empresas más pequeñas: ofrecemos un soporte personalizado, un proceso ágil y respuestas rápidas a consultas contables.',
        'Ahorre tiempo y recursos mientras se enfoca en hacer crecer su negocio con nuestra experiencia a su disposición.'
      ],
      image: admin1
    },
    {
      title: 'Empresas Medianas',
      content: [
        'Contamos con una variedad de servicios de contabilidad de nómina que se ajustan a sus necesidades comerciales.',
        'Nuestra amplia experiencia nos permite ofrecer un soporte experto y especializado.',
        'Subcontratar la contabilidad de nómina le permite liberar recursos internos y garantizar la seguridad del proceso.'
      ],
      image: admin2
    },
    {
      title: 'Empresas Grandes',
      content: [
        'La contabilidad de nómina de Payroll Plus se adapta a las operaciones de grandes empresas.',
        'Con nuestros servicios integrales, su empresa puede dejar la gestión de nóminas en nuestras manos.',
        'Además de la contabilidad, ofrecemos servicios adicionales como el archivo y las auditorías fiscales.'
      ],
      image: admin3
    }
  ];

  return (
    <div className="container-section py-16 bg-background relative ">
      <div className="content-section flex flex-col relative">
        <div className='pt-8 pb-16 lg:pb-24 text-center'>
      <p className="text-[28px] md:text-[33px] lg:text-[38px] xl:text-[44px] font-normal leading-[36px] md:leading-[54px] lg:leading-[64px] text-primary mb-1">
      Administración de nóminas diseñada por tamaño de empresa
            </p>
            </div>
        
        {/* Columna de tabs */}
        <div className='flex flex-col lg:flex-row'>
        <div className="lg:w-1/3 w-full lg:flex lg:flex-col mb-6 lg:mb-0 lg:mr-6 lg:pr-12">
          {tabs.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`w-full h-16 text-left p-4 rounded-xl  font-medium text-md lg:text-base border-b-2 lg:border-b-2 border-secondary/65 pr-4 ${
                activeTab === index ? 'bg-primary text-white' : 'bg-transparent text-black'
              } hover:bg-primary hover:text-white transition-all duration-300 ease-in-out mb-4 lg:mb-6`}
    
            >
              {tab.title}
            </button>
          ))}
        </div>

        {/* Columna de contenido */}
        <div className="lg:w-2/3 w-full flex flex-col relative">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="w-full flex flex-col gap-6"
          >
            {/* Contenido del texto y la imagen */}
            <div className="flex flex-col items-center lg:items-start">
              <p className="text-lg lg:text-2xl font-semibold mb-4 text-primary text-center lg:text-left">
                {tabs[activeTab].title}
              </p>
              <p className="text-md lg:text-base mb-6 pl-4">
                {tabs[activeTab].content.join(' ')}
              </p>
              <img 
                src={tabs[activeTab].image} 
                alt={`Imagen de ${tabs[activeTab].title}`} 
                className="w-full h-[270px] lg:h-[500px] z-[1991] rounded-lg object-cover mb-8 z-1000" // Ajustar tamaño de la imagen
              />
            </div>
          </motion.div>
        </div>

        {/* Imagen vector3 en posición absoluta */}
        </div>
      </div>
      <img 
          src={vector3} 
          alt="Vector decorativo" 
          className="absolute bottom-0 -left-6 overflow-hidden w-[100px] lg:w-[350px] opacity-80 z-[0]" // Tamaño y posición ajustados
        />
    </div>
  );
}

export default Administracion;
