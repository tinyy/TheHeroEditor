import { TheHeroEditorPage } from './app.po';

describe('the-hero-editor App', function() {
  let page: TheHeroEditorPage;

  beforeEach(() => {
    page = new TheHeroEditorPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
