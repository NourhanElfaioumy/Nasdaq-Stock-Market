{
  /* <reference types="cypress" />; */
}

context("Testing header parts", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("Header testing", () => {
    cy.contains("Nasdaq");
  });
});

context("Testing Api ", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it.only("Stocks api testing status", () => {
    cy.request(
      "GET",
      "https://api.polygon.io/v3/reference/tickers?active=true&sort=ticker&order=asc&limit=50&apiKey=OOWQ66Cs3CQUK2c4nRkCR7AGojELcpVg"
    ).then((response) => {
      expect(response.status).equal(200);
    });
  });
  it.only("Stocks api testing length", () => {
    cy.request(
      "GET",
      "https://api.polygon.io/v3/reference/tickers?active=true&sort=ticker&order=asc&limit=50&apiKey=OOWQ66Cs3CQUK2c4nRkCR7AGojELcpVg"
    ).then((response) => {
      expect(response.body.count).equal(50);
    });
  });
});
