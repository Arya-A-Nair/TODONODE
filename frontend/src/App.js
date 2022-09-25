import { Paper, Typography } from "@mui/material/";
import { useEffect } from "react";
import AddTodo from "./components/AddTodo";
import DisplayTodo from "./components/DisplayTodo";
import TodoContextProvider from "./Context/todoContextProvider";
import axios from "axios";


function App() {

  


	return (
		<TodoContextProvider>
			<Paper variant="outlined" >
				<Typography
					style={{
						marginLeft: "10%",
						marginTop: "2%",
					}}
					variant="h4"
				>
					Todo App
				</Typography>
			</Paper>
			<div style={{ width: "40vw", marginLeft: "30vw", marginTop: "10vh" }}>
				<AddTodo />
				<DisplayTodo />
			</div>
		</TodoContextProvider>
	);
}

export default App;
