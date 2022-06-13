import React from "react";
import "./App.scss";
import {
  Input,
  InputGroup,
  Container,
  Content,
  FlexboxGrid,
  Footer,
  Header,
  Nav,
  Panel,
} from "rsuite";
import { AddOutline } from "@rsuite/icons";
import { ITodoObjects } from "./Interfaces";
import TodoContainer from "./Components/TodoContainer";

function App() {
  const [active, setActive] = React.useState<string>("All");
  const [inputText, setInputText] = React.useState<string>("");
  const [todos, setTodos] = React.useState<ITodoObjects>([
    { id: 1, name: "To clean room", completed: false },
    { id: 2, name: "To do homework", completed: false },
    { id: 3, name: "To watch new movie", completed: false },
  ]);

  let onChangeTodo = (todo_id: Number, status: boolean): void => {
    todos[todos.findIndex((todo) => todo.id === todo_id)].completed = status;
    setTodos(todos);
    console.log(todos);
  };

  let onAddButtonClick = (): void => {
    if (inputText === "") return;
    todos.push({ id: todos.length + 1, name: inputText, completed: false });
    setTodos(todos);
    setInputText("");
  };

  let onInput = (value: string, event: any): void => {
    setInputText(value);
  };

  return (
    <div className="App">
      <FlexboxGrid justify="center">
        <FlexboxGrid.Item colspan={10}>
          <Container>
            <Header className="TodoHeader">Todos</Header>
            <Content>
              <Panel bordered shaded>
                <InputGroup>
                  <Input value={inputText} onChange={onInput} />
                  <InputGroup.Button onClick={onAddButtonClick}>
                    <AddOutline />
                  </InputGroup.Button>
                </InputGroup>
                <TodoContainer
                  todos={todos}
                  active={active}
                  onChangeTodo={onChangeTodo}
                />
              </Panel>
            </Content>
            <Footer>
              <Nav
                activeKey={active}
                onSelect={setActive}
                appearance="tabs"
                reversed
              >
                <Nav.Item eventKey="All">All</Nav.Item>
                <Nav.Item eventKey="InProgress">In Progress</Nav.Item>
                <Nav.Item eventKey="Completed">Completed</Nav.Item>
              </Nav>
            </Footer>
          </Container>
        </FlexboxGrid.Item>
      </FlexboxGrid>
    </div>
  );
}

export default App;
