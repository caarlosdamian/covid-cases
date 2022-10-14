/* eslint-disable no-array-constructor */
import { IChartProps } from '../interfaces';

export const useChartDataFormatter = ({ dataSet }: IChartProps) => {
  const label = dataSet.reduce(
    (pre, cur) => pre.concat(cur.region.province),
    new Array()
  );
  const datas = dataSet.reduce(
    (pre, cur) => pre.concat(cur.confirmed),
    new Array()
  );
  let temp;
  let temp2;
  for (let i = 1; i < datas.length; i += 1) {
    let j = i;
    temp = datas[i];
    temp2 = label[i];
    while (j > 0 && datas[j - 1] > temp) {
      datas[j] = datas[j - 1];
      label[j] = label[j - 1];
      j -= 1;
    }
    datas[j] = temp;
    label[j] = temp2;
  }
  const exportData = {
    labels: label,
    datasets: [
      {
        label: '# of cases per state',
        data: datas,
        backgroundColor: [
          '#1ba9ea',
          '#94e8b4',
          '#59c9a5',
          '#001242',
          '#000022',
        ],
        borderColor: ['#1ba9ea', '#94e8b4', '#59c9a5', '#001242', '#000022'],
        hoverBorderColor: [
          '#3ABAF5',
          '#9FF5C0',
          '#62E6BC',
          '#00268E',
          '#000074',
        ],
        borderWidth: 2,
        hoverOffset: 20,
        hoverBorderWidth: 4,
        rotation: 140,
      },
    ],
  };
  return exportData;
};
