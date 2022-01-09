import { Button } from "../Button/styled";
import { HeaderContainer, NavIcon } from "./styled";

interface NavProps {
  handleToggleNewTodoModal: () => void;
}

export function Nav({ handleToggleNewTodoModal }: NavProps) {
  return (
    <HeaderContainer>
      <div className="navWrapper">
        <span className="NavIconBackground">
          <NavIcon />
        </span>
        <span>tsk. </span>
      </div>

      <Button onClick={handleToggleNewTodoModal}>New Task</Button>
    </HeaderContainer>
  );
}
