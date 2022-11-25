import React from "react";
import { TodoCounter } from "./TodoCounter";
import { TodoSearch } from "./TodoSearch";
import { TodoList } from "./TodoList";
import { TodoItem } from "./TodoItem";
import { CreateTodoButton } from "./CreateTodoButton";

const defaultTodos = [
  {
    text: "pelando cebollas 1",
    completed: false,
  },
  {
    text: "pelando cebollas 2",
    completed: false,
  },
  {
    text: "pelando cebollas 3",
    completed: false,
  },
  {
    text: "pelando cebollas 4",
    completed: true,
  },
];

function App() {
  const [todos, setTodos] = React.useState(defaultTodos);
  const [searchValue, setSearchValue] = React.useState("");

  const completedTodos = todos.filter((todo) => !!todo.completed);
  const totalTodos = todos.length;

  let searchedTodos = [];

  if (!searchValue.length >= 1) {
    searchedTodos = todos;
  } else {
    searchedTodos = todos.filter((todo) => {
      const todoText = todo.text.toLowerCase();
      const searchText = searchValue.toLowerCase();
      return todoText.includes(searchText);
    });
  }

  const completeTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex(todo => todo.text === text);
    newTodos[todoIndex].completed = true;
    setTodos(newTodos);
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex(todo => todo.text === text);
    newTodos.splice(todoIndex, 1);
    setTodos(newTodos);
  }

  return (
    <React.Fragment>
      <TodoCounter total={totalTodos} completed={completedTodos.length} />
      <TodoSearch searchValue={searchValue} setSearchValue={setSearchValue} />
      <TodoList>
        {searchedTodos.map((todo) => (
          <TodoItem
          key={todo.text}
          text={todo.text}
          completed={todo.completed}
          onComplete={()=>completeTodo(todo.text)}
          onDelete={()=>deleteTodo(todo.text)}
          />
        ))}
      </TodoList>
      <CreateTodoButton />
    </React.Fragment>
  );
}

export default App;
