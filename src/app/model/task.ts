export class Task {
    id: number;
    task_name: string;
    status: string;
    completed: boolean;
  
    constructor() {
      this.id = 0;
      this.task_name = '';
      this.status = 'pending'; 
      this.completed = false; 
    }
  }
  