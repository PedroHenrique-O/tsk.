import styled from "styled-components";
import { AiOutlineBars } from "react-icons/ai";

export const HeaderContainer = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 60px;
  margin-bottom: 60px;
  width: 100%;
  height: 48px;

  @media screen and (max-width: 720px) {
    margin-top: 45px;
  }

  button {
    @media screen and (max-width: 720px) {
      width: 163px;
      height: 48px;
      font-weight: 600;
    }
  }

  .navWrapper {
    display: flex;
    align-items: center;
    gap: 20px;

    span {
      font-weight: 600;
      font-size: 26px;
      line-height: 31.47px;
    }

    .NavIconBackground {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 48px;
      height: 48px;
      border-radius: 50%;
      background: var(--purple);
      @media screen and (max-width: 720px) {
        width: 40px;
        height: 40px;
      }
    }
  }
`;

export const NavIcon = styled(AiOutlineBars)`
  width: 24px;
  height: 24px;
  color: white;
`;
