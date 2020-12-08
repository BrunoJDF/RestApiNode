import express, { json } from 'express';
import morgan from 'morgan';

//add jwt
import jwt from 'jsonwebtoken';
//import config
import config from './config/config';

//importing routes
import projectRoutes from './routes/projects.route';
import taskRoutes from './routes/task.route';
import usersRoutes from './routes/users.route';


//initialization
const app = express();

//middleware
app.use(morgan('dev'));
app.use(json());

app.set('llave', config.llave);
app.use(express.urlencoded({ extended: false }));
//app.use(bodyParser.json());

//routes
app.use('/api/projects', projectRoutes);
app.use('/api/task', taskRoutes);
app.use('/api/users', usersRoutes);
export default app;