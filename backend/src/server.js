import express from 'express'
import cors from 'cors'
import connectDB from '../src/connection/db.js'
import taskRouter from './routes/taskRoutes.js'



const app = express()
const PORT = process.env.PORT || 5000

connectDB()

app.use(cors())
app.use(express.json())
app.use('/tasks',taskRouter)


app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  });


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });