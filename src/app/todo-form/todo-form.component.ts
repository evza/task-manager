import { Component, OnInit } from '@angular/core';
import { Task, OrganizerService } from '../organizer.service';


@Component({
  selector: 'app-todo-form',
  templateUrl: './todo-form.component.html',
  styleUrls: ['./todo-form.component.css']
})
export class TodoFormComponent implements OnInit {

  title = '';
  error = false;

  constructor(public organizerService: OrganizerService) { }

  ngOnInit(): void {
  }

  addTask(): void {
    if(this.title === '') {
      this.error = true;
    } else {
      const newTask: Task = {
        title: this.title,
        id: Date.now(),
        completed: false,
        date: new Date().toLocaleString()
      };
      this.organizerService.addTask(newTask);
      this.title = '';
      this.error = false;
    }
  }

}
