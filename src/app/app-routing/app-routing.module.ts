import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
 
import { HomeComponent } from '../home/home.component';
import { ManageWasteComponent } from '../manage-waste/manage-waste.component';
import { ManageWasteScheduleComponent } from '../manage-waste/schedule/manage-waste-schedule.component';
import { ManageWasteRequestsComponent } from '../manage-waste/requests/manage-waste-requests.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'home',
    component: HomeComponent
  },
  { 
    path: 'manage-waste',
    component: ManageWasteComponent,
    children: [{
      path: 'schedule',
      component: ManageWasteScheduleComponent
    }, {
      path: 'requests',
      component: ManageWasteRequestsComponent
    }]
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
