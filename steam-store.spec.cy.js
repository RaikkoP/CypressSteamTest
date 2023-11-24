//  Testime kas saame veebilehega ühendust luua
describe('Visiting Steam and checking if hover effects work', () => {
  //Testi alustuseks proovime luua ühendust veebuilehega
  before(() => {
    cy.visit('https://store.steampowered.com/')
  })
})

//Katsetame, et kas otsingu mootor töötab veebilehel ja kas me saame otsingumootori abil minna mängu kodulehele
describe('Using Searchbar', () => {
  //ALguses proovime luua ühendust veebilehega
  before(() => {
    cy.visit('https://store.steampowered.com/')
  })
  //Otsime üles, veebilehel olev otsingumootori ja sisestame sinna Five NIghts at Freddys, siis ootame ja vajutame 
  //Esimisele pildile mis ette tuleb
  it('Test searchbar', () => {
    cy.get('#store_nav_search_term').type('Five Nights at Freddys')
    cy.wait(200);
    cy.get('#store_search_link > img').click();
    cy.get('[data-ds-appid="319510"]').click();
  })
});

//Testime, et kas mängu kodulehel peal läheb trailer video tööle või mitte.
describe('Checking game storpage functionality', () => {
  //Looma uuesti ühendust valitud mängu veebilehega
  before(() => {
    cy.visit('https://store.steampowered.com/app/319510/Five_Nights_at_Freddys/')
  })
  //Testime, et kas mängu kodulehel olev trailer läheb tööle ja kas helinupud töötavad
  it('Tests video player', () => {
    cy.get('#movie_2034033').trigger('mouseenter');
    cy.get('.volume_icon').click();
  })
})