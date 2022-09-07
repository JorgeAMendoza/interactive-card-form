/// <reference types="cypress" />

describe('initial page load', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-testid="cardForm"]').as('cardForm');
    cy.get('[data-testid="cardDisplayName"]').as('cardDisplayName');
    cy.get('[data-testid="cardDisplayNumber"]').as('cardDisplayNumber');
    cy.get('[data-testid="cardDisplayDate"]').as('cardDisplayDate');
    cy.get('[data-testid="cardDisplayCVC"]').as('cardDisplayCVC');
  });

  test('default values for displayed are rendered with 0s', () => {
    cy.get('@cardDisplayNumber').should('contain.text', '0000 0000 0000 0000');
    cy.get('@cardDisplayName').should('contain.text', 'JANE APPLESEED');
    cy.get('@cardDisplayDate').should('contain.text', '00/00');
    cy.get('@cardDisplayCVC').should('contain.text', '000');
  });
});

describe('edit form and edit card display', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-testid="cardDisplayName"]').as('cardDisplayName');
    cy.get('[data-testid="cardDisplayNumber"]').as('cardDisplayNumber');
    cy.get('[data-testid="cardDisplayDate"]').as('cardDisplayDate');
    cy.get('[data-testid="cardDisplayCVC"]').as('cardDisplayCVC');

    cy.get('[data-testid="cardForm"]').as('cardForm');
    cy.get('[data-testid="cardFormNameInput"]').as('cardFormNameInput');
    cy.get('[data-testid="cardFormNumberInput"]').as('cardFormNumberInput');
    cy.get('[data-testid="cardFormMonthInput"]').as('cardFormMonthInput');
    cy.get('[data-testid="CardFormYearInput"]').as('cardFormYearInput');
    cy.get('[data-testid="cardFormCVCInput"]').as('cardFormCVCInput');
    cy.get('[data-testid="cardFormConfirmButton"]').as('cardFormConfirmButton');
  });

  test('card holder name updated on display', () => {
    cy.get('@cardFormNameInput').type('Jorge Mendoza');
    cy.get('@cardDisplayName').should('contain.text', 'Jorge Mendoza');
  });

  test('card number updated with a few numbers', () => {
    cy.get('@cardFormNumberInput').type('123456');
    cy.get('@carDisplayNumber').should('contain.text', '1234 5600 0000 0000');
  });

  test('card number updated with full card number', () => {
    cy.get('@cardFormNumberInput').type('1234567812345678');
    cy.get('@cardDisplayNumber').should('contain.text', '1234 5678 1234 5678');
  });

  test('date updated with month', () => {
    cy.get('@cardFormMonthInput').type('1');
    cy.get('@cardDisplayDate').should('contain.text', '01/00');
  });

  test('date updated with month and year', () => {
    cy.get('@cardFormYearInput').type('22');
    cy.get('@cardFormMonthInput').type('1');
    cy.get('@cardDisplayDate').should('contain.text', '01/22');
  });

  test('cvc updated with one number', () => {
    cy.get('@cardFormCVCInput').type('1');
    cy.get('@cardDisplayBackCVC').should('contain.text', '100');
  });

  test('cvc updated with all numbers', () => {
    cy.get('@cardFormCVCInput').type('123');
    cy.get('@cardDisplayBackCVC').should('contain.text', '123');
  });
});

describe('submit valid form', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-testid="cardDisplayName"]').as('cardDisplayName');
    cy.get('[data-testid="cardDisplayNumber"]').as('cardDisplayNumber');
    cy.get('[data-testid="cardDisplayDate"]').as('cardDisplayDate');
    cy.get('[data-testid="cardDisplayCVC"]').as('cardDisplayCVC');

    cy.get('[data-testid="cardForm"]').as('cardForm');
    cy.get('[data-testid="cardFormNameInput"]').as('cardFormNameInput');
    cy.get('[data-testid="cardFormNumberInput"]').as('cardFormNumberInput');
    cy.get('[data-testid="cardFormMonthInput"]').as('cardFormMonthInput');
    cy.get('[data-testid="CardFormYearInput"]').as('cardFormYearInput');
    cy.get('[data-testid="cardFormCVCInput"]').as('cardFormCVCInput');
    cy.get('[data-testid="cardFormConfirmButton"]').as('cardFormConfirmButton');
  });

  test('submit valid card data', () => {
    cy.get('@cardFormNameInput').type('John Doe');
    cy.get('@cardFormNumberInput').type('1234567812345678');
    cy.get('@cardFormMonthInput').type('1');
    cy.get('@cardFormYearInput').type('22');
    cy.get('@cardFormCVCInput').type('123');
    cy.get('@cardFormInputConfirmButton').click();

    cy.get('@cardForm').should('not.exist');
    cy.get('[data-testid="submitConfirmation"]');
  });

  test('submit valid card form, return to form after confirmation', () => {
    cy.get('@cardFormNameInput').type('John Doe');
    cy.get('@cardFormNumberInput').type('1234567812345678');
    cy.get('@cardFormMonthInput').type('1');
    cy.get('@cardFormYearInput').type('22');
    cy.get('@cardFormCVCInput').type('123');
    cy.get('@cardFormInputConfirmButton').click();

    cy.get('@cardForm').should('not.exist');
    cy.get('[data-testid="submitConfirmation"]');
    cy.get('[data-testid="submitConfirmationButton"]').click();

    cy.get('[data-testid="submitConfirmation"]').should('not.exist');
    cy.get('@cardForm');

    cy.get('@cardFormNameInput').should('have.value', '');
    cy.get('@cardFormNumberInput').should('have.value', '');
    cy.get('@cardFormMonthInput').should('have.value', '');
    cy.get('@cardFormYearInput').should('have.value', '');
    cy.get('@cardFormCVCInput').should('have.value', '');

    cy.get('@cardDisplayName').should('contain.text', 'Jane Appleseed');
    cy.get('@cardDisplayNumber').should('contain.text', '0000 0000 0000 0000');
    cy.get('@cardDisplayDate').should('contain.text', '00/00');
    cy.get('@cardDispalyCVC').should('contain.text', '000');
  });
});

