  import React from 'react';
  import { FaWhatsapp } from 'react-icons/fa'; // Ícono de WhatsApp
  import ModalWrapper from './ModalWrapper';

  function CTA2() {
    return (
      <div className='container-section bg-background'>
      <div className="content-section gap-4  py-16 lg:py-24 flex flex-col items-center justify-center text-center">
        {/* Título */}
        <p className="text-[33px] lg:text-[38px] xl:text-[44px] font-normal leading-[36px] md:leading-[54px] lg:leading-[64px] text-primary mb-1">
          ¿Listo para empezar?
        </p>
        
        {/* Texto */}
        <p className="text-lg lg:text-xl mb-6">
          Deje que nuestro equipo lo sorprenda con nuestro nuevo software de nómina.
        </p>

        {/* Botón con ícono de WhatsApp */}
  
        <ModalWrapper label="Reserve una demostración" variation="blue" />
      </div>
      </div>
    );
  }

  export default CTA2;
