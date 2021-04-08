import { Component, OnInit } from '@angular/core';
import {GoalService} from '../goal.service'

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.scss']
})
export class GoalListComponent implements OnInit {
typesOfShoes: string[] = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];
goals;

  constructor(private goalService: GoalService) { }

  ngOnInit(): void {
    this.getGoals();
  }
  getGoals = () => this.goalService.getGoals().subscribe(res => {
    (this.goals = res);
    console.log(this.goals)
  });

  deleteGoal = data => this.goalService.deleteGoal(data);

  updateGoal = (data, description) => this.goalService.updateGoal(data, description);
}
