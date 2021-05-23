import express, { Application } from 'express';

import employeeRoutes from './routes/department';
import departmentRoutes from "./routes/employee";

const app: Application = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// Routes
app.use("/api", employeeRoutes);
app.use("/api", departmentRoutes);

app.listen(3000, () => {
    console.log("Sever is started at port 3000");
});
