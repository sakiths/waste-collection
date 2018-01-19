import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { AppComponent } from './app.component';
import { LinkBoxComponent } from './link-box/link-box/link-box.component';
import { ManageWasteComponent } from './manage-waste/manage-waste.component';
import { ManageWasteScheduleComponent } from './manage-waste/schedule/manage-waste-schedule.component';
import { HomeComponent } from './home/home.component';
import { ManageWasteRequestsComponent } from './manage-waste/requests/manage-waste-requests.component';

@NgModule({
  declarations: [
    AppComponent,
    LinkBoxComponent,
    ManageWasteComponent,
    ManageWasteScheduleComponent,
    HomeComponent,
    ManageWasteRequestsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
