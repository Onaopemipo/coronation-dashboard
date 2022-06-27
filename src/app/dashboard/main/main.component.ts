import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $.getScript("./assets/js/e-commerce-dashboard.js");
    $.getScript("./assets/js/human-resources.js")
  }

}
