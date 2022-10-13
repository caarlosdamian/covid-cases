import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useChartDataFormatter } from '../../hooks/useChartDataFormatter';
import { IChartProps } from '../../interfaces';

ChartJS.register(ArcElement, Tooltip, Legend);

// eslint-disable-next-line max-len
export const DoughtnutChart = ({ dataSet }: IChartProps) => (
  <Doughnut data-testid="Chart" data={useChartDataFormatter({ dataSet })} />
);
