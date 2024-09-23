describe('eBay Advanced search', () => {
    it('Advanced search functionality', () => {

        //step1: Open the eBay Website
        cy.visit('https://www.ebay.com/');

        //step2: Locate and click on the "Advanced" link
        cy.get('[title="Advanced Search"]').click();

        
        //step3: Click on "Using advanced search options" link
        cy.contains('using advanced search options').invoke('removeAttr', 'target').click();

        //step4: Implement window switching in cypress
        cy.url().should('include','advanced');
        cy.contains('customer service').should('exist');
        
        cy.go('back');

        //step5: Fill the search criteria
        cy.get('[data-testid="_nkw"]').type('laptop');
        
        //step6: Clicking on the search button
        cy.xpath('(//*[@type="submit"])[1]').click({force: true});

        //step7: Assert message
        cy.contains('No exact matches found').should('exists');

        //step8: close the browser after the assertion
        cy.end();

        
    });
});