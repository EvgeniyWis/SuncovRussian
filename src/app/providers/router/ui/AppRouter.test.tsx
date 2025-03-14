import { screen, waitFor } from '@testing-library/react';
import { AppRouter } from './AppRouter';
import { renderWithProviders } from '@/shared/tests/renderWithProviders';
import { getRouteMain } from '@/shared/const/router';

describe('AppRouter', () => {
  test('Страница должна отрендериться', async () => {
    renderWithProviders(<AppRouter />, getRouteMain());

    await waitFor(() => {
      const page = screen.queryByTestId('MainPage');
      expect(page).toBeInTheDocument();
    });
  });

  test('Страница не найдена', async () => {
    renderWithProviders(<AppRouter />, '/sasasa');

    await waitFor(() => {
      const page = screen.queryByTestId('NotFoundPage');
      expect(page).toBeInTheDocument();
    });
  });
});
