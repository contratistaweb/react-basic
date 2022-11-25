import React from "react";
import { AppUI } from "./AppUI";

// const defaultTodos = [
//   {
//     text: "pelando cebollas 1",
//     completed: false,
//   },
//   {
//     text: "pelando cebollas 2",
//     completed: false,
//   },
//   {
//     text: "pelando cebollas 3",
//     completed: false,
//   },
//   {
//     text: "pelando cebollas 4",
//     completed: true,
//   },
// ];

function useLocalStorage(itemName, initialValue){
  const localStorageItem = localStorage.getItem(itemName)
  let parsedItem;
  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  }else{
    parsedItem = JSON.parse(localStorageItem)
  }
  const [item, setItem] = React.useState(parsedItem);
  
  const saveItem = (newItems) =>{
    const stringifiedItem = JSON.stringify(newItems);
    localStorage.setItem(itemName, stringifiedItem);
    setItem(newItems);
  }
  return [
    item,
    saveItem
  ]
}

function App() {
  const [todos, saveTodos] = useLocalStorage('TODOS_V1', [])
  
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
    saveTodos(newTodos)
    
  }

  const deleteTodo = (text) => {
    const newTodos = [...todos];
    const todoIndex = todos.findIndex(todo => todo.text === text);
    newTodos.splice(todoIndex, 1);
    saveTodos(newTodos)
  }
  
  return (
    <AppUI 
    totalTodos={totalTodos}
    completedTodos={completedTodos}
    searchValue={searchValue}
    setSearchValue={setSearchValue}
    searchedTodos={searchedTodos}
    completeTodo={completeTodo}
    deleteTodo={deleteTodo}
    />
  )
}

export default App;
