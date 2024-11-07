import { NavLink } from '@remix-run/react'
import React from 'react'
import presupuestoimg from '/presupuestoimg.png';
import ModalWrapper from './ModalWrapper';
function Presupuesto() {
  return (
    <div className='container-section bg-background py-12 lg:py-16'>
      <div className='content-section flex flex-row flex-wrap items-center'>
          <div className='flex w-full lg:w-6/12 flex-col gap-4  justify-center'>
 
            <p className="text-[33px] lg:text-[38px] xl:text-[44px] font-normal leading-[36px] md:leading-[54px] lg:leading-[64px] text-primary mb-1">
            Solicitar tu presupuesto online
            </p>
            <p className="text-base leading-[28px] font-normal text-neutral-500 mb-6 md:mb-4">
            Ahora puedes solicitar un presupuesto, sin compromiso, de la manera más rápida y sencilla, <br />con un solo clic, a través de nuestra Oficina Digital
            </p>
            <div className='flex justify-center md:justify-start   '>
               
              <ModalWrapper label='Calcular presupuesto' />
            </div>
          </div>

          {/* Imagen */}
          <div className='relative flex w-full lg:w-6/12 justify-center items-end lg:pl-12 mt-12 lg:mt-0'>
            <img src={presupuestoimg} className='flex w-full rounded-xl' alt="Video Placeholder" />
          </div>
        </div>
      </div>
   )
}

export default Presupuesto