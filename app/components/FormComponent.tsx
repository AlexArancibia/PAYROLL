import React, { useState, ChangeEvent, FormEvent } from 'react';
import { FaCheck } from 'react-icons/fa';
import rayo from '/rayo.png';
import paid from '/paid.png';
import emailjs from '@emailjs/browser';

interface FormComponentProps {
  onClose: () => void;
}

const FormComponent: React.FC<FormComponentProps> = ({ onClose }) => {
  const [frequency, setFrequency] = useState<string[]>([]);
  const [companyName, setCompanyName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [ruc, setRuc] = useState<string>('');
  const [workerCount, setWorkerCount] = useState<number>(0);
  const [message, setMessage] = useState<string>('');
  const [termsAccepted, setTermsAccepted] = useState<boolean>(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleFrequencyChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFrequency(prev => 
      prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]
    );
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};

    if (!companyName.trim()) {
      newErrors.companyName = "El nombre de la empresa es obligatorio";
    }

    if (!email.trim()) {
      newErrors.email = "El correo electrónico es obligatorio";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "El correo electrónico no es válido";
    }

    if (!ruc.trim()) {
      newErrors.ruc = "El RUC es obligatorio";
    } else if (ruc.length !== 11 || !/^\d+$/.test(ruc)) {
      newErrors.ruc = "El RUC debe tener 11 dígitos";
    }

    if (workerCount <= 0) {
      newErrors.workerCount = "La cantidad de trabajadores debe ser mayor a 0";
    }

    if (frequency.length === 0) {
      newErrors.frequency = "Debe seleccionar al menos una frecuencia de pago";
    }

    if (!termsAccepted) {
      newErrors.terms = "Debe aceptar los términos y condiciones";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    const serviceId = 'service_3674kt4';
    const templateId = 'template_9o5750m';
    const userId = '6YlUD-lV9jLuoM3VV';

    const emailData = {
      companyName,
      email,
      ruc,
      workerCount: workerCount.toString(),
      frequency: frequency.join(', '),
      message,
    };

    emailjs
      .send(serviceId, templateId, emailData, userId)
      .then(() => {
        console.log('Correo enviado con éxito');
        alert('Formulario enviado correctamente');
        onClose();
      })
      .catch((error) => {
        console.error('Error al enviar el correo:', error);
        alert('Hubo un problema al enviar el formulario. Inténtalo de nuevo.');
      });
  };

  return (
    <div id='contactanos' className="bg-gray-100">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-8 items-center">
        <div className="flex flex-col justify-center items-center lg:items-center text-center lg:text-center p-8">
          <img src={rayo} alt="Rayo" className="w-[100px] lg:w-[150px] lg:mx-auto mb-4" />
          <p className="text-3xl lg:text-4xl font-medium">
            Impresionantemente<br/> <span className="font-bold text-primary">rápido</span>
          </p>
          <p className="text-lg mt-4">Experimente el siguiente nivel de nómina.</p>
          <p className="text-lg">¡Reserve una demostración!</p>
        </div>

        <div className='p-4 lg:p-4 lg:px-12 lg:pl-0'>
          <div className="p-4 rounded-lg w-full">
            <form className="space-y-4" onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  required
                  placeholder="Nombre de empresa"
                  value={companyName}
                  onChange={(e) => setCompanyName(e.target.value)}
                  className={`w-full px-4 py-2 bg-[#E6EBF1] focus:outline-none border ${errors.companyName ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                />
                {errors.companyName && <p className="text-red-500 text-sm mt-1">{errors.companyName}</p>}
              </div>

              <div>
                <input
                  type="email"
                  required
                  placeholder="Correo electrónico"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className={`w-full px-4 py-2 bg-[#E6EBF1] focus:outline-none border ${errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
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
                    className={`w-full px-4 py-2 bg-[#E6EBF1] focus:outline-none border ${errors.ruc ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                  />
                  {errors.ruc && <p className="text-red-500 text-sm mt-1">{errors.ruc}</p>}
                </div>
                <div className="flex items-center">
                  <label className="text-sm font-semibold mr-2">Cantidad de trabajadores</label>
                  <input
                    type="number"
                    required
                    value={workerCount}
                    onChange={(e) => setWorkerCount(Number(e.target.value))}
                    className={`w-32 px-2 py-1 bg-[#E6EBF1] focus:outline-none border ${errors.workerCount ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                  />
                </div>
              </div>
              {errors.workerCount && <p className="text-red-500 text-sm mt-1">{errors.workerCount}</p>}

              <div>
                <label className="text-sm font-semibold">Escoge la frecuencia con que realizarás tus pagos</label>
                <div className="flex flex-col lg:flex-row gap-1 lg:gap-4 justify-between mt-2">
                  {['semanal', 'quincenal', 'mensual'].map((option) => (
                    <label key={option} className="flex items-center cursor-pointer w-full">
                      <input
                        type="checkbox"
                        value={option}
                        checked={frequency.includes(option)}
                        onChange={handleFrequencyChange}
                        className="hidden"
                      />
                      <div className={`flex flex-col items-center w-full p-2 border-2 ${errors.frequency ? 'border-red-500' : 'border-primary'} rounded-xl transition-all duration-300 ${frequency.includes(option) ? 'bg-primary text-white shadow-lg' : 'bg-background'}`}>
                        {frequency.includes(option) ? (
                          <>
                            <div className="flex items-center justify-center w-6 h-6 rounded-full bg-green-500 my-2">
                              <FaCheck className="text-primary transition-transform duration-300" size={12} />
                            </div>
                            <span className="text-base text-white font-semibold">{`Pago ${option}`}</span>
                          </>
                        ) : (
                          <>
                            <img src={paid} alt={`Pago ${option}`} className="my-[6px] transition-transform duration-300" />
                            <span className="text-base text-primary font-semibold">{`Pago ${option}`}</span>
                          </>
                        )}
                      </div>
                    </label>
                  ))}
                </div>
                {errors.frequency && <p className="text-red-500 text-sm mt-1">{errors.frequency}</p>}
              </div>

              <div>
                <textarea
                  placeholder="Coméntenos alguna particularidad especial de su proceso de pago"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2 bg-[#E6EBF1] focus:outline-none border border-gray-300 rounded-md"
                  rows={3}
                />
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="terms"
                  checked={termsAccepted}
                  onChange={(e) => setTermsAccepted(e.target.checked)}
                  className={`mr-2 ${errors.terms ? 'border-red-500' : ''}`}
                  required
                />
                <label htmlFor="terms" className="text-sm">He leído y acepto las condiciones de privacidad y tratamiento de mis datos personales.</label>
              </div>
              {errors.terms && <p className="text-red-500 text-sm mt-1">{errors.terms}</p>}

              <button type="submit" className="w-full bg-primary text-white py-2 rounded-lg hover:bg-green-800 transition duration-300">Enviar</button>
            </form>
          </div>
        </div>
      </div>

      <div className="mt-6 py-8 px-8 text-center bg-gray-200 rounded-xl">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl text-center lg:text-left font-bold">Impulsando el éxito con los datos</h3>
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

