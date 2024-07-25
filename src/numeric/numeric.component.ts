import{Component, Input,EventEmitter, Output,} from '@angular/core';
import { FormsModule } from '@angular/forms'; // FormsModule içe aktarımı

@Component({
  selector: 'app-numeric',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './numeric.component.html',
  styleUrls: ['./numeric.component.css'],
 
})
export class NumericComponent  {
  @Input() sayi: number = 0; // Bileşenin içindeki sayı değeri

  @Input() renk: string = 'white';

  @Output() numberChange = new EventEmitter<number>(); // Sayı değiştiğinde dışarıya bildirim gönderir

  // Kullanıcıdan gelen değeri işleyen metot
  onNumberChange(value: number) {
    this.sayi = +value; // String'den number'a dönüştür
    this.numberChange.emit(this.sayi); // Sayı değerini dışarıya gönder
  }


 
 


  

  
}
