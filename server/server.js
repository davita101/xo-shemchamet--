import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { connectDB } from './db/connect.db.js'
import { TaskModel } from './models/taks.model.js'
import path from "path"
dotenv.config()
const app = express()

const PORT = process.env.PORT || 1000
const __dirname = path.resolve()


app.use(cors())
app.use(express.json())

// ! create post
app.post('/createTask', async (req, res) => {
  try {
    const newTask = new TaskModel({
      title: req.body.title,
      desc: req.body.desc
    })

    await newTask.save()
    res.status(201).json({ message: 'Task created successfully' })
  } catch (error) {
    console.log(error.message)
  }
})

// ! get All
app.get('/getAllTask', async (req, res) => {
  try {
    const allTask = await TaskModel.find()
    res.status(200).json(allTask)
  } catch (error) {
    console.log(error.message)
  }
})

// ! get one
app.get('/getOneTask/:id', async (req, res) => {
  try {
    const { id } = req.params
    const oneTask = await TaskModel.findById(id)
    res.status(200).json(oneTask)
  } catch (error) {
    console.log(error.message)
  }
})

// ! update one
app.put('/updateTask/:id', async (req, res) => {
  const { id } = req.params
  try {
    console.log(req.body)
    const updateTask = await TaskModel.findByIdAndUpdate(id, req.body)
    updateTask.save()
    res.status(200).json({ message: 'update successfully' })
  } catch (error) {
    console.log(error.message)
  }
})

// ! delete one
app.delete('/deleteTask/:id', async (req, res) => {
  const { id } = req.params
  try {
    await TaskModel.findByIdAndDelete(id)
    res.status(200).json({ message: 'delete successfully' })
  } catch (error) {
    console.log(error.message)
  }
})
if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/dist')))

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'dist', 'index.html'))
  })
}
app.listen(PORT, err => {
  connectDB()
  console.log('server start at port', PORT)
})
