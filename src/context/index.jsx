import { useContext } from "react";
import { TodoStateContext } from "./todoContext/todoStateContext";
import { TodosStateContext } from "./todosContext/todosStateContext";
import { UserStateContext } from "./userContext/userStateContext";

export const UserContext = () => useContext(UserStateContext)
export const TodoContext = () => useContext(TodoStateContext)
export const TodosContext = () => useContext(TodosStateContext)
