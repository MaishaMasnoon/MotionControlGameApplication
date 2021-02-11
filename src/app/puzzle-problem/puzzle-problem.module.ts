import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PuzzleProblemPageRoutingModule } from './puzzle-problem-routing.module';

import { PuzzleProblemPage } from './puzzle-problem.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PuzzleProblemPageRoutingModule
  ],
  declarations: [PuzzleProblemPage]
})
export class PuzzleProblemPageModule {}
