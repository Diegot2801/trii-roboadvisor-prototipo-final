import React, { useState } from 'react';
import { ArrowLongRightIcon } from '@heroicons/react/24/outline'; // Icono de flecha
import InvestmentChart from './InvestmentChart'; // Importa el componente de la gráfica

function RecommendationCard({ recommendation, onReset }) {
  const [showSimulation, setShowSimulation] = useState(false);
  const initialInvestment = 1000000; // Asumimos una inversión inicial de 1 millón COP para la simulación

  const simulateInvestment = (initialAmount, multiplier, years) => {
    let finalAmount = initialAmount;
    for (let i = 0; i < years; i++) {
      finalAmount *= multiplier;
    }
    return finalAmount.toLocaleString('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 });
  };

  const fundsData = recommendation.funds.map(fund => ({
    name: fund.name,
    percentage: fund.percentage,
  }));

  return (
    <div className="bg-trii-gray-700 p-6 sm:p-8 rounded-lg shadow-lg w-full max-w-md mx-auto text-trii-text-color">
      <h2 className="text-3xl font-Formula_Condensed text-trii-accent-green mb-4 text-center">
        ¡PERFIL {recommendation.name.toUpperCase()}!
      </h2>
      <p className="mb-6 text-center font-DM_Sans text-trii-text-color/90">
        {recommendation.description}
      </p>

      <div className="mb-6 border-t border-b border-trii-medium-green py-4">
        <h3 className="text-xl font-Formula_Condensed text-trii-accent-green mb-3">
          Portafolio Recomendado:
        </h3>
        {recommendation.funds.map((fund, index) => (
          <p key={index} className="flex justify-between items-center text-lg font-DM_Sans mb-1">
            <span>{fund.name}</span>
            <span className="font-bold text-trii-accent-green">{fund.percentage}%</span>
          </p>
        ))}
        <div className="mt-4">
          <InvestmentChart data={fundsData} />
        </div>
      </div>

      <button
        onClick={() => setShowSimulation(!showSimulation)}
        className="w-full bg-trii-accent-green hover:bg-trii-medium-green text-trii-dark-green font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out text-lg font-DM_Sans flex items-center justify-center mb-4"
      >
        <ArrowLongRightIcon className="h-6 w-6 mr-2" />
        {showSimulation ? 'Ocultar Simulación' : 'Simular Inversión a 5 Años'}
      </button>

      {showSimulation && (
        <div className="bg-trii-gray-800 p-4 rounded-md mt-4 border border-trii-medium-green">
          <h3 className="text-xl font-Formula_Condensed text-trii-accent-green mb-2">
            Proyección a 5 Años:
          </h3>
          <p className="text-lg font-DM_Sans mb-2">
            Invirtiendo inicialmente $1.000.000 COP, podrías tener:
          </p>
          <p className="text-3xl font-bold text-trii-accent-green text-center font-DM_Sans">
            {simulateInvestment(initialInvestment, recommendation.projectionMultiplier, 5)}
          </p>
          <p className="text-sm text-trii-text-color/70 mt-2 text-center font-DM_Sans">
            *Proyección simulada. Rendimientos pasados no garantizan rendimientos futuros.
          </p>
        </div>
      )}

      <button
        onClick={onReset}
        className="w-full border-2 border-trii-accent-green text-trii-accent-green hover:bg-trii-accent-green hover:text-trii-dark-green font-bold py-3 px-4 rounded-md transition duration-300 ease-in-out text-lg font-DM_Sans mt-4"
      >
        Volver a calcular
      </button>
    </div>
  );
}

export default RecommendationCard;