describe('invalid card edit and submission', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-testid="cardForm"]').as('cardForm');
    cy.get('[data-testid="cardFormNameInput"]').as('cardFormNameInput');
    cy.get('[data-testid="cardFormNumberInput"]').as('cardFormNumberInput');
    cy.get('[data-testid="cardFormMonthInput"]').as('cardFormMonthInput');
    cy.get('[data-testid="CardFormYearInput"]').as('cardFormYearInput');
    cy.get('[data-testid="cardFormCVCInput"]').as('cardFormCVCInput');
    cy.get('[data-testid="cardFormConfirmButton"]').as('cardFormConfirmButton');
  });

  test('no input into card form name', () => {
    cy.get('@cardFormConfirmationButton').click();
    cy.get('[data-testid="nameInputError"]').should(
      'contain.text',
      `Can't be blank`
    );
  });

  test('no input into card form number', () => {
    cy.get('@cardFormConfirmationButton').click();
    cy.get('[data-testid="numberInputError"]').should(
      'contain.text',
      "Can't be blank"
    );
  });

  test('no input into card form month', () => {
    cy.get('@cardFormConfirmButton').click();
    cy.get('[data-testid="dateInputError"]').should(
      'contain.text',
      "Can't be blank"
    );
  });

  test('no input into card form year', () => {
    cy.get('@cardFormMonthInput').type('11');
    cy.get('@cardFormConfirmationButton').click();
    cy.get('[data-testid="dateInputError"]').should(
      'contain.text',
      "Can't be blank"
    );
  });

  test('no input into card form CVC', () => {
    cy.get('@cardFormConfirmationButton').click();
    cy.get('[data-testid="cvcInputError"]').should(
      'contain.text',
      "Can't be blank"
    );
  });

  test('invalid length in card form numbers, too small', () => {
    cy.get('@cardFormNumberInput').type('12345');
    cy.get('@cardFormNameInput').focus();
    cy.get('[data-input="numberInputError"]').should(
      'contain.text',
      'Wrong format, number too short'
    );
  });

  test('invalid characters in card form number', () => {
    cy.get('@cardFormNumberInput').type('123456781234abcd');
    cy.get('@cardFormNameInput').focus();
    cy.get('[data-testid="numberInputError"]').should(
      'contain.text',
      'Wrong format, nubmers only'
    );
  });

  test('invalid month value in card for month', () => {
    cy.get('@cardFormMonthInput').type('14');
    cy.get('@cardFormYearInput').focus();
    cy.get('[data-testid="dataInputError"]').should(
      'contain.text',
      'Invalid month'
    );
  });

  test('invalid year value in card form year', () => {
    cy.get('@cardFormMonthInput').type('5');
    cy.get('@cardFormYearInput').type('20');
    cy.get('@cardFormCVCInput').focus();
    cy.get('[data-testid="dateInputError"]').should(
      'contain.text',
      'Invalid year'
    );
  });

  test('invalid date for card form date', () => {
    cy.get('@cardFormMonthInput').type('7');
    cy.get('@cardFormYearInput').type('22');
    cy.get('@cardFormCVCInput').focus();
    cy.get('@cardFormConfirmButton').click();
    cy.get('[data-testid=""dateInputError]').should(
      'contain.text',
      'Invalid date'
    );
  });

  test('invalid length for card form cvc, too small', () => {
    cy.get('@cardFormCVCInput').type('12');
    cy.get('@cardFormNumberInput').focus();
    cy.get('[data-testid="cvcInputError"]').should('Invalid CVC number');
  });

  test('invalid form, confirmation not rendered not rendered', () => {
    cy.get('@cardFormNameInput').type('Ann Appleseed');
    cy.get('@cardFormNumberInput').type('12345678');
    cy.get('@cardFormMonthInput').type('1');
    cy.get('@cardFormYearInput').type('98');
    cy.get('@cardFormCVCInput').type('123');

    cy.get('@caredFormConfirmButton').click();
    cy.get('[data-testid="submitConfirmation"]').should('not.exist');
  });
});
