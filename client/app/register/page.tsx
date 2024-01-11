"use client"
import Link from "next/link";
import { Input } from "../components/Input";
import { useState } from "react";

interface UserData {
    name: string;
    username: string;
    password: string;
  }
  
const defaultData: UserData= {name: "",username: "",password: ""};

const Register = () => {
    const [data,setData] = useState(defaultData);

    const onValueChange = (e:any) => {
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    const onRegister = (e:any) => {
        e.preventDefault();
        if(!data.name || !data.username || !data.password){
            alert("Please fill all mandatory fields.")
        }
        //API Call
    }

    return (
      <div className="min-h-screen bg-gray-100 flex flex-col justify-center items-center">
        <div className="bg-white px-16 pt-8 pb-12 mb-4">
            <h1 className="text-3xl mb-4 text-center">Register</h1>
            <form onSubmit={onRegister}>
                <Input
                    label="Name"
                    id="name"
                    type="text"
                    value={data.name}
                    onChange={onValueChange}
                />
                <Input
                    label="Username"
                    id="username"
                    type="text"
                    value={data.username}
                    onChange={onValueChange}
                />
                <Input 
                    label="Password"
                    id="password"
                    type="password"
                    value={data.password}
                    onChange={onValueChange}
                />
                <button className="bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded-full w-full ">Submit</button>
                <p>
                    Already have an account? {""}
                    <Link href="/login" className="text-blue-500 hover:underline">Login</Link>
                </p>
            </form>
        </div>
      </div>
    )
  }
  export default Register;