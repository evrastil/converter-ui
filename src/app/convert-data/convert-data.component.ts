import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ConvertService } from './converter.service';

@Component({
  selector: 'app-convert-data',
  templateUrl: './convert-data.component.html',
  styleUrls: ['./convert-data.component.css']
})
export class ConvertDataComponent implements OnInit {
  conversionForm;
  result;

  ngOnInit(): void {
  }

  constructor(private formBuilder: FormBuilder, private convertService: ConvertService) {
    this.conversionForm = this.formBuilder.group({
      conversionData: ''
    });
  }

  onSubmit(conversionData) {
    this.result = this.convertService.convert(conversionData);
    this.conversionForm.reset();
  }

}
