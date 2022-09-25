import axios from "axios";
import React, { useState, createContext, useEffect } from "react";

export const todoContext = createContext({
	todoList: [],
	editTodo: () => {},
});

const TodoContextProvider = ({ children }) => {
	const [todoList, setTodoList] = useState([]);

	useEffect(()=>{
		axios.get('todos/')
		.then((res)=>{
		  setTodoList(res.data)
		})
	  },[])
	
	return (
		<todoContext.Provider
			value={{ todoList: todoList, editTodo: setTodoList }}
		>
            {children}
        </todoContext.Provider>
	);
};

export default TodoContextProvider;
