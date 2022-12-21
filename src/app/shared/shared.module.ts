import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { AlertComponent } from './alert/alert.component';
import { CloseDropDownDirective } from './close-drop-down.directive';
import { InstructionsComp } from './instructions/instructions.component';
import { LoadingSpinnerComponent } from './loadingSpinner/loadingSpinner.component';
import { PlaceHolderDirective } from './placeholder/placeholder.directive';

@NgModule({
  declarations: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceHolderDirective,
    CloseDropDownDirective,
    InstructionsComp,
  ],
  imports: [CommonModule],
  exports: [
    AlertComponent,
    LoadingSpinnerComponent,
    PlaceHolderDirective,
    CloseDropDownDirective,
    CommonModule,
    InstructionsComp,
  ],
})
export class SharedModule {}
