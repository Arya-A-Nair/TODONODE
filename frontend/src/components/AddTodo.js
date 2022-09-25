import React from "react";
import { Paper, Typography, TextField, Button } from "@mui/material";

const AddTodo = () => {
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

			<TextField variant="standard" label="Enter Task.." fullWidth={true}/>

			<Button variant="contained" style={{
				marginTop:"5%"
			}}>Submit</Button>
		</Paper>
	);
};

export default AddTodo;
