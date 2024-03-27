import mongoose, { Schema, Document } from "mongoose"

export interface IUser extends Document {
    name: string
    email: string
    image: string
    username: string
    role:string
}

const userSchema = new Schema<IUser>({
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
    },
    image: {
      type: String,
      trim: true,
      lowercase: true,
    },
    username: {
      type: String,
      trim: true,
      lowercase: true,
    },
    role: {
      type: String,
      enum: ['editor', 'youtuber'],
      default: 'editor', // Default role is set to 'editor'
    },
  });
  
  const User = mongoose.model<IUser>('User', userSchema);
  
  module.exports = User;
  