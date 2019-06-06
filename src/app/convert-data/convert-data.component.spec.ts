import { async, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConvertDataComponent } from './convert-data.component';
import { ConvertService } from './converter.service';

describe('ConvertDataComponent', () => {

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        FormsModule, ReactiveFormsModule
      ],
      declarations: [
        ConvertDataComponent
      ],
      providers: [ConvertService]
    }).compileComponents();
  }));

  it('should create', () => {
    const fixture = TestBed.createComponent(ConvertDataComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should have valid form', () => {
    const fixture = TestBed.createComponent(ConvertDataComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.conversionForm.status).toEqual('VALID');
  });
});
