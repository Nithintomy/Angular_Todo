import Task from "../model/task.js";

export const getAllTask = async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

export const addTask = async (req, res) => {
  console.log("enter")
  try {
    const { task_name, status, completed } = req.body;

    const newTask = new Task({ task_name, status, completed });

    await newTask.save();

    res.json(newTask);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

export const updateTask = async (req, res) => {
  try {
    const { task_name, status, completed } = req.body;

    const updatedTask = { task_name, status, completed };

    const task = await Task.findByIdAndUpdate(req.params.id, updatedTask, {
      new: true,
    });

    if (!task) {
      return res.status(404).json({ msg: "Task not found" });
    }

    res.json(task);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

export const deleteTask = async (req, res) => {
  try {
    const task = await Task.findByIdAndDelete(req.params.id);

    if (!task) {
        return res.status(404).json({ msg: "Task not found" });
    }

    res.json({ msg: "Task deleted" });
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};
