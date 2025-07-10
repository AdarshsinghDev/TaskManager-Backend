import express from "express";
import dotenv from "dotenv";
dotenv.config();
import "./config/db.js";
import taskRouter from "./routes/taskRouter.js"
import cors from "cors";

const app = express();
const PORT = process.env.PORT || 8080;

app.use(cors({origin:"https://taskboardcolab.vercel.app/", credentials: true,});
app.use(express.json());
app.use("/api/task", taskRouter);
app.get("/", (req, res) => {
    res.send("Hello From Server");
});

app.listen(PORT, () => {
    console.log(`Server is Running on Port ${PORT}`);
})
