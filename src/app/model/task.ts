export class Task {
  _id: string; 
  task_name: string;
  status: string;
  completed: boolean;

  constructor() {
    this._id = '';
    this.task_name = '';
    this.status = 'pending';
    this.completed = false;
  }
}
