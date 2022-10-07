/* eslint-disable no-plusplus */
/* eslint-disable no-array-constructor */

export const chartDataFormatter = (dataset: Array<any>) => {
  const label = new Array();
  const datas = new Array();
  dataset.forEach(
    (
      element: { region: { province: string }; confirmed: number },
      index: number
    ) => {
      label[index] = element.region.province;
      datas[index] = element.confirmed;
    }
  );
  let temp;
  let temp2;
  for (let i = 1; i < datas.length; i++) {
    let j = i;
    temp = datas[i];
    temp2 = label[i];
    while (j > 0 && datas[j - 1] > temp) {
      datas[j] = datas[j - 1];
      label[j] = label[j - 1];
      j--;
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
