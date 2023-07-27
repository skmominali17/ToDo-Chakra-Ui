import "./styles.css";
import React, { useState, useEffect } from "react";
import { Heading } from "@chakra-ui/react";
import ToDoList from "./Components/TodoList";
import { VStack, IconButton, useColorMode } from "@chakra-ui/react";
import { BiSun, BiMoon } from "react-icons/bi";
import AddToDo from "./Components/AddToDo";
export default function App() {
  const initialTodos = [
    {
      id: 1,
      body: "Get Pen"
    },

    {
      id: 2,
      body: "Do Code"
    }
  ];

  const [todos, setTodos] = useState(initialTodos);

  // useEffect(()=>{
  //   localStorage.setItem('todos', JSON.stringify(todos));
  // }, [todos]);

  function deleteTodo(id) {
    const newTodos = todos.filter((todo) => {
      return todo.id !== id;
    });
    setTodos(newTodos);
  }

  function addTodo(todo) {
    setTodos([...todos, todo]);
  }

  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <VStack p={4}>
      <IconButton
        icon={colorMode === "light" ? BiSun : BiMoon}
        isRound={true}
        size="lg"
        alignSelf="flex-end"
        onClick={toggleColorMode}
      />
      <Heading
        mb="8"
        fontWeight="extrabold"
        size="2xl"
        bgGradient="linear(to-r, pink.500, pink.300, blue.500)"
        bgClip="text"
      >
        ToDo Application
      </Heading>
      <ToDoList todos={todos} deleteTodo={deleteTodo} />
      <AddToDo addTodo={addTodo} />
    </VStack>
  );
}
