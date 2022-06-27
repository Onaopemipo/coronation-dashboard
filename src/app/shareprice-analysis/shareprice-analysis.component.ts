import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shareprice-analysis',
  templateUrl: './shareprice-analysis.component.html',
  styleUrls: ['./shareprice-analysis.component.scss']
})
export class SharepriceAnalysisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $.getScript("./assets/js/dashboard-analytics.js");
    $.getScript("./assets/js/e-commerce-dashboard.js");
    $.getScript("./assets/js/human-resources.js");
    $.getScript("./assets/js/deafult-dashboard.js")
  }

}
