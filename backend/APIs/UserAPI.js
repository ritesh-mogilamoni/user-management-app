//Create min-express app
import exp from "express"
import { UserModel } from "../models/UserModel.js"
export const userApp=exp.Router()

//USER API ROUTES

//Create User
userApp.post('/create-user',async (req,res)=>{
    let user=req.body
    let newUserDoc=new UserModel(user)
    let newUser=newUserDoc.save()
    res.status(201).json({message:"User created successfully",payload:newUser})
})
//Read all users
userApp.get('/users',async(req,res)=>{
    let users=await UserModel.find()
    res.status(200).json({message:"Users",payload:users})
})
//Read a user by ID
userApp.get('/users/:id',async(req,res)=>{
    let uid=req.params.id
    let user=await UserModel.findById(uid)
    res.status(200).json({message:"Users",payload:user})
})
//Delete a user by ID
//Update user by ID