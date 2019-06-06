import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConvertDataComponent } from './convert-data/convert-data.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { ConvertService } from './convert-data/converter.service';

@NgModule({
  declarations: [
    AppComponent,
    ConvertDataComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: 'convert', component: ConvertDataComponent }
      // { path: 'products/:productId', component: ProductDetailsComponent },
    ])
  ],
  providers: [ConvertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
