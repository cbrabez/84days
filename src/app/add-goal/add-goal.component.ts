import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { GoalService} from '../goal.service'


@Component({
  selector: 'app-add-goal',
  templateUrl: './add-goal.component.html',
  styleUrls: ['./add-goal.component.scss']
})
export class AddGoalComponent implements OnInit {
    goalForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private goalService: GoalService) { }

  ngOnInit(): void {
    this.goalForm = this.formBuilder.group({
      // email: [null, [Validators.required, Validators.pattern(this.emailRegx)]],
      // password: [null, Validators.required],
      title: [null, Validators.required]
    });
  }
  onSubmit(){
      this.goalService.createGoal(this.goalForm.value)
  }
}
