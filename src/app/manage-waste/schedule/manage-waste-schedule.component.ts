import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-manage-waste-schedule',
  templateUrl: './manage-waste-schedule.component.html',
  styleUrls: ['./manage-waste-schedule.component.css']
})
export class ManageWasteScheduleComponent implements OnInit {

  scheduleGarbagePickupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { 
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.scheduleGarbagePickupForm  = this.formBuilder.group({
      name: '',
      address: '',
      pickupTime: ''
    });
  }
}
