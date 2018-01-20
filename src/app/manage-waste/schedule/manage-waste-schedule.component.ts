import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { RestService } from '../../rest.service';

@Component({
  selector: 'app-manage-waste-schedule',
  templateUrl: './manage-waste-schedule.component.html',
  styleUrls: ['./manage-waste-schedule.component.css']
})
export class ManageWasteScheduleComponent implements OnInit {

  scheduleGarbagePickupForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private restService: RestService
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm() {
    this.scheduleGarbagePickupForm  = this.formBuilder.group({
      name: '',
      address: '',
      pickupDate: '',
      pickupTime: ''
    });
  }

  onSubmit() {
    console.log("Schedule a pickup form is submitted");
    console.log("value = " + JSON.stringify(this.scheduleGarbagePickupForm.value));
    this.restService.schedulePickup(this.scheduleGarbagePickupForm.value).subscribe(
      () => { console.log("Successfully scheduled pickup"); }
    );
  }
}
