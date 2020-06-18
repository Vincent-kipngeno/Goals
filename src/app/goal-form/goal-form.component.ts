import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Goal } from "../goal";
import { AlertService } from '../alert-service/alert.service';

@Component({
  selector: 'app-goal-form',
  templateUrl: './goal-form.component.html',
  styleUrls: ['./goal-form.component.css']
})
export class GoalFormComponent implements OnInit {

  newGoal = new Goal(0, "", "", new Date());
  alertService:AlertService;
  @Output() addGoal = new EventEmitter<Goal>();
  submitGoal(){
    this.addGoal.emit(this.newGoal);
    this.alertService.alertMe("Your goal has been added");
    this.newGoal = new Goal(0, "", "", new Date());
  }
  constructor(alertService:AlertService) {
    this.alertService = alertService;
  }

  ngOnInit(): void {
  }

}
