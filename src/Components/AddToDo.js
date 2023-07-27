import React, { useState } from "react";
import { nanoid } from "nanoid";
import { HStack, Input, Button, useToast } from "@chakra-ui/react";

function AddToDo({ addTodo }) {
  const toast = useToast();

  function handleSubmit(e) {
    e.preventDefault();
    if (!content) {
      toast({
        title: "No Content",
        status: "error",
        duration: 2000,
        isClosable: true
      });
    }
    const todo = {
      id: nanoid(),
      body: content
    };
    console.log(todo);
    addTodo(todo);
    setContent("");
  }

  const [content, setContent] = useState("");

  return (
    <form onSubmit={handleSubmit}>
      <HStack mt="8">
        <Input
          variant="filled"
          placeholder="Add Item"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />
        <Button px="8" type="submit" bgColor="red.300">
          Add ToDo
        </Button>
      </HStack>
    </form>
  );
}

export default AddToDo;
