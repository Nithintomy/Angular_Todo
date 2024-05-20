import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Task } from '../model/task';

@Injectable({
  providedIn: 'root'
})
export class CrudService {

  serviceURL: string;

  constructor(private http: HttpClient) {
    this.serviceURL = "http://localhost:3000/tasks";
  }

  addTask(task: Task): Observable<Task> {
    const taskData = { task_name: task.task_name };
    return this.http.post<Task>(this.serviceURL, taskData);
  }

  getAllTask(): Observable<Task[]> {
    return this.http.get<Task[]>(this.serviceURL);
  }

  deleteTask(task: Task): Observable<void> {
    return this.http.delete<void>(`${this.serviceURL}/${task.id}`);
  }

  editTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.serviceURL}/${task.id}`, task);
  }
}
