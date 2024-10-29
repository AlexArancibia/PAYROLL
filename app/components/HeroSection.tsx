import { NavLink } from '@remix-run/react';
import saas from '/saas.png'; // Nueva imagen
import ModalWrapper from './ModalWrapper';

function HeroSection() {
  return (
    <div className='bg-background'>
      <div className='container-section pt-28 lg:pt-36  '>
        <div className='content-section flex flex-row flex-wrap items-center'>

          {/* Sección de texto, centrada verticalmente */}
          <div className='flex w-full lg:w-5/12 flex-col gap-4 pb-8 lg:pb-32 justify-center'>
            
            {/* Primer texto (color neutral, negrita) */}
            <p className="text-[18px] md:text-[20px] font-bold leading-[24px] text-neutral-500">
              Nómina para todos los regímenes laborales
            </p>

            {/* Segundo texto (color primario) con interlineado mejorado */}
            <p className="text-[28px] md:text-[33px] lg:text-[38px] xl:text-[44px] font-normal leading-[36px] md:leading-[54px] lg:leading-[64px] text-primary mb-1">
              Una nueva era de eficiencia, <br /> cumplimiento e innovación
            </p>

            {/* Tercer texto (color neutral) con interlineado mejorado */}
            <p className="text-base leading-[28px] font-normal text-neutral-500 mb-6 md:mb-4">
              Potenciar cada función en la nómina: Una solución de nómina global unificada
              para administradores de nómina, consultores de implementación, gerentes y empleados.
            </p>

            {/* Botón sin borde, solo sombra */}
            <div  className='flex justify-center md:justify-start    '>
               
              <ModalWrapper label='Reserve un demostración' />
            </div>
          </div>

          {/* Imagen de la sección */}
          <div className='relative flex w-full lg:w-7/12 justify-center items-end overflow-hidden'>
            <img src={saas} className='h-auto w-fit mt-4 -ml-20 lg:ml-0   pr-0 lg:pr-20 flex overflow-hidden z-[1]' alt="SaaS hero section" />
          <div id="servicios" className='absolute top-[70%] lg:top-[50%]'></div>
          </div>


        </div>
      </div>
    </div>
  );
}

export default HeroSection;
