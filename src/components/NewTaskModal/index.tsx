import { useState } from "react";
import { TodosProps } from "../Types/TodosProps";
import { Button } from "../Button/styled";
import { ModalContainer, ModalContent } from "./styles";
import { AiOutlineClose } from "react-icons/ai";
import { v4 } from "uuid";

interface NewTaskModalProps {
  isModalOpen: boolean;
  handleNewTodo: (todos: TodosProps) => void;
  handleToggleNewTodoModal: () => void;
}

export function NewTaskModal({
  isModalOpen,
  handleNewTodo,
  handleToggleNewTodoModal,
}: NewTaskModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const formattedTodo = {
    _id: v4(),
    title,
    description,
    isCompleted: false,
    createdAt: new Date().toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "numeric",
      minute: "2-digit",
    }),
  };

  const handleSendNewTodo = () => {
    handleToggleNewTodoModal();
    handleNewTodo(formattedTodo);
    setTitle("");
    setDescription("");
  };

  return (
    <ModalContainer isModalOpen={isModalOpen}>
      <ModalContent>
        <h1> New Task</h1>
        <span onClick={handleToggleNewTodoModal}>
          <AiOutlineClose />
        </span>

        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
        />
        <div className="saveButtonWrapp">
          <Button onClick={handleSendNewTodo}> Save </Button>
        </div>
      </ModalContent>
    </ModalContainer>
  );
}
