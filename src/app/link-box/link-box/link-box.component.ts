import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-link-box',
  templateUrl: './link-box.component.html',
  styleUrls: ['./link-box.component.css']
})
export class LinkBoxComponent implements OnInit {
  @Input() imageSrc = "";
  @Input() url = "";
  @Input() urlTitle = "";
  @Input() cardText = "";
  @Input() cardTitle = "";

  constructor() { }

  ngOnInit() {
  }

}
