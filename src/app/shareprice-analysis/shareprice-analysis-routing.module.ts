import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SharepriceAnalysisComponent } from './shareprice-analysis.component';

const routes: Routes = [
  {
    path: '',
    component: SharepriceAnalysisComponent,
    }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SharepriceAnalysisRoutingModule { }
