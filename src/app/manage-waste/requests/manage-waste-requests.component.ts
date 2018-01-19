import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-manage-waste-requests',
  templateUrl: './manage-waste-requests.component.html',
  styleUrls: ['./manage-waste-requests.component.css']
})
export class ManageWasteRequestsComponent implements OnInit {

  wasteType = "Wet waste";
  pickupTime = "10:30 p.m.";

  constructor() { }

  ngOnInit() {
  }

}
