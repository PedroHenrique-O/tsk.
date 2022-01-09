import { darken } from "polished";
import styled from "styled-components";

type ModalContainerProps = {
  isModalOpen: boolean;
};

export const ModalContainer = styled.div<ModalContainerProps>`
  position: fixed;
  z-index: auto;
  display: ${({ isModalOpen }) => (isModalOpen ? "flex" : "none")};
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.9);

  @media screen and (max-width: 720px) {
    padding: 16px;
  }
`;

export const ModalContent = styled.div`
  width: 576px;
  height: 597px;
  border-radius: 20px;
  background: var(--taskBackground-secondary);
  padding: 60px 48px;
  position: relative;

  @media screen and (max-width: 720px) {
    padding-left: 29px;
    padding-right: 29px;
  }

  svg {
    width: 25px;
    height: 25px;
    position: absolute;
    top: 15px;
    right: 15px;
    &:hover {
      color: var(--purple);
    }
  }

  h1 {
    font-size: 26px;
    font-weight: bold;
    line-height: 31.47px;
    margin-bottom: 44px;
  }
  textarea,
  input {
    border-radius: 20px;
    background: #272733;
    border: 0;
    margin-bottom: 20px;
    color: #777777;
    font-size: 16px;
    line-height: 19.36px;
    font-weight: 400;
    padding-left: 24px;
  }
  input {
    width: 100%;
    height: 64px;
  }
  textarea {
    width: 100%;
    height: 234px;
    padding: 20px;
    @media screen and (max-width: 720px) {
      margin-bottom: 38px;
    }
  }

  .saveButtonWrapp {
    display: flex;
    justify-content: center;

    button {
      font-family: "Poppins";
      line-height: 24px;
      width: 100%;
      height: 64px;
      @media screen and (max-width: 720px) {
        width: 187.61px;
      }

      &:hover {
        background: ${darken("0.04", "rgb(172, 109, 222)")};
        transition: background-color 0.2s ease-in;
      }
    }
  }
`;
