import React, { useContext, useState } from "react";
import { Paper, Typography, TextField, Button } from "@mui/material";
import { todoContext } from "../Context/todoContextProvider";
import axios from 'axios'

const AddTodo = () => {

	const TodoContext=useContext(todoContext)
	const [value,setValue]=useState('')
	
	const handleSubmit=async ()=>{
		axios.post('todos/add',{name:value}).then((res)=>{
			TodoContext.editTodo(res.data)
		}).catch((err)=>{
			console.log(err)
		})
		setValue("")
	}


	return (
		<Paper
			style={{
				padding: "5%",
			}}
		>
			<Typography
				style={{
					textAlign: "center",
					marginBottom: "10%",
				}}
				variant="h5"
			>
				Add Todo
			</Typography>

			<TextField variant="standard" label="Enter Task.." fullWidth={true} value={value} onChange={(res)=>setValue(res.target.value)}/>

			<Button variant="contained" style={{
				marginTop:"5%"
			}} onClick={()=>handleSubmit()}>Submit</Button>
		</Paper>
	);
};

export default AddTodo;
