import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shareholder-analysis',
  templateUrl: './shareholder-analysis.component.html',
  styleUrls: ['./shareholder-analysis.component.scss']
})
export class ShareholderAnalysisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $.getScript("./assets/js/dashboard-analytics.js");
    $.getScript("./assets/js/e-commerce-dashboard.js");
    $.getScript("./assets/js/human-resources.js");
    $.getScript("./assets/js/deafult-dashboard.js")
  }

}
