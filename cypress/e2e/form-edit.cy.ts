/// <reference types="cypress" />

describe('initial page load', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy="cardForm"]').as('cardForm');
    cy.get('[data-cy="cardDisplayName"]').as('cardDisplayName');
    cy.get('[data-cy="cardDisplayNumber"]').as('cardDisplayNumber');
    cy.get('[data-cy="cardDisplayDate"]').as('cardDisplayDate');
    cy.get('[data-cy="cardDisplayCVC"]').as('cardDisplayCVC');
  });

  it('default values for displayed are rendered with 0s', () => {
    cy.get('@cardDisplayNumber').should('contain.text', '0000 0000 0000 0000');
    cy.get('@cardDisplayName').should('contain.text', 'Jane Appleseed');
    cy.get('@cardDisplayDate').should('contain.text', '00/00');
    cy.get('@cardDisplayCVC').should('contain.text', '000');
  });
});

describe('edit form and edit card display', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy="cardDisplayName"]').as('cardDisplayName');
    cy.get('[data-cy="cardDisplayNumber"]').as('cardDisplayNumber');
    cy.get('[data-cy="cardDisplayDate"]').as('cardDisplayDate');
    cy.get('[data-cy="cardDisplayCVC"]').as('cardDisplayCVC');

    cy.get('[data-cy="cardForm"]').as('cardForm');
    cy.get('[data-cy="cardFormName"]').as('cardFormName');
    cy.get('[data-cy="cardFormNumber"]').as('cardFormNumber');
    cy.get('[data-cy="cardFormMonth"]').as('cardFormMonth');
    cy.get('[data-cy="cardFormYear"]').as('cardFormYear');
    cy.get('[data-cy="cardFormCVC"]').as('cardFormCVC');
    cy.get('[data-cy="cardFormButton"]').as('cardFormButton');
  });

  it('card holder name updated on display', () => {
    cy.get('@cardFormName').type('Jorge Mendoza');
    cy.get('@cardDisplayName').should('contain.text', 'Jorge Mendoza');
  });

  it('card number updated with a few numbers', () => {
    cy.get('@cardFormNumber').type('123456');
    cy.get('@cardDisplayNumber').should('contain.text', '1234 56');
  });

  it('card number updated with full card number', () => {
    cy.get('@cardFormNumber').type('1234567812345678');
    cy.get('@cardDisplayNumber').should('contain.text', '1234 5678 1234 5678');
  });

  it('date updated with month', () => {
    cy.get('@cardFormMonth').type('1');
    cy.get('@cardDisplayDate').should('contain.text', '01/00');
  });

  it('date updated with month and year', () => {
    cy.get('@cardFormYear').type('22');
    cy.get('@cardFormMonth').type('1');
    cy.get('@cardDisplayDate').should('contain.text', '01/22');
  });

  it('cvc updated with one number', () => {
    cy.get('@cardFormCVC').type('1');
    cy.get('@cardDisplayCVC').should('contain.text', '1');
  });

  it('cvc updated with all numbers', () => {
    cy.get('@cardFormCVC').type('123');
    cy.get('@cardDisplayCVC').should('contain.text', '123');
  });
});

describe('submit valid form', () => {
  const currentMonth = (new Date().getMonth() + 1).toString();
  const currentYear = new Date().getFullYear().toString().slice(2);
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy="cardDisplayName"]').as('cardDisplayName');
    cy.get('[data-cy="cardDisplayNumber"]').as('cardDisplayNumber');
    cy.get('[data-cy="cardDisplayDate"]').as('cardDisplayDate');
    cy.get('[data-cy="cardDisplayCVC"]').as('cardDisplayCVC');

    cy.get('[data-cy="cardForm"]').as('cardForm');
    cy.get('[data-cy="cardFormName"]').as('cardFormName');
    cy.get('[data-cy="cardFormNumber"]').as('cardFormNumber');
    cy.get('[data-cy="cardFormMonth"]').as('cardFormMonth');
    cy.get('[data-cy="cardFormYear"]').as('cardFormYear');
    cy.get('[data-cy="cardFormCVC"]').as('cardFormCVC');
    cy.get('[data-cy="cardFormButton"]').as('cardFormButton');
  });

  it('submit valid card data', () => {
    cy.get('@cardFormName').type('John Doe');
    cy.get('@cardFormNumber').type('1234567812345678');
    cy.get('@cardFormMonth').type(currentMonth);
    cy.get('@cardFormYear').type(currentYear);
    cy.get('@cardFormCVC').type('123');
    cy.get('@cardFormButton').click();

    cy.get('@cardForm').should('not.exist');
    cy.get('[data-cy="loadingSpinner"]');
    cy.get('[data-cy="submitConfirmation"]');
  });

  it('submit valid card form, return to form after confirmation', () => {
    cy.get('@cardFormName').type('John Doe');
    cy.get('@cardFormNumber').type('1234567812345678');
    cy.get('@cardFormMonth').type(currentMonth);
    cy.get('@cardFormYear').type(currentYear);
    cy.get('@cardFormCVC').type('123');
    cy.get('@cardFormButton').click();

    cy.get('@cardForm').should('not.exist');
    cy.get('[data-cy="loadingSpinner"]');
    cy.get('[data-cy="submitConfirmation"]');
    cy.get('[data-cy="submitConfirmationButton"]').click();

    cy.get('[data-cy="submitConfirmation"]').should('not.exist');
    cy.get('@cardForm');

    cy.get('@cardFormName').should('have.value', '');
    cy.get('@cardFormNumber').should('have.value', '');
    cy.get('@cardFormMonth').should('have.value', '');
    cy.get('@cardFormYear').should('have.value', '');
    cy.get('@cardFormCVC').should('have.value', '');

    cy.get('@cardDisplayName').should('contain.text', 'Jane Appleseed');
    cy.get('@cardDisplayNumber').should('contain.text', '0000 0000 0000 0000');
    cy.get('@cardDisplayDate').should('contain.text', '00/00');
    cy.get('@cardDisplayCVC').should('contain.text', '000');
  });
});

