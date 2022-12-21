import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css'],
})
export class InstructionsComp {
  @Output() close = new EventEmitter<void>();

  onClose() {
    this.close.emit();
  }
}
