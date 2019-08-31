import {browser, by, element, ElementFinder, protractor} from 'protractor';

export class TourOfHeroesPage {
  navigateTo() {
    return browser.get('/');
  }

  getTop4Heroes() {
    return element.all(by.css('.module.hero')).all(by.tagName('h4')).getText();
  }

  navigateToHeroes() {
    element(by.linkText('Heroes')).click();
  }

  navigateToHeroeDetails(id: string) {
    return browser.get('/detail/' + id );
  }

  getAllHeroes() {
    return element(by.tagName('my-heroes')).all(by.tagName('li'));
  }

  enterNewHeroInInput(newHero: string) {
    element(by.tagName('input')).sendKeys(newHero);
    element(by.buttonText('Add')).click();
  }

  searchHero(hero:string){
    element(by.id('search-box')).sendKeys(hero);
    return element.all(by.css('.search-result')).filter((text)=>{
      return text.getText().then(function(val){
        return val === hero;
      })
    }).first().getText().then(function(text){
      return text;
    });
  }

  deleteAHero(heroName: string){

    element.all(by.css('.heroes li')).filter(function(elem, index) {
      return elem.element(by.css('.badge')).getText().then(function(text) {
        return text === heroName;
      });
    }).first().element(by.tagName('button')).click();
  }

  editHero(heroName: string){
    var span1= element(by.css('[placeholder = "name"]'))
    span1.clear();
    span1.sendKeys(heroName);
    browser.sleep(1000);
    var saveButton = element(by.buttonText('Save'));
    browser.actions().mouseMove(saveButton).click().perform().then(function(){
      console.log("Se pulso el boton de guardar");
      var EC = protractor.ExpectedConditions;
      // Wait for new page url to contain newPageName
      browser.wait(EC.urlContains('/heroes'), 10000);
      console.log("La aplicacion guardo");
    });
    browser.waitForAngular();
    browser.sleep(3000);
  }

  gotoAHeroFromDashboard(heroName: string){
    element.all(by.tagName('h4')).filter(function(elem){
      return elem.getText().then(function(text){
        return text === heroName;
      });
    }).first().click();
    browser.waitForAngular();
    browser.sleep(3000);
    return element(by.css('[placeholder = "name"]')).getAttribute('ng-reflect-model').then(function(value){
        return value;
    });
  }
  gotoAHeroFromList(heroName: string){
    element.all(by.css('.heroes li')).filter(function(elem, index) {
      return elem.element(by.css('.badge')).getText().then(function(text) {
        return text === heroName;
      });
    }).first().click();
    element(by.buttonText('View Details')).click();
    browser.sleep(1000);
    browser.waitForAngular();
    browser.sleep(3000);
    return element(by.css('[placeholder = "name"]')).getAttribute('ng-reflect-model').then(function(value){
        return value;
    });
  }

  gotoAHeroFromSearch(heroName: string){
    element(by.id('search-box')).sendKeys(heroName);
    element.all(by.css('.search-result')).filter(function(elem){
      return elem.getText().then(function(text){
        return text === heroName;
      });
    }).first().click();
    browser.waitForAngular();
    browser.sleep(3000);
    return element(by.css('[placeholder = "name"]')).getAttribute('ng-reflect-model').then(function(value){
        return value;
    });
  }

}
