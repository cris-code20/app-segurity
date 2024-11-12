import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OficalPage } from './ofical.page';

const routes: Routes = [
  {
    path: '',
    component: OficalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OficalPageRoutingModule {}
