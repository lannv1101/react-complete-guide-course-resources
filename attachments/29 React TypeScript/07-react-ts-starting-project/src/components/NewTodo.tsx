import { useContext, useRef } from "react";
import classes from "./NewTodo.module.css";
import { TodosContext } from "../store/todos-context";

const NewTodo: React.FC = () => {
  const todoTextInput = useRef<HTMLInputElement>(null);
  const todoCtx = useContext(TodosContext);

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    const enteredText = todoTextInput.current!.value;

    if (enteredText.trim().length === 0) {
      return;
    }
    todoCtx.addTodo(enteredText);
  };
  return (
    <form onSubmit={submitHandler} className={classes.form}>
      <label htmlFor="todo-text" className={classes.label}>
        Todo text
      </label>
      <input
        type="text"
        id="todo-text"
        ref={todoTextInput}
        className={classes.inout}
      />
      <button className={classes.button}>Add Todo</button>
    </form>
  );
};

export default NewTodo;
