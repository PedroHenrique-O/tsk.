import styled from "styled-components";

type TaskProps = {
  isComplete: boolean;
};

export const Tasks = styled.div<TaskProps>`
  background: var(--taskBackground-primary);
  width: 100%;
  min-height: 276px;
  height: auto;
  border-radius: 20px;
  padding-top: 20px;
  margin-bottom: 20px;
  @media screen and (max-width: 720px) {
    padding-top: 10px;
    min-height: auto;
  }
  &:last-child {
    margin-bottom: 0px;
  }

  .taskTitleWrapp {
    display: flex;
    justify-content: space-between;

    .taskTitle {
      gap: 20px;
      display: flex;
      align-items: center;
      margin: 0 20px 20px;
      font-weight: 600;
      font-size: 16px;
      line-height: 19.36px;
      justify-content: space-between;

      @media screen and (max-width: 720px) {
        margin: 0 20px 10px;
      }
    }

    svg {
      color: var(--purple);
      margin-right: 20px;

      @media screen and (max-width: 720px) {
        margin: 0 13px 16px;
      }
    }

    .titleCircle {
      width: 30px;
      height: 30px;
      background: ${({ isComplete }) =>
        isComplete ? "#ac6dde" : "transparent"};
      cursor: pointer;

      border: 3px solid #ac6dde;
      border-radius: 20px;
      @media screen and (max-width: 720px) {
        width: 20px;
        height: 20px;
      }
    }
  }

  section {
    background: var(--taskBackground-secondary);
    width: 100%;
    min-height: 147px;

    height: auto;
    padding: 20px;
  }
  .createdAtWrapp {
    font-weight: 300;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 20px;
    @media screen and (max-width: 720px) {
      padding: 10px;
    }
  }
`;
export const FooterContainer = styled.div`
  display: flex;
  align-items: end;
  justify-content: center;
  width: 100%;
  height: 39px;
  margin-top: 177px;
  border-top: 1px solid #414052;
  margin-bottom: 20px;

  @media screen and (max-width: 720px) {
    margin-bottom: 25px;
  }
`;
