export class CsszoomPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('csszoom-app h1')).getText();
  }
}
