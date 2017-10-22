import { MytaskManageTestPage } from './app.po';

describe('mytask-manage-test App', () => {
  let page: MytaskManageTestPage;

  beforeEach(() => {
    page = new MytaskManageTestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
