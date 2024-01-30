import mongoose, { Document, Schema } from 'mongoose';

export interface ITask extends Document {
  created_by: string;
  assigned_to: string;
  title: string;
  description: string;
  url: string;
  createdAt: Date;
  updatedAt: Date;
}

const TaskSchema = new Schema<ITask>(  {
    created_by: {
      type: String,
      required: true,
      trim: true,
    },
    assigned_to: {
      type: String,
      required: true,
      trim: true,
    },
    title: {
      type: String,
      required: true,
      trim: true,
    },
    description: {
      type: String,
      required: true,
      trim: true,
    },
    url: {
      type: String,
      required: true,
      trim: true,
    },
  },
  {
    timestamps: true,
  }
);

const Task = mongoose.model<ITask>("Task", TaskSchema);

export default Task;
