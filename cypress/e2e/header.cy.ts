describe('Пользователь заходит на главную страницу', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('И видит содержимое раздела хедера "Части речи"', () => {
    cy.getByTestId('Header__Части_речи__submenu').should('exist');
  });

  it('И видит содержимое раздела хедера "Тесты"', () => {
    cy.getByTestId('Header__Тесты__submenu').should('exist');
  });

  it('И видит содержимое раздела хедера "Диктанты"', () => {
    cy.getByTestId('Header__Диктанты__submenu').should('exist');
    cy.getByTestId('Header__Диктанты__submenu__submenu').should('exist');
  });
});
