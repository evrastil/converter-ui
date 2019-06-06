import { browser, by, element } from 'protractor';
import { Promise } from 'q';

export class ConvertPage {
  navigateTo() {
    return browser.get(`${browser.baseUrl}/convert`) as Promise<any>;
  }

  getConversionResult() {
    return element(by.id('result')).getText() as Promise<string>;
  }

  clear() {
    return element(by.id('conversionData')).clear() as Promise<void>;
  }

  fillConversionInput(input: string) {
    return element(by.id('conversionData')).sendKeys(input) as Promise<void>;
  }

  getCnversionInputValue() {
    return element(by.id('conversionData')).clear() as Promise<void>;
  }
  submit() {
    return element(by.id('convert-btn')).click() as Promise<void>;
  }
}
