import { TourOfHeroesPage } from './app.po';

describe('Tour of heroes Dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage();
  });

  it('should display top 4 heroes', () => {
    page.navigateTo();
    expect(page.getTop4Heroes()).toEqual(['Mr. Nice', 'Narco', 'Bombasto', 'Celeritas']);
  });

  it('should navigate to heroes', () => {
    page.navigateToHeroes();
    expect(page.getAllHeroes().count()).toBe(11);
  });
});

describe('Tour of heroes, heroes page', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
    page.navigateToHeroes();
  });

  it('should add a new hero', () => {
    const currentHeroes = page.getAllHeroes().count();
    page.enterNewHeroInInput('My new Hero');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n + 1));
  });

});

describe('Tour of heroes, search a Hero', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
  });

  it('should search a hero', () => {
    page.navigateTo();
    expect(page.searchHero('Bombasto')).toBe('Bombasto');
  });

});

describe('Tour of heroes, delete a Hero', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
  });

  it('should delete a hero', () => {
    page.navigateToHeroes();
    const currentHeroes = page.getAllHeroes().count();
    page.deleteAHero('15');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n - 1));
  });

});

describe('Tour of heroes, edit a Hero', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
  });

  it('should edit a hero', async () => {
    await page.navigateToHeroeDetails('19');
    await page.editHero('Crystal');
    //page.navigateTo();
    //expect(page.searchHero('Crystal')).toBe('Crystal');
    /*const currentHeroes = page.getAllHeroes().count();
    page.deleteAHero('15');
    expect(page.getAllHeroes().count()).toBe(currentHeroes.then(n => n - 1));*/
  });

});

describe('Tour of heroes, go to a Hero from Dashboard', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
  });

  it('should go a hero page from Dashboard', () => {
    page.navigateTo();
    expect(page.gotoAHeroFromDashboard('Celeritas')).toBe('Celeritas');
  });

});

describe('Tour of heroes, go to a Hero from Heroes List', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
  });

  it('should go a to hero page from HeroList', () => {
    page.navigateToHeroes();
    expect(page.gotoAHeroFromList('12')).toBe('Narco');
  });

});

describe('Tour of heroes, go to a Hero from search', () => {
  let page: TourOfHeroesPage;

  beforeEach(() => {
    page = new TourOfHeroesPage;
  });

  it('should go to a hero from search', () => {
    page.navigateTo();
    expect(page.gotoAHeroFromSearch('Bombasto')).toBe('Bombasto');
  });

});
