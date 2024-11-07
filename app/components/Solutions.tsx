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
      

      <div  className='container-section relative  pt-24 -mt-24'>
        <div className='content-section flex flex-row flex-wrap items-center'>

          {/* Sección de texto y grid */}
          <div className='flex w-full lg:w-6/12 flex-col gap-4 pb-8 lg:pb-0 justify-center'>
            <p className="text-[18px] md:text-[20px]  font-bold leading-[24px] text-neutral-500">
              Solución de extremo a extremo
            </p>
            <p className="text-[33px] lg:text-[38px] xl:text-[44px] font-normal leading-[36px] md:leading-[54px] lg:leading-[64px] text-primary mb-1">
              Una solución de nómina<br /> todo en uno  con funciones <br />y procesos  integrados
            </p>
            <p className="text-base leading-[28px] font-normal text-neutral-500 mb-6 md:mb-4">
              Acceda a una nómina eficiente y precisa con flujos de trabajo optimizados. 
              Mejore el desempeño organizacional, reduzca la carga de trabajo y ahorre tiempo.
            </p>
            <div className='flex justify-center md:justify-start  mb-4 lg:mb-0   '>
               
              <ModalWrapper label='Más información' />
            </div>
          </div>

          {/* Grid con íconos e información */}
          <div className='relative flex w-full lg:w-6/12 justify-center items-center overflow-hidden pl-0 lg:pl-10'>
            <div className='grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-10 w-full p-0'>
              {[
                { src: icono1, label: "Proceso de nóminas" },
                { src: icono2, label: "Gestión del Tiempo del personal" },
                { src: icono3, label: "Gestión de Datos Maestros" },
                { src: icono4, label: "Reportes" },
                { src: icono5, label: "Administración de sistemas" },
                { src: icono6, label: "Self Service Human Resource on Line" }
              ].map(({ src, label }) => (
                <div key={label} className='bg-primary hover:bg-sky-950 transition-colors   rounded-xl shadow-lg shadow-primary/50 py-8 px-4 flex flex-col  justify-center items-center h-44'>
                  <img src={src} alt={label} className='h-12 w-12 mb-2' />
                  <p className='text-white text-center'>{label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Segunda Sección con Imagen */}
        <div id='software' className='content-section flex flex-row flex-wrap items-center pt-16 lg:pt-20'>
          <div className='flex w-full lg:w-5/12 flex-col gap-4 pb-8 lg:pb-0 justify-center'>
            <p className="text-[18px] md:text-[20px] font-bold leading-[24px] text-neutral-500">
              Recursos humanos diarios
            </p>
            <p className="text-[33px] lg:text-[38px] xl:text-[44px] font-normal leading-[36px] md:leading-[54px] lg:leading-[64px] text-primary mb-1">
              Un portal para empleados  <br /> con una interfaz moderna  <br /> y fácil de usar
            </p>
            <div className='flex justify-center md:justify-start'>
              <NavLink
                to="https://human.com.pe/inicio"
                className="bg-background text-primary shadow-md my-3 shadow-black/30 px-6 py-3 rounded-xl font-bold hover:text-white hover:bg-primary hover:shadow-primary/30 transition-all duration-500 ease-in-out flex justify-center items-center w-full md:w-fit"
              >
                Explora
              </NavLink>
            </div>
            <p className="text-base leading-[28px] font-normal text-neutral-500 mb-0 mt-2 md:mb-4">
              Implementamos actualizaciones automáticas para cumplir con cambios laborales 
              y garantizamos seguridad en la nube respaldada por AWS.
            </p>
            
          </div>
          
          <div className='relative flex w-full lg:w-7/12 justify-center items-end p-0 lg:p-12 min-h-[250px] lg:min-h-[600px]'>
   
          <video 
            className='absolute hidden lg:block h-[175px] lg:h-[320px] xl:h-[346px] z-[100] rounded-sm lg:rounded-xl top-[25px] lg:top-[116px] xl:top-[120px]' 
            controls 
            autoPlay 
            loop 
            muted
          >
            <source src={video} type="video/mp4" />
            Tu navegador no soporta la reproducción de videos.
          </video>
          <video 
            className='rounded-xl block lg:hidden ' 
            controls 
            autoPlay 
            loop 
            muted
          >
            <source src={video} type="video/mp4" />
            Tu navegador no soporta la reproducción de videos.
          </video>
 
          <img 
            src={videoplaceholder} 
            alt="Video Placeholder" 
            className='absolute hidden lg:block   z-0 top-[00px] lg:top-[70px] w-[347px] h-[220px] lg:w-[550px] lg:h-[400px] xl:w-[600px] xl:h-[440px]'
          />
          
          <div id="nosotros" className='absolute top-[70%] lg:top-[80%]'></div>
          
        </div>

        </div>
      </div>
    </div>
  );
}

export default Solutions;
