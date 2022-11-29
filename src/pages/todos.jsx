import { useEffect } from "react";
import TodosComponent from "../components/Todos/TodosComponent";
import { TodosContext, UserContext } from "../context";
import todosService from "../services/todos.service";

const TodosPage = () => {
  const {
    todos,
    getTodosDetails,
    getTodosDetailsSuccess,
    getTodosDetailsFail,
  } = TodosContext();

  const {user} = UserContext()



  const handleLoadTodos = () => {
    getTodosDetails();
    todosService
      .getTodos(user?.userId)
      .then((res) => {
        getTodosDetailsSuccess(res);
      })
      .catch((err) => getTodosDetailsFail());
  };

  useEffect(() => {
    handleLoadTodos();
    return () => {
      console.log("unmounting component");
    };
  }, [user]);

  return <TodosComponent todos={todos?.data} reload={()=>handleLoadTodos()} user={user}/>;
};

export default TodosPage;
