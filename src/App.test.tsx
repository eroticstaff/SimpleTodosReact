import React from "react";
import { render, screen } from "@testing-library/react";
import TodoContainer from "./Components/TodoContainer";
import { ITodoObjects } from "./Interfaces";

describe("TodoContainer Component", () => {
  it("TodoContainer renders", () => {
    let todos: ITodoObjects = [
      { id: 1, name: "To clean room", completed: false },
      { id: 2, name: "To do homework", completed: false },
      { id: 3, name: "To watch new movie", completed: false },
    ];

    const setTodos = (new_todos: ITodoObjects) => {
      todos = new_todos;
    };

    let onChangeTodo = (todo_id: Number, status: boolean): void => {
      todos[todos.findIndex((todo) => todo.id === todo_id)].completed = status;
      setTodos(todos);
      console.log(todos);
    };

    render(
      <TodoContainer todos={todos} active={"All"} onChangeTodo={onChangeTodo} />
    );

    expect(screen.getByText("To clean room")).toBeInTheDocument();
    expect(screen.getByText("To do homework")).toBeInTheDocument();
    expect(screen.getByText("To watch new movie")).toBeInTheDocument();
  });
  it("TodoContainer 'In Progress' renders", () => {
    let todos: ITodoObjects = [
      { id: 1, name: "To clean room", completed: false },
      { id: 2, name: "To do homework", completed: false },
      { id: 3, name: "To watch new movie", completed: true },
    ];

    const setTodos = (new_todos: ITodoObjects) => {
      todos = new_todos;
    };

    let onChangeTodo = (todo_id: Number, status: boolean): void => {
      todos[todos.findIndex((todo) => todo.id === todo_id)].completed = status;
      setTodos(todos);
      console.log(todos);
    };

    render(
      <TodoContainer
        todos={todos}
        active={"InProgress"}
        onChangeTodo={onChangeTodo}
      />
    );

    expect(screen.getByText("To clean room")).toBeInTheDocument();
    expect(screen.getByText("To do homework")).toBeInTheDocument();
  });
  it("TodoContainer 'Completed' renders", () => {
    let todos: ITodoObjects = [
      { id: 1, name: "To clean room", completed: false },
      { id: 2, name: "To do homework", completed: false },
      { id: 3, name: "To watch new movie", completed: true },
    ];

    const setTodos = (new_todos: ITodoObjects) => {
      todos = new_todos;
    };

    let onChangeTodo = (todo_id: Number, status: boolean): void => {
      todos[todos.findIndex((todo) => todo.id === todo_id)].completed = status;
      setTodos(todos);
      console.log(todos);
    };

    render(
      <TodoContainer
        todos={todos}
        active={"Completed"}
        onChangeTodo={onChangeTodo}
      />
    );

    expect(screen.getByText("To watch new movie")).toBeInTheDocument();
  });
});
