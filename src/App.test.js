import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

test('renders header', () => {
  render(
    <MemoryRouter initialEntries={['/dashboard']}>
      <App />
    </MemoryRouter>
  );

  // Assert that the Header component is rendered
  const headerElement = screen.getByTestId('header');
  expect(headerElement).toBeInTheDocument();
});

test('renders dashboard route', () => {
  render(
    <MemoryRouter initialEntries={['/dashboard']}>
      <App />
    </MemoryRouter>
  );

  // Assert that the Dashboard component is rendered
  const dashboardElement = screen.getByTestId('dashboard');
  expect(dashboardElement).toBeInTheDocument();
});

test('renders sales route', () => {
  render(
    <MemoryRouter initialEntries={['/sales']}>
      <App />
    </MemoryRouter>
  );

  // Assert that the Sales component is rendered
  const salesElement = screen.getByTestId('sales');
  expect(salesElement).toBeInTheDocument();
});

test('renders inventory route', () => {
  render(
    <MemoryRouter initialEntries={['/inventory']}>
      <App />
    </MemoryRouter>
  );

  // Assert that the Inventory component is rendered
  const inventoryElement = screen.getByTestId('inventory');
  expect(inventoryElement).toBeInTheDocument();
});

test('renders customers route', () => {
  render(
    <MemoryRouter initialEntries={['/customers']}>
      <App />
    </MemoryRouter>
  );

  // Assert that the Customers component is rendered
  const customersElement = screen.getByTestId('customers');
  expect(customersElement).toBeInTheDocument();
});

test('renders reports route', () => {
  render(
    <MemoryRouter initialEntries={['/reports']}>
      <App />
    </MemoryRouter>
  );

  // Assert that the Reports component is rendered
  const reportsElement = screen.getByTestId('reports');
  expect(reportsElement).toBeInTheDocument();
});

test('renders settings route', () => {
  render(
    <MemoryRouter initialEntries={['/settings']}>
      <App />
    </MemoryRouter>
  );

  // Assert that the Settings component is rendered
  const settingsElement = screen.getByTestId('settings');
  expect(settingsElement).toBeInTheDocument();
});