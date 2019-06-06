import { AppPage } from './app.po';
import { browser, logging } from 'protractor';
import { ConvertPage } from './app.convert.po';

describe('workspace-project App', () => {
  let page: AppPage;
  let convertPage: ConvertPage;

  beforeEach(() => {
    page = new AppPage();
    convertPage = new ConvertPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getTitleText()).toEqual('Welcome to converter-ui!');
  });

  it('should display converted data', async () => {
    await convertPage.navigateTo();
    await convertPage.clear();
    await convertPage.fillConversionInput('a,bc,a,a');
    await convertPage.submit();
    expect(await convertPage.getConversionResult()).toEqual('abcaa');
  });

  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
