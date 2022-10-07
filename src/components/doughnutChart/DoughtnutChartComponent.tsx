import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { chartDataFormatter } from './chartData/dataFormatter';
import { data } from './chartData/dataMock';

ChartJS.register(ArcElement, Tooltip, Legend);

export const DoughtnutChart = () => (
  <Doughnut data={chartDataFormatter(data)} />
);
