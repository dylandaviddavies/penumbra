import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardModule } from './components/card/card.module';

@NgModule({
  exports: [CommonModule, CardModule]
})
export class PenumbraComponentsModule {}
