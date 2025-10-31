import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

let tasks = []; // store tasks temporarily

// ✅ Create new task
app.post("/tasks", (req, res) => {
  const newTask = {
    id: tasks.length + 1,
    title: req.body.title,
    description: req.body.description,
    priority: req.body.priority,
    due_date: req.body.due_date,
  };

  tasks.push(newTask);
  console.log("✅ Task added:", newTask);
  res.status(201).json(newTask);
});

// ✅ Get all tasks
app.get("/tasks", (req, res) => {
  res.json(tasks);
});

// ✅ Delete task by ID
app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;
  tasks = tasks.filter(task => task.id !== parseInt(id));
  res.status(200).json({ message: "Task deleted" });
});

app.listen(4000, () => console.log("Server running on port 4000"));
