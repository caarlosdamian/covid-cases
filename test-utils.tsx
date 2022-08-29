import React from 'react';
import { render } from '@testing-library/react';
import { Provider } from 'react-redux';
import { MemoryRouter } from 'react-router-dom';
import { store } from './src/redux/Store';

const AllTheProviders = ({ children }: any) => (
  <Provider store={store}>
    <MemoryRouter>{children}</MemoryRouter>
  </Provider>
);

const customRender = (ui: any) => render(ui, { wrapper: AllTheProviders });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
