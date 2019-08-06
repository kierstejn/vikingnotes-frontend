describe('Login', function () {
    it('Writing in the email field is rendered', function () {
        cy.visit('/login');

    });

    it('succesfully performs login action', () => {
        cy.visit("/login");

        cy
            .get('input[name="email"]')
            .type("hej")
            .should("have.value", "hej");
        cy
            .get('input[name="password"]')
            .type("hej")
            .should("have.value", "hej");
    })
});

