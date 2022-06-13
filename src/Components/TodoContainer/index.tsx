import React from "react";
import { IOnChangeFunction, ITodoObjects } from "../../Interfaces";
import TodoElement from "../TodoElement";

export default function TodoContainer(prop: {
  todos: ITodoObjects;
  active: string;
  onChangeTodo: IOnChangeFunction;
}) {
  return (
    <div className="TodoContainer">
      {prop.todos.map((todo, index) => {
        if (
          prop.active === "All" ||
          (prop.active === "InProgress" && !todo.completed) ||
          (prop.active === "Completed" && todo.completed)
        )
          return (
            <TodoElement
              data={todo}
              key={index}
              onChange={prop.onChangeTodo}
            ></TodoElement>
          );
        else {
          return <></>;
        }
      })}
    </div>
  );
}
