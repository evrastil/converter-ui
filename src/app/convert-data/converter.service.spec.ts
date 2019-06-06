import { ConvertService } from './converter.service';
import { from } from 'rxjs';

describe('ConvertService', () => {

  it('should give expected result', () => {
    const svc = new ConvertService();
    expect(svc.convert({ conversionData: 'a,a,a,a,a' })).toBeTruthy('aaaaa');
  });

});
