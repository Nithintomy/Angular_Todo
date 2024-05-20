// backend/models/Task.js

import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    task_name: String,
    status: String,
    completed: Boolean
});

const Task = mongoose.model('Task', taskSchema);

export default Task;
