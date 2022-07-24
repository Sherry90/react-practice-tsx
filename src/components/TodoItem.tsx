import classes from './TodoItem.module.css'
import React from "react";

const TodoItem:React.FC<{ text:string; onRemoveTodo: (event:React.MouseEvent) => void }> = (props) => {
    return <li onClick={props.onRemoveTodo} className={classes.item}>{props.text}</li>
}

export default TodoItem;