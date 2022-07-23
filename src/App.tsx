import { useState } from "react";

import NewTodo from "./components/NewTodo";
import Todos from "./components/Todos";
import Todo from "./models/todo";

const App = () => {
    //const todos = [new Todo("Learn React"), new Todo("Learn Typesctipt")];
    const [todos, setTodos] = useState<Todo[]>([]);

    const addTodoHandler = (todoText:string) => {
        const newTodo = new Todo(todoText);

        setTodos((prevState) => {
            return prevState.concat(newTodo);
        })
    }

    return (
        <div>
            <NewTodo onAddTodo={addTodoHandler}/>
            <Todos items={todos}/>
        </div>
    );
};

export default App;
