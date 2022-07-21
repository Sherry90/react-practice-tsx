//import React from "react";

import Todo from "../models/todo";
import TodoList from "./TodoList";

const Todos: React.FC<{ items: Todo[] }> = (props) => {
  return <TodoList items={props.items} />;
};

export default Todos;
