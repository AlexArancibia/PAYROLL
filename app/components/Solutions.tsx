import { NavLink } from '@remix-run/react';
import icono1 from '/icono1.png';
import icono2 from '/icono2.png';
import icono3 from '/icono3.png';
import icono4 from '/icono4.png';
import icono5 from '/icono5.png';
import icono6 from '/icono6.png';
import videoplaceholder from '/video.png';
import video from '/video.mp4';
import vector1 from '/vector1.png';
import ModalWrapper from './ModalWrapper';

function Solutions() {
  return (
    <div  className='bg-background relative'>
      {/* Imagen absoluta en medio */}
      <img 
        src={vector1} 
        alt="Vector 1" 
        className='absolute z-0 top-[33%] right-0 w-24 lg:w-80'
      />
      

      <div id='servicios' className='container-section relative z-10 pt-24 -mt-24'>
        <div className='content-section flex flex-row flex-wrap items-center'>

          {/* Sección de texto y grid */}
          <div className='flex w-full lg:w-5/12 flex-col gap-4 pb-8 lg:pb-0 justify-center'>
            <p className="text-[14px] md:text-[16px] font-bold leading-[24px] text-neutral-500">
              Solución de extremo a extremo.
            </p>
            <p className="text-[28px] md:text-[33px] lg:text-[38px] xl:text-[44px] font-normal leading-[36px] md:leading-[54px] lg:leading-[64px] text-primary mb-1">
              Una solución de nómina<br /> todo en uno <br /> con funciones y procesos <br /> integrados.
            </p>
            <p className="text-base leading-[28px] font-normal text-neutral-500 mb-6 md:mb-4">
              Acceda a una nómina eficiente y precisa con flujos de trabajo optimizados. 
              Mejore el desempeño organizacional, reduzca la carga de trabajo y ahorre tiempo.
            </p>
            <div className='flex justify-center md:justify-start  mb-4 lg:mb-0   '>
               
              <ModalWrapper label='Mas información' />
            </div>
          </div>

          {/* Grid con íconos e información */}
          <div className='relative flex w-full lg:w-7/12 justify-center items-center overflow-hidden pl-0 lg:pl-10'>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 w-full p-0'>
              {[
                { src: icono1, label: "Proceso de nóminas" },
                { src: icono2, label: "Gestión del Tiempo del personal" },
                { src: icono3, label: "Gestión de Datos Maestros" },
                { src: icono4, label: "Reportes" },
                { src: icono5, label: "Administración de sistemas" },
                { src: icono6, label: "Self Service Human Resource on Line" }
              ].map(({ src, label }) => (
                <div className='bg-primary hover:bg-sky-950 transition-colors   rounded-xl shadow-lg shadow-primary/50 py-8 px-4 flex flex-col  justify-center items-center h-44'>
                  <img src={src} alt={label} className='h-12 w-12 mb-2' />
                  <p className='text-white text-center'>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Segunda Sección con Imagen */}
        <div id='software' className='content-section flex flex-row flex-wrap items-center pt-16 lg:pt-36'>
          <div className='flex w-full lg:w-5/12 flex-col gap-4 pb-8 lg:pb-0 justify-center'>
            <p className="text-[14px] md:text-[16px] font-bold leading-[24px] text-neutral-500">
              Recursos humanos diarios.
            </p>
            <p className="text-[28px] md:text-[33px] lg:text-[38px] xl:text-[44px] font-normal leading-[36px] md:leading-[54px] lg:leading-[64px] text-primary mb-1">
              Un portal para empleados con una interfaz <br /> moderna y fácil de usar.
            </p>
            <div className='flex justify-center md:justify-start'>
              <NavLink
                to="/"
                className="bg-background text-primary shadow-md my-3 shadow-primary/30 px-6 py-3 rounded-xl font-normal hover:text-white hover:bg-primary hover:shadow-primary/30 transition-all duration-500 ease-in-out flex justify-center items-center w-full md:w-fit"
              >
                Explora
              </NavLink>
            </div>
            <p className="text-base leading-[28px] font-normal text-neutral-500 mb-0 mt-2 md:mb-4">
              Implementamos actualizaciones automáticas para cumplir con cambios laborales 
              y garantizamos seguridad en la nube respaldada por AWS.
            </p>
            
          </div>
          
          <div className='relative flex w-full lg:w-7/12 justify-center items-end p-0 lg:p-12 min-h-[330px] lg:min-h-[600px]'>
   
          <video className='absolute h-[155px] lg:h-[335px] z-[100] rounded-xl top-[90px] lg:top-[150px] left-[12px] lg:right-[232px]' controls autoPlay loop>
            <source src={video} type="video/mp4" />
            Tu navegador no soporta la reproducción de videos.
          </video>
          <img 
            src={videoplaceholder} 
            alt="Video Placeholder" 
            className='absolute z-0 top-[35px] lg:right-0 w-full h-[220px] lg:w-[700px] lg:h-[460px]'
          />
          
        </div>

        </div>
      </div>
    </div>
  );
}

export default Solutions;
