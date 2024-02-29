console.log("hellow world");
import express from 'express';
import auth from './routes/index.routes.js'
import useRoutes from './routes/user.routes.js'

const app = express();

app.use(express.json());
app.use('/api', useRoutes)
app.use('/api', auth)


app.listen(3000);

console.log("Services on port 3000");