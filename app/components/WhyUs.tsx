import { NavLink } from '@remix-run/react';
import icono1 from '/icono1.png';
import icono2 from '/icono2.png';
import icono3 from '/icono3.png';
import icono4 from '/icono4.png';
import icono5 from '/icono5.png';
import icono6 from '/icono6.png';
import videoplaceholder from '/video.png';
import why1 from '/why1.png';
import why2 from '/why2.png';
import why3 from '/why3.png';
import vector2 from '/vector2.png';

function WhyUs() {
  return (
 
      <div  className='relative container-section bg-background pt-8'>
        <img src={vector2} alt="Vector 2" className="absolute z-0 top-0 left-0 w-16 lg:w-64" />
        {/* Otras secciones previas */}
        <div className='content-section flex flex-row flex-wrap items-center'>
        <div className=" w-full py-4 lg:pb-16">
          {/* Imagen vectorial en absolute */}
          

          <p className="text-[28px] z-100 md:text-[33px] lg:text-[38px] xl:text-[44px] font-normal leading-[36px] md:leading-[54px] lg:leading-[64px] text-primary mb-12 text-center">
            ¿Por qué trabajar con nosotros?
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-16 z-[660]">

            {/* Card 1 */}
            <div className="relative bg-[#E6EBF1] border border-primary shadow-2xl shadow-primary/20 p-6 rounded-xl mx-auto max-w-[400px]">
              <img src={why1} alt="Facilidad en la Nómina" className="h-16 w-16 mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-center text-primary mb-2">
                Facilidad en la Nómina
              </h3>
              <p className="text-center text-neutral-600">
                Procesamiento rápido y sencillo con funcionalidades intuitivas, portales de autogestión para empleados, cuadros de mando predefinidos, con objetivo en mejorar la eficiencia laboral.
              </p>
            </div>

            {/* Card 2 */}
            <div className="relative bg-[#E6EBF1] border border-primary shadow-2xl shadow-primary/20 p-6 rounded-xl   mx-auto max-w-[400px]">
              <img src={why2} alt="Seguridad en los Datos" className="h-16 w-16 mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-center text-primary mb-2">
                Seguridad en los Datos
              </h3>
              <p className="text-center text-neutral-600">
                La seguridad de tus datos es nuestra prioridad. Con sistemas respaldados por tecnología de vanguardia, garantizamos la protección de tu información.
              </p>
            </div>

            {/* Card 3 */}
            <div className="relative bg-[#E6EBF1] border border-primary shadow-2xl shadow-primary/20 p-6 rounded-xl mx-auto  max-w-[400px]">
              <img src={why3} alt="Transparencia Total" className="h-16 w-16 mb-4 mx-auto" />
              <h3 className="text-xl font-bold text-center text-primary mb-2">
                Transparencia Total
              </h3>
              <p className="text-center text-neutral-600">
                Transparencia en cada paso. Desde el primer contacto hasta la implementación, te ofrecemos una comunicación abierta y honesta para un camino sin sorpresas.
              </p>
            </div>
          </div>
        </div>
        </div>

        {/* Nueva Sección: ¿Por qué trabajar con nosotros? */}
        
      </div>
   );
}

export default WhyUs;
