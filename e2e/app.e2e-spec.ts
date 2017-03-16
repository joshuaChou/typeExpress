import { TypeExpressPage } from './app.po';

describe('type-express App', function() {
  let page: TypeExpressPage;

  beforeEach(() => {
    page = new TypeExpressPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
