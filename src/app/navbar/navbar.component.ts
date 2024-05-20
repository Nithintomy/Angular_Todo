import { Component, Output, EventEmitter } from '@angular/core';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons'; 
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../model/task';
import { CrudService } from '../service/crud.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  faUser = faUser;
  faHome = faHome;
  faSearch = faSearch;
  faCog = faCog;
  faBell = faBell; 

  taskObj: Task = new Task();
  taskArr: Task[] = [];
  addTaskValue: string = '';

  @Output() taskAdded = new EventEmitter<Task>();

  constructor(private crudService: CrudService) { }

  ngOnInit(): void {
    this.addTaskValue = '';
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

  addTask() {
    if (this.addTaskValue.trim()) {
      this.taskObj.task_name = this.addTaskValue;
      this.crudService.addTask(this.taskObj).subscribe(res => {
        this.taskArr.push(res);
        this.taskAdded.emit(res); // Emit the event with the new task
        this.addTaskValue = '';
      }, err => {
        alert("Failed to add task");
      });
    } else {
      alert("Task name cannot be empty");
    }
  }
}
