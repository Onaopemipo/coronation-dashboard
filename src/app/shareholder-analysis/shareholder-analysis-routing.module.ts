import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareholderAnalysisComponent } from './shareholder-analysis.component';

const routes: Routes = [
  {
    path: '',
    component: ShareholderAnalysisComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ShareholderAnalysisRoutingModule { }
