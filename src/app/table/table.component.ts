import { Component } from '@angular/core';
import { Task } from '../model/task';
import { CrudService } from '../service/crud.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent {

  taskObj: Task = new Task();
  taskArr: Task[] = [];

  editTaskValue: string = '';

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.editTaskValue = '';
    this.taskObj = new Task();
    this.taskArr = [];
    this.getAllTask();
  }

  getAllTask() {
    this.crudService.getAllTask().subscribe(res => {
      this.taskArr = res;
    }, err => {
      alert("Unable to get list of tasks");
    });
  }

  onTaskAdded(task: Task) {
    this.taskArr.push(task);
  }

  editTask() {
    if (this.editTaskValue.trim()) {
      this.taskObj.task_name = this.editTaskValue;
      this.crudService.editTask(this.taskObj).subscribe(res => {
        this.getAllTask();
        this.editTaskValue = '';
        this.taskObj = new Task();
      }, err => {
        alert("Failed to update task");
      });
    } else {
      alert("Task name cannot be empty");
    }
  }

  deleteTask(task: Task) {
    this.crudService.deleteTask(task).subscribe(res => {
      this.getAllTask();
    }, err => {
      alert("Failed to delete task");
    });
  }

  call(task: Task) {
    this.taskObj = { ...task };
    this.editTaskValue = task.task_name;
  }

  completeTask(task: Task) {
    task.completed = !task.completed;
    task.status = task.completed ? 'complete' : 'pending';
    this.crudService.editTask(task).subscribe(res => {
      this.getAllTask();
    }, err => {
      alert("Failed to update task status");
    });
  }
}
