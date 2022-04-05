import express from 'express';
import helloController from "./controllers/hello-controller.js";
import userController   from "./controllers/user-controller.js";
import cors from 'cors';

const app = express();

app.use(cors());
// app.get('/hello', (req, res) => {res.send('Hello World!')})
app.get('/', (req, res) => {res.send('Welcome to Full Stack Development!')})
app.use(express.json());

// helloController(app);
userController(app);

app.listen(4000);