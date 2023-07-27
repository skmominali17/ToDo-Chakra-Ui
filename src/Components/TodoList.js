import React from "react";
import {
  VStack,
  HStack,
  Text,
  IconButton,
  StackDivider,
  Spacer,
  Badge
} from "@chakra-ui/react";

import { BiTrash } from "react-icons/bi";
function TodoList({ todos, deleteTodo }) {
  if (!todos.length) {
    return (
      <Badge px="8" py="4" colorScheme="green" m="4" borderRadius="lg">
        No Todos, Yay!
      </Badge>
    );
  }

  return (
    <VStack
      divider={<StackDivider />}
      borderColor="gray.100"
      borderWidth="2px"
      p="4"
      borderRadius="lg"
      w="100%"
      maxW={{ base: "90vw", sm: "80vw", lg: "50vw", xl: "40vw" }}
      alignItems="stretch"
    >
      {todos.map((todo) => (
        <HStack key={todo.id}>
          <Text>{todo.body}</Text>
          <Spacer />
          <IconButton
            icon={BiTrash}
            isRound={true}
            onClick={() => deleteTodo(todo.id)}
          />
        </HStack>
      ))}
    </VStack>
  );
}

export default TodoList;
