import styled from "styled-components";

type DashboardContainerProps = {
  filterTodos: boolean;
};

export const DashboardContainer = styled.div<DashboardContainerProps>`
  h1 {
    font-weight: 600;
    font-size: 42px;
    line-height: 50.83px;
  }

  .buttonsWrapp {
    display: flex;
    gap: 20px;
    margin-top: 60px;
    margin-bottom: 60px;

    .todoBtn {
      background: ${({ filterTodos }) =>
        filterTodos ? "#414052" : "transparent"};
      border-style: solid;
      border-color: ${({ filterTodos }) =>
        filterTodos ? "#181820" : "#414052"};
      border-width: 1px;
    }

    .closedBtn {
      background: ${({ filterTodos }) =>
        filterTodos ? "transparent" : "#414052"};
      border-style: solid;
      border-color: ${({ filterTodos }) =>
        filterTodos ? "#414052" : "#181820"};
      border-width: 1px;
    }
    @media screen and (max-width: 720px) {
      margin-top: 27px;
      margin-bottom: 37px;
    }
  }
`;

export const NoTasks = styled.p`
  color: var(--purple);
  font-size: 26px;
  font-weight: 600;
  line-height: 31.47%;
  margin-bottom: 276px;
`;
