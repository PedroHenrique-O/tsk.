/* eslint-disable @typescript-eslint/no-unused-vars */
import { Tasks } from "./styled";
import { BsThreeDots } from "react-icons/bs";
import { TodosProps as Todo } from "../Types/TodosProps";

interface TodosProps {
  todoList: Todo;
  handleIsCompletedToggle: (_id: string) => void;
}

export function Todos({ todoList, handleIsCompletedToggle }: TodosProps) {
  return (
    <>
      <Tasks isComplete={todoList.isCompleted}>
        <div className="taskTitleWrapp">
          <div className="taskTitle">
            <span
              className="titleCircle"
              onClick={() => handleIsCompletedToggle(todoList._id)}
            />
            {todoList.title}
          </div>

          <span>
            <BsThreeDots />
          </span>
        </div>

        <section>{todoList.description}</section>

        <div className="createdAtWrapp">{todoList.createdAt}</div>
      </Tasks>
    </>
  );
}