describe('invalid card edit and submission', () => {
  beforeEach(() => {
    cy.visit('/');
    cy.get('[data-cy="cardForm"]').as('cardForm');
    cy.get('[data-cy="cardFormName"]').as('cardFormName');
    cy.get('[data-cy="cardFormNumber"]').as('cardFormNumber');
    cy.get('[data-cy="cardFormMonth"]').as('cardFormMonth');
    cy.get('[data-cy="cardFormYear"]').as('cardFormYear');
    cy.get('[data-cy="cardFormCVC"]').as('cardFormCVC');
    cy.get('[data-cy="cardFormButton"]').as('cardFormButton');
  });

  it('no input into card form name', () => {
    cy.get('@cardFormButton').click();
    cy.get('[data-cy="cardHolderNameError"]').should(
      'contain.text',
      `Can't be blank`
    );
  });

  it('no input into card form number', () => {
    cy.get('@cardFormButton').click();
    cy.get('[data-cy="cardNumberError"]').should(
      'contain.text',
      'Wrong format, must be exactly 16 numbers'
    );
  });

  it('no input into card form month', () => {
    cy.get('@cardFormButton').click();
    cy.get('[data-cy="cardMonthError"]').should(
      'contain.text',
      "Can't be blank"
    );
  });

  it('no input into card form year', () => {
    cy.get('@cardFormMonth').type('11');
    cy.get('@cardFormButton').click();
    cy.get('[data-cy="cardYearError"]').should(
      'contain.text',
      "Can't be blank"
    );
  });

  it('no input into card form CVC', () => {
    cy.get('@cardFormButton').click();
    cy.get('[data-cy="cardCVCError"]').should('contain.text', "Can't be blank");
  });

  it('invalid length in card form numbers, too small', () => {
    cy.get('@cardFormNumber').type('12345');
    cy.get('@cardFormName').find('input').focus();
    cy.get('[data-cy="cardNumberError"]').should(
      'contain.text',
      'Wrong format, must be exactly 16 numbers'
    );
  });

  it('invalid characters in card form number', () => {
    cy.get('@cardFormNumber').type('123456781234abcd');
    cy.get('@cardFormName').find('input').focus();
    cy.get('[data-cy="cardNumberError"]').should(
      'contain.text',
      'Wrong format, numbers only'
    );
  });

  it('invalid month value in card for month', () => {
    cy.get('@cardFormMonth').type('14');
    cy.get('@cardFormYear').find('input').focus();
    cy.get('[data-cy="cardMonthError"]').should(
      'contain.text',
      'Invalid month'
    );
  });

  it('invalid year value in card form year', () => {
    cy.get('@cardFormMonth').type('5');
    cy.get('@cardFormYear').type('20');
    cy.get('@cardFormCVC').find('input').focus();
    cy.get('[data-cy="cardYearError"]').should('contain.text', 'Invalid year');
  });

  it('invalid date for card form date', () => {
    cy.get('@cardFormMonth').type('7');
    cy.get('@cardFormYear').type('22');
    cy.get('@cardFormName').type('Jorge Mendoza');
    cy.get('@cardFormNumber').type('1234123412341234');
    cy.get('@cardFormCVC').type('123');
    cy.get('@cardFormButton').click();
    cy.get('[data-cy="cardMonthError"]').should('contain.text', 'Invalid date');
  });

  it('invalid length for card form cvc, too small', () => {
    cy.get('@cardFormCVC').type('12');
    cy.get('@cardFormNumber').find('input').focus();
    cy.get('[data-cy="cardCVCError"]').should(
      'contain.text',
      'Wrong format, must be three digits'
    );
  });

  it('invalid form, confirmation not rendered not rendered', () => {
    cy.get('@cardFormName').type('Ann Appleseed');
    cy.get('@cardFormNumber').type('12345678');
    cy.get('@cardFormMonth').type('1');
    cy.get('@cardFormYear').type('98');
    cy.get('@cardFormCVC').type('123');

    cy.get('@cardFormButton').click();
    cy.get('[data-cy="loadingSpinner"]').should('not.exist');
  });
});
