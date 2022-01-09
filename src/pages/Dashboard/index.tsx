import { useState } from "react";
import { Button } from "../../components/Button/styled";
import { Nav } from "../../components/Nav/Index";
import { NewTaskModal } from "../../components/NewTaskModal";
import { Todos } from "../../components/Todos";
import { FooterContainer } from "../../components/Todos/styled";
import { DashboardContainer, NoTasks } from "./styled";
import { TodosProps } from "../../components/Types/TodosProps";

export function Dashboard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [todoList, setTodoList] = useState<TodosProps[]>([]);
  const [filterTodos, setFilterTodos] = useState(false);
  const existsTask =
    todoList.filter((item) => item.isCompleted === filterTodos).length === 0;

  const handleToggleNewTodoModal = () => {
    setIsModalOpen((prevState) => !prevState);
  };

  const handleNewTodo = (todo: TodosProps) => {
    setTodoList([...todoList, todo]);
  };

  const handleIsCompletedToggle = (_id: string) => {
    const toggleIsCompleted = [...todoList].map((todo) => {
      if (todo._id === _id) {
        todo.isCompleted = !todo.isCompleted;
      }

      return todo;
    });
    setTodoList([...toggleIsCompleted]);
  };

  return (
    <>
      <Nav handleToggleNewTodoModal={handleToggleNewTodoModal} />
      <NewTaskModal
        handleToggleNewTodoModal={handleToggleNewTodoModal}
        handleNewTodo={handleNewTodo}
        isModalOpen={isModalOpen}
      />
      <DashboardContainer filterTodos={filterTodos}>
        <h1> Hi there.</h1>

        <div className="buttonsWrapp">
          <Button className="todoBtn" onClick={() => setFilterTodos(false)}>
            To do
          </Button>

          <Button className="closedBtn" onClick={() => setFilterTodos(true)}>
            Closed
          </Button>
        </div>

        {todoList
          .filter((item) => item.isCompleted === filterTodos)
          .map((item) => (
            <Todos
              handleIsCompletedToggle={handleIsCompletedToggle}
              key={item._id}
              todoList={item}
            />
          ))}

        {existsTask && <NoTasks> No tasks</NoTasks>}
      </DashboardContainer>

      <FooterContainer>
        <footer>Developed by Outboxup</footer>
      </FooterContainer>
    </>
  );
}
