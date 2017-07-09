import { AngularReduxDemoPage } from './app.po';

describe('angular-redux-demo App', () => {
  let page: AngularReduxDemoPage;

  beforeEach(() => {
    page = new AngularReduxDemoPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
