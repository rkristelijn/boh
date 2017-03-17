import { BohPage } from './app.po';

describe('boh App', function() {
  let page: BohPage;

  beforeEach(() => {
    page = new BohPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
