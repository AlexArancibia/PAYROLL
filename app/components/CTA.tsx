import cta1 from '/cta1.png';
import icon7 from '/icon7.png';
import icon8 from '/icon8.png';
import icon9 from '/icon9.png';
import icon10 from '/icon10.png';
import icon11 from '/icon11.png';
import icon12 from '/icon12.png';

function CTA() {
  return (
    <div className="w-full relative h-[700px] lg:h-[650px] bg-cover bg-top flex flex-wrap" style={{ backgroundImage: `url(${cta1})` }}>
      <img src={icon7} alt="Icon 7" className="absolute top-[5%] right-[30%] w-[50px] lg:top-[10%] lg:left-[10%] lg:w-[86px]" />
      <img src={icon8} alt="Icon 8" className="absolute top-[52%] right-[30%] w-[50px] lg:top-[45%] lg:left-[5%] lg:w-[86px]" />
      <img src={icon9} alt="Icon 9" className="absolute top-[48%] right-[50%] w-[50px] lg:top-[80%] lg:left-[10%] lg:w-[86px]" />
      <img src={icon10} alt="Icon 10" className="absolute top-[15%] right-[20%] w-[50px] lg:top-[10%] lg:right-[55%] lg:w-[86px]" />
      <img src={icon11} alt="Icon 11" className="absolute top-[25%] right-[12%] w-[50px] lg:top-[45%] lg:right-[50%] lg:w-[86px]" />
      <img src={icon12} alt="Icon 12" className="absolute top-[40%] right-[12%] w-[50px] lg:top-[80%] lg:right-[55%] lg:w-[86px]" />

        
   
      {/* Sección vacía que cubre el 60% del ancho */}
      <div className="w-1/5 lg:w-[60%]"></div>
      
      {/* Sección con el contenido desde el 60% */}
      <div className="w-4/5 lg:w-[40%] max-h-[3 00px] bg-white/50 backdrop-blur-lg rounded-l-3xl py-12 px-8 flex flex-col justify-center items-end mt-auto mb-12 lg:my-auto">
        {/* Primer texto */}
        <p className="text-2xl lg:text-3xl font-medium text-neutral-800 mb-2 text-center lg:text-right">
          Contamos con la confianza de<br/>las principales 
        </p>
        {/* Segundo texto */}
        <p className="text-4xl md:text-5xl lg:text-6xl  font-bold text-primary text-right">
          Empresas del Perú
        </p>
      </div>
    </div>
  );
}

export default CTA;