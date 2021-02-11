import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PuzzleProblemPage } from './puzzle-problem.page';

const routes: Routes = [
  {
    path: '',
    component: PuzzleProblemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PuzzleProblemPageRoutingModule {}
