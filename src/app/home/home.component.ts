import { Component, OnInit } from '@angular/core';

const cards = [{
  cardTitle: "Plant a tree",
  cardText: "Come together to plant trees for a cleaner tomorrow",
  url: "test1.html",
  urlTitle: "Join",
  imageSrc: "../assets/images/Tree-On-Hand.jpg"
}, {
  cardTitle: "Manage your waste",
  cardText: "Choose what you want to do with your waste",
  url: "/manage-waste/schedule",
  urlTitle: "Manage waste",
  imageSrc: "../assets/images/manage-Your-Waste.jpg"
}, {
  cardTitle: "Swachch Bharat Abhiyan",
  cardText: "Come together to clean your neighborhood",
  url: "test3.html",
  urlTitle: "Clean your neighborhood",
  imageSrc: "../assets/images/clean-your-neighborhood.jpg"
}, {
  cardTitle: "Teach a Child",
  cardText: "Visit a school and help the students",
  url: "test4.html",
  urlTitle: "Volunteer to teach",
  imageSrc: "../assets/images/Tutor-and-Student.jpg"
}];

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  cards = [];

  constructor() {
    this.cards = cards;
  }

}
