import { CsszoomPage } from './app.po';

describe('csszoom App', function() {
  let page: CsszoomPage;

  beforeEach(() => {
    page = new CsszoomPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('csszoom works!');
  });
});
