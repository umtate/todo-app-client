import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";

import todosService from "../../services/todos.service";
import { Status } from "../../utils/utils";
import { UserContext } from "../../context";
import { TodoListHeading, TodosContainerStyled } from "./styes";

export default function TodosComponent(props) {
  const { todos, reload } = props;
  const [newTodo, setNewTodo] = React.useState("");
  const [listTodos, setListTodos] = React.useState([]);

  const { user } = UserContext();

  React.useEffect(() => {
    setListTodos(todos);
  }, [todos]);

  const handleAddToDo = (e) => {
    if (e.charCode === 13) {
      const data = {
        description: newTodo,
        status: Status.Uncomplete,
        userId: user?.userId,
      };
      todosService.createTodo(data).then(() => {
        setNewTodo("")
        reload();
      });
    }
  };

  const handleUpdateStatus = (status) => {
    status === Status.Uncomplete
      ? todosService.updateTodoStatusToComplete(1)
      : todosService.updateTodoStatusToUnComplete(1);

      reload()
  };

  const handleFilter = (filter) => {
    const list =
      {
        all: todos,
        complete: todos.filter((x) => x.status === Status.Complete),
        incomplete: todos.filter((x) => (x.status = Status.Uncomplete)),
      }[filter] ?? todos;

    setListTodos(list);
  };

  const handleDelete = (id) => {
    todosService.deleteTodo(id).then(() => reload())
  };

  return (
    <TodosContainerStyled>
      <Card sx={{ minWidth: 275 }}>
        <CardContent>
          <TodoListHeading>Todo List</TodoListHeading>
          <TextField
            id="standard-basic"
            label="Add a todo"
            variant="standard"
            onChange={(e) => {
              setNewTodo(e.target.value);
            }}
            onKeyPress={handleAddToDo}
            value={newTodo}
          />
          <FormGroup>
            {listTodos?.map((todo) => (
              <Grid key={todo?.todoId} container sx={{ color: "text.primary" }}>
                <Grid item xs={10}>
                  <FormControlLabel
                    control={
                      <Checkbox
                        checked={todo?.status === "Complete"}
                        onChange={() => handleUpdateStatus(todo.status)}
                      />
                    }
                    label={todo?.description}
                  />
                </Grid>
                <Grid item xs={2} sx={{ mt: 2 }}>
                  <div onClick={() => handleDelete(todo?.todoId)}>x</div>
                </Grid>
              </Grid>
            ))}
          </FormGroup>
        </CardContent>
        <CardActions>
          <Typography>Show</Typography>
          <Button size="small" onClick={() => handleFilter("all")}>
            All
          </Button>
          <Button size="small" onClick={() => handleFilter("complete")}>
            Completed
          </Button>
          <Button size="small" onClick={() => handleFilter("incomplete")}>
            Incompleted
          </Button>
        </CardActions>
      </Card>
    </TodosContainerStyled>
  );
}
