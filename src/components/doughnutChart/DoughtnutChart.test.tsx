import { render, screen } from '@testing-library/react';
import { DoughtnutChart } from './DoughtnutChart';
import { data } from '../../utils/ChartDataMock';

describe('Chart renders correctly', () => {
  beforeAll(() => {
    render(
      <div>
        <DoughtnutChart dataSet={data} />
      </div>
    );
  });

  it('Renders without crashing', () => {
    expect(screen.getByTestId('Chart')).toBeDefined();
  });
});
