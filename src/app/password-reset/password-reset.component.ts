import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.scss']
})
export class PasswordResetComponent implements OnInit {

  stage = 3;
  constructor() { }

  ngOnInit(): void {
  }

  nextStage() {
    this.stage++;
  }

  passwordReset(){
    this.stage++

  }

}
