import Task from "../models/task.model.js";

export const createTask = async (req, res) => {
    try {
        const { taskName, isDone } = req.body;

        if (!taskName) {
            return res.status(400).json({ message: "Task name is Required", success: false });
        }

        const task = await Task.create({ taskName, isDone });
        return res.status(201).json({ message: "Task is created sucessfully", success: true, task })
    }
    catch (error) {
        return res.status(501).json({ message: "Task creation Failed", error: error.message, success: false });
    }
}

export const getAllTask = async (req, res) => {
    try {
        const taskData = await Task.find().sort({ createdAt: -1 });

        return res.status(200).json({ message: "All Task", task: taskData, success: true });
    }
    catch (error) {
        return res.status(500).json({ message: "Task fetching Failed", error: error.message, success: false });
    }
}

export const updateTask = async (req, res) => {
    try {
        const id = req.params.id;
        const taskBody = req.body;
        const obj = { $set: { ...taskBody } };
        const taskData = await Task.findByIdAndUpdate(id, obj);

        return res.status(200).json({ message: "Task Update successfully", task: taskData, success: true });
    }
    catch (error) {
        return res.status(500).json({ message: "Task Updation Failed", error: error.message, success: false });
    }
}

export const deleteTask = async (req, res) => {
    try {
        const id = req.params.id;
        const taskData = await Task.findByIdAndDelete(id);

        return res.status(200).json({ message: "Task Deleted successfully", task: taskData, success: true });
    }
    catch (error) {
        return res.status(500).json({ message: "Task Deletion Failed", error: error.message, success: false });
    }
}