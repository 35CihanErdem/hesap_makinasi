import { Component, EventEmitter, Output, output, } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NumericComponent } from '../numeric/numeric.component';
import { BtnComponent } from '../btn/btn.component';
import { FormsModule,NgModel } from '@angular/forms'; 

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,BtnComponent,NumericComponent,FormsModule,],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  sayi1: number = 0;
  sayi2: number = 0;
  sayi3: number = 0;

 
  
  onNumber1Change(value: number) {
    this.sayi1 = value;
  }

  onNumber2Change(value: number) {
    this.sayi2 = value;
  }

  onNumber3Change(value: number) {
    this.sayi3 = value;
  }

  
  calculate(actionType: string) {
    let result: number;
    switch (actionType) {
      case 'topla':
        result = this.sayi1 + this.sayi2;
        break;
      case 'cikart':
        result = this.sayi1 - this.sayi2;
        break;
      case 'carp':
        result = this.sayi1 * this.sayi2;
        break;
      case 'bol':
        result = this.sayi1 / this.sayi2;
        break;
      default:
        result = 0;
        break;
    }
    this.sayi3 = result; // Sonuç değerini sayi3'e atar
  }
}
