import { Injectable } from '@angular/core';
import { Goal } from '../goal'

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  gols: Goal[] = [
    new Goal (1, 'Watch Finding Nemo', 'Find an online version and watch merlin find his son',new Date(2019,6,9)),
    new Goal (2, 'Buy cookies', 'I have to buy cookies for the parrot', new Date (2019,6,9)),
    new Goal (3, 'Get New Phone Case', 'Diana has her birthday coming up soon', new Date (2022,1,12)),
    new Goal (4, 'Get Dog Food', 'Pupper likes expensive sancks', new Date (2019,0,18)),
    new Goal (5, 'Solve Math Homework', 'Damn Math', new Date (2019,2,14)),
    new Goal(6, 'Plot My World Domination Plan', 'Cause I am an evil over lord', new Date (2020,3,14)),
  ];

  getGoals(){
   return this.gols;
 }
 getGoal(id){
    for (let goal of this.gols){
      if (goal.id == id){
        return goal;
      }
    }
  }

  constructor() { }
}
