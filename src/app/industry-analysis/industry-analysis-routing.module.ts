import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IndustryAnalysisComponent } from './industry-analysis.component';

const routes: Routes = [
  {
    path: '',
    component: IndustryAnalysisComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IndustryAnalysisRoutingModule { }
