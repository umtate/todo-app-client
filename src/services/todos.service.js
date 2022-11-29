import axios from "axios";

const BASE_URL = "http://localhost:4000/todos";

const todosService = () => {
  const getTodos = async (id) => {
    const todos = await axios
      .get(`${BASE_URL}/listTodos/${id}`)
      .then((res) => res.data);
    return todos;
  };

  const createTodo = async (data) => {
    const todo = await axios
      .post(`${BASE_URL}/createTodo`, data)
      .then((res) => res.data);
    return todo;
  };

  const deleteTodo = async (id) => {
    const todo = await axios
      .delete(`${BASE_URL}/${id}/deleteTodo`)
      .then((res) => res.data);
    return todo;
  };

  const updateTodoStatusToComplete = async (id) => {
    const todo = await axios
      .put(`${BASE_URL}/${id}/markTodoCompleted`)
      .then((res) => res.data);
    return todo;
  };

  const updateTodoStatusToUnComplete = async (id) => {
    const todo = await axios
      .put(`${BASE_URL}/${id}/markTodoUncompleted`)
      .then((res) => res.data);
    return todo;
  };

  return {
    getTodos,
    updateTodoStatusToComplete,
    updateTodoStatusToUnComplete,
    createTodo,
    deleteTodo,
  };
};

export default todosService();
