import React, { useState } from 'react';
import { InformationCircleIcon } from '@heroicons/react/24/outline'; // Icono para la ayuda

function QuestionnaireForm({ onProfileCalculated }) {
  const [age, setAge] = useState('');
  const [salary, setSalary] = useState('');
  const [errors, setErrors] = useState({});

  const profiles = {
    aggressive: {
      name: 'Agresivo',
      description: 'Este perfil busca el mayor crecimiento posible, asumiendo un riesgo más alto. Ideal para inversionistas jóvenes con un horizonte de largo plazo.',
      funds: [
        { name: 'Protección Acciones Globales', percentage: 70 },
        { name: 'Protección Balanceado', percentage: 30 },
      ],
      projectionMultiplier: 1.10, // Simulación de crecimiento anual (10%)
    },
    moderate: {
      name: 'Moderado',
      description: 'Un equilibrio entre riesgo y rendimiento. Adecuado para quienes buscan crecer su capital sin exposición excesiva.',
      funds: [
        { name: 'Protección Balanceado', percentage: 50 },
        { name: 'Protección Renta Fija', percentage: 50 },
      ],
      projectionMultiplier: 1.07, // Simulación de crecimiento anual (7%)
    },
    conservative: {
      name: 'Conservador',
      description: 'Prioriza la preservación del capital y la estabilidad. Ideal para quienes prefieren un riesgo bajo y rendimientos estables.',
      funds: [
        { name: 'Protección Conservador Corto Plazo', percentage: 70 },
        { name: 'Protección Renta Fija', percentage: 30 },
      ],
      projectionMultiplier: 1.04, // Simulación de crecimiento anual (4%)
    },
  };

  const calculateProfile = () => {
    const newErrors = {};
    const parsedAge = parseInt(age);
    const parsedSalary = parseFloat(salary);

    if (isNaN(parsedAge) || parsedAge < 18 || parsedAge > 80) {
      newErrors.age = 'Por favor, ingresa una edad válida (entre 18 y 80).';
    }
    if (isNaN(parsedSalary) || parsedSalary <= 0) {
      newErrors.salary = 'Por favor, ingresa un salario mensual válido.';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({}); // Limpia errores si todo es válido

    let userProfile;
    if (parsedAge < 35 && parsedSalary > 4000000) { // Asumiendo COP
      userProfile = profiles.aggressive;
    } else if ((parsedAge >= 35 && parsedAge <= 50) || (parsedSalary >= 2000000 && parsedSalary <= 4000000)) {
      userProfile = profiles.moderate;
    } else { // parsedAge > 50 o parsedSalary < 2000000
      userProfile = profiles.conservative;
    }

    onProfileCalculated(userProfile);
  };

  return (
    <div className="bg-trii-gray-700 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md mx-auto">
      <h2 className="text-3xl font-Formula_Condensed text-trii-accent-green mb-6 text-center">
        DESCUBRE TU PERFIL
      </h2>

      <div className="mb-4">
        <label htmlFor="age" className="block text-trii-text-color text-md font-DM_Sans mb-2">
          ¿Cuál es tu edad?
        </label>
        <input
          type="number"
          id="age"
          className={`w-full p-3 bg-trii-gray-800 border ${errors.age ? 'border-red-500' : 'border-trii-medium-green'} rounded-md text-trii-text-color placeholder-trii-text-color/50 focus:outline-none focus:ring-2 focus:ring-trii-accent-green font-DM_Sans`}
          placeholder="Ej: 30"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        {errors.age && <p className="text-red-500 text-sm mt-1 font-DM_Sans">{errors.age}</p>}
      </div>

      <div className="mb-6">
        <label htmlFor="salary" className="block text-trii-text-color text-md font-DM_Sans mb-2">
          ¿Cuál es tu salario mensual aproximado? (COP)
        </label>
        <input
          type="number"
          id="salary"
          className={`w-full p-3 bg-trii-gray-800 border ${errors.salary ? 'border-red-500' : 'border-trii-medium-green'} rounded-md text-trii-text-color placeholder-trii-text-color/50 focus:outline-none focus:ring-2 focus:ring-trii-accent-green font-DM_Sans`}
          placeholder="Ej: 3500000"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        {errors.salary && <p className="text-red-500 text-sm mt-1 font-DM_Sans">{errors.salary}</p>}
        <p className="text-trii-text-color/70 text-sm mt-2 flex items-center font-DM_Sans">
          <InformationCircleIcon className="h-4 w-4 mr-1" />
          Solo usaremos esta información para recomendarte el mejor portafolio.
        </p>
      </div>

      <button
        onClick={calculateProfile}
        className="w-full bg-trii-accent-green hover:bg-trii-medium-green text-trii-dark-green font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out text-lg font-DM_Sans"
      >
        Calcular mi perfil
      </button>
    </div>
  );
}

export default QuestionnaireForm;