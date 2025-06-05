import React, { useState } from 'react';
import QuestionnaireForm from './components/QuestionnaireForm';
import RecommendationCard from './components/RecommendationCard';

function App() {
  const [recommendation, setRecommendation] = useState(null);

  const handleProfileCalculation = (profileData) => {
    // Esta función recibirá el perfil calculado del formulario
    setRecommendation(profileData);
  };

  return (
    <div className="min-h-screen bg-[#00190c] text-[#f2f2f2] flex flex-col items-center justify-center p-4">
      <header className="mb-8 text-center">
        <h1 className="text-4xl md:text-5xl font-['Formula_Condensed'] text-[#02fb7e] mb-2">
          TRII ROBOADVISOR
        </h1>
        <p className="text-lg md:text-xl font-['DM_Sans']">
          Tu camino hacia la inversión inteligente
        </p>
      </header>

      {!recommendation ? (
        <QuestionnaireForm onProfileCalculated={handleProfileCalculation} />
      ) : (
        <RecommendationCard recommendation={recommendation} onReset={() => setRecommendation(null)} />
      )}

      {/* Aquí podemos agregar el logo de Trii si lo tienes en un formato web */}
      <footer className="mt-8">
        {/* Placeholder para el logo de Trii si no se carga la imagen */}
        <span className="text-xl font-['DM_Sans'] text-[#02fb7e]">▲trii</span>
      </footer>
    </div>
  );
}

export default App;