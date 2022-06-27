import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-industry-analysis',
  templateUrl: './industry-analysis.component.html',
  styleUrls: ['./industry-analysis.component.scss']
})
export class IndustryAnalysisComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    $.getScript("./assets/js/e-commerce-dashboard.js");
    $.getScript("./assets/js/human-resources.js")
  }

}
