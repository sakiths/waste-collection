import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-waste-requests',
  templateUrl: './manage-waste-requests.component.html',
  styleUrls: ['./manage-waste-requests.component.css']
})
export class ManageWasteRequestsComponent implements OnInit {

  wasteType = "Wet waste";
  pickupdate = "22/01/2018";
  pickupTime = "10:30 a.m.";

  constructor() { }

  ngOnInit() {
  }

}
