import express, { json } from 'express';
import morgan from 'morgan';

//importing routes
import projectRoutes from './routes/projects.route'
import taskRoutes from './routes/task.route'


//initialization
const app = express();

//middleware
app.use(morgan('dev'));
app.use(json());

//routes
app.use('/api/projects', projectRoutes);
app.use('/api/task', taskRoutes);

export default app;