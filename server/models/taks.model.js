import mongoose from 'mongoose'

const TaskSchema = mongoose.Schema(
  {
    title: String,
    desc: String
  },
  { timestamps: true }
)

export const TaskModel = mongoose.model("tasks", TaskSchema)