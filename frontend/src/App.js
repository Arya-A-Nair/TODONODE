import { Paper, Typography } from "@mui/material/";
import AddTodo from "./components/AddTodo";
import DisplayTodo from "./components/DisplayTodo";
function App() {
	return (
		<>
			<Paper elevation={6} variant="outlined">
				<Typography style={{
          marginLeft:"10%",
          marginTop:"2%"
        }} variant="h4">Todo App</Typography>
			</Paper>
      <div style={{width:"40vw",marginLeft:"30vw",marginTop:"10vh"}}>
        <AddTodo/>
        <DisplayTodo/>
      </div>
		</>
	);
}

export default App;
