import React, { useState, ChangeEvent } from 'react';
import rayo from '/rayo.png';
import paid from '/paid.png'; 
interface FormComponentProps {
  onClose: () => void; // Callback para cerrar el modal
}

const FormComponent: React.FC<FormComponentProps> = ({ onClose }) => {
  const [frequency, setFrequency] = useState<string>('');
  const [companyName, setCompanyName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [ruc, setRuc] = useState<string>('');
  const [workerCount, setWorkerCount] = useState<number>(0);
  const [message, setMessage] = useState<string>('');
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);

  const handleFrequencyChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFrequency(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({
      companyName,
      email,
      ruc,
      workerCount,
      frequency,
      message,
      termsAccepted,
    });
    onClose(); // Cerrar el modal después de enviar el formulario
  };

  return (
    <div id='contactanos' className="   bg-gray-100">
 
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 items-center">

          {/* Columna izquierda: Imagen y descripción */}
          <div className="flex flex-col justify-center items-center lg:items-center text-center lg:text-center p-8">
            <img src={rayo} alt="Rayo" className="w-[100px] lg:w-[150px]  lg:mx-auto mb-4" />
            <h2 className="text-3xl lg:text-4xl font-semibold">
              Impresionantemente<br/> <span className="font-bold text-primary">rápido</span>
            </h2>
            <p className="text-lg mt-4 ">Experimente el siguiente nivel de nómina.</p>
            <p className="text-lg ">¡Reserve una demostración!</p>
          </div>

          {/* Columna derecha: Formulario */}
          <div className='p-4 lg:p-8 lg:pl-0'>
          <div className="p-4 bg-white rounded-lg shadow-md w-full">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  required
                  placeholder="Nombre de empresa"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-100 focus:outline-none border border-gray-300 rounded-md"
                />
              </div>

              <div>
                <input
                  type="email"
                  required
                  placeholder="Correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-100 focus:outline-none border border-gray-300 rounded-md"
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    required
                    pattern="[0-9]*"
                    inputMode="numeric"
                    placeholder="RUC"
                    value={ruc}
                    onChange={(e) => setRuc(e.target.value)}
                    className="w-full px-4 py-2 bg-gray-100 focus:outline-none border border-gray-300 rounded-md"
                  />
                </div>
                <div className="flex items-center">
                  <label className="text-sm font-semibold mr-2">Cantidad de trabajadores</label>
                  <input
                    type="number"
                    required
                    value={workerCount}
                    onChange={(e) => setWorkerCount(Number(e.target.value))}
                    className="w-32 px-2 py-1 bg-gray-100 focus:outline-none border border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-semibold">Escoge la frecuencia con que realizarás tus pagos</label>
                <div className="flex gap-1 lg:gap-4 justify-between mt-2">
                  <label className="flex items-center text-center cursor-pointer w-full">
                    <input
                      type="radio"
                      value="semanal"
                      checked={frequency === 'semanal'}
                      onChange={handleFrequencyChange}
                      className="hidden"
                    />
                    <div className={`flex flex-col items-center   w-full p-2 border border-gray-300 rounded-md ${frequency === 'semanal' ? 'bg-gray-200' : 'bg-white'}`}>
                      <img src={paid} alt="Pago semanal" className="mb-1" />
                      <span className="text-sm">Pago semanal</span>
                    </div>
                  </label>

                  <label className="flex items-center cursor-pointer w-full">
                    <input
                      type="radio"
                      value="quincenal"
                      checked={frequency === 'quincenal'}
                      onChange={handleFrequencyChange}
                      className="hidden"
                    />
                    <div className={`flex flex-col items-center text-center  w-full p-2 border border-gray-300 rounded-md ${frequency === 'quincenal' ? 'bg-gray-200' : 'bg-white'}`}>
                      <img src={paid} alt="Pago quincenal" className="mb-1" />
                      <span className="text-sm">Pago quincenal</span>
                    </div>
                  </label>

                  <label className="flex items-center cursor-pointer w-full">
                    <input
                      type="radio"
                      value="mensual"
                      checked={frequency === 'mensual'}
                      onChange={handleFrequencyChange}
                      className="hidden"
                    />
                    <div className={`flex flex-col items-center w-full text-center  p-2 border border-gray-300 rounded-md ${frequency === 'mensual' ? 'bg-gray-200' : 'bg-white'}`}>
                      <img src={paid} alt="Pago mensual" className="mb-1" />
                      <span className="text-sm">Pago mensual</span>
                    </div>
                  </label>
                </div>
              </div>

              <div>
                <textarea
                  required
                  placeholder="Coméntenos alguna particularidad especial de su proceso de pago"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 bg-gray-100 focus:outline-none border border-gray-300 rounded-md"
                  rows={4} 
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className="mr-2"
                  required
                />
                <label htmlFor="terms" className="text-sm">He leído y acepto las condiciones de privacidad y tratamiento de mis datos personales.</label>
              </div>

              <button type="submit" className="w-full bg-primary text-white py-2 rounded-lg hover:bg-green-800 transition duration-300">Enviar</button>
            </form>
          </div>
          </div>
        
        
        </div>

        {/* Sección de Fun Facts */}
        <div className="mt-6 py-8 px-8 text-center bg-gray-200 rounded-xl">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl text-center lg:text-left font-bold ">Impulsando el éxito con los datos</h3>
            </div>
            <div>
              <p className="text-4xl font-bold">150+</p>
              <p className="text-lg">Países que cumplen</p>
            </div>
            <div>
              <p className="text-4xl font-bold">500+</p>
              <p className="text-lg">Clientes satisfechos</p>
            </div>
            <div>
              <p className="text-4xl font-bold">36M+</p>
              <p className="text-lg">Recibos de nómina por año</p>
            </div>
          </div>
        </div>
      </div>
 
  );
};

export default FormComponent;
