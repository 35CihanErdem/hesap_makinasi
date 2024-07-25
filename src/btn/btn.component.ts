import { Component, Output,Input,EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-btn',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './btn.component.html',
  styleUrl: './btn.component.css'
})
export class BtnComponent {
  @Input() actionType: string = ''; // Butonun yapacağı işlemi belirten özellik
  @Output() calculateEvent = new EventEmitter<string>(); // İşlem türünü iletecek EventEmitter

  onClick() {
    this.calculateEvent.emit(this.actionType); // İşlem türünü gönder
  }
}
