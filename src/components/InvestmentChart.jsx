import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Registrar los elementos necesarios de Chart.js
ChartJS.register(ArcElement, Tooltip, Legend);

function InvestmentChart({ data }) {
  const chartData = {
    labels: data.map(fund => fund.name),
    datasets: [
      {
        data: data.map(fund => fund.percentage),
        backgroundColor: [
          '#02fb7e', // trii-accent-green
          '#024c25', // trii-medium-green
          '#00190c', // trii-dark-green (si hubiera un tercer fondo, aunque aquí solo hay dos)
          // Puedes añadir más colores si los portafolios tuvieran más de 2 fondos
        ],
        borderColor: [
          '#00190c',
          '#00190c',
          '#00190c',
        ],
        borderWidth: 2,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false, // Permite que la gráfica se ajuste mejor
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          color: '#f2f2f2', // Color del texto de la leyenda
          font: {
            family: '"DM Sans"', // Aplicar fuente DM Sans a la leyenda
            size: 14,
          },
        },
      },
      tooltip: {
        callbacks: {
          label: function(context) {
            let label = context.label || '';
            if (label) {
              label += ': ';
            }
            if (context.parsed !== null) {
              label += context.parsed + '%';
            }
            return label;
          }
        },
        titleFont: {
          family: '"DM Sans"',
        },
        bodyFont: {
          family: '"DM Sans"',
        },
      }
    },
  };

  return (
    <div className="h-48 w-48 mx-auto"> {/* Ajusta el tamaño del contenedor si es necesario */}
      <Doughnut data={chartData} options={options} />
    </div>
  );
}

export default InvestmentChart;