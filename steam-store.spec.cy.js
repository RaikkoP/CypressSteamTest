//  Testime kas saame veebilehega ühendust luua
describe('Visiting Steam and checking if hover effects work', () => {
  before(() => {
    cy.visit('https://store.steampowered.com/')
  })
})

//Katsetame, et kas otsingu mootor töötab veebilehel ja kas me saame otsingumootori abil minna mängu kodulehele
describe('Using Searchbar', () => {
  before(() => {
    cy.visit('https://store.steampowered.com/')
  })
  it('Test searchbar', () => {
    cy.get('#store_nav_search_term').type('Five Nights at Freddys')
    cy.wait(200);
    cy.get('#store_search_link > img').click();
    cy.get('[data-ds-appid="319510"]').click();
  })
});

//Testime, et kas mängu kodulehel peal läheb trailer video tööle või mitte.
describe('Checking game storpage functionality', () => {
  before(() => {
    cy.visit('https://store.steampowered.com/app/319510/Five_Nights_at_Freddys/')
  })
  it('Tests video player', () => {
    cy.get('#movie_2034033').trigger('mouseenter');
    cy.get('.volume_icon').click();
  })
})