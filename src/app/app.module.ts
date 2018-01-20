import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { RestService } from './rest.service';
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
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [RestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
