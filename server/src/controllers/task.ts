import Task from "../models/task";
import asyncHandler from "express-async-handler";
import { Request, Response } from "express";
import getUserFromToken from "../utils/getUserFromToken";

export const createTask = asyncHandler(async (req:Request, res:Response) => {
  const { title, description, url, assigned_to, created_by } = req.body;
  const newTask = new Task({
    created_by: created_by,
    assigned_to: assigned_to,
    title: title,
    description: description,
    url: url,
  });

  await newTask.save();

  res.status(201).json({
    success: true,
    task: {
      editor_email: newTask.assigned_to,
      youtuber_email: newTask.created_by,
      video_title: newTask.title,
      video_description: newTask.description,
      video_url: url,
    },
  });
});


export const getEditorTasks=asyncHandler(async(req:Request,res:Response)=>{  

  const editor_email = (getUserFromToken()?.email) || "";
  const tasks = await Task.find({ assigned_to: editor_email });

  res.status(201).json({
    success:true,
    count:tasks.length,
    tasks,
  });
});

export const getYoutuberTasks=asyncHandler(async(req:Request,res:Response)=>{  
  
  const youtuber_email = (getUserFromToken()?.email) || "";
  const tasks = await Task.find({ created_by: youtuber_email });

  res.status(201).json({
    success:true,
    count:tasks.length,
    tasks,
  });
});

