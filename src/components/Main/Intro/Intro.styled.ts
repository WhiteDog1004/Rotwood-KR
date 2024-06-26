import styled from "styled-components";

export const IntroContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: max-content;
  min-height: 500px;
  overflow: hidden;

  background-color: #000;
  color: white;
`;
export const IntroTitleBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const IntroLogo = styled.div`
  padding: 0 20px;
  transform: scale(0.8);
  z-index: 1;

  img {
    width: 100%;
    height: 100%;
  }
`;
export const IntroBackground = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.3;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
export const IntroCharBox = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 200px;
  width: 100%;
  height: max-content;

  @media (max-width: 768px) {
    gap: 40px;
  }

  img {
    width: 100%;
    max-width: 500px;
    height: 100%;
  }
`;
export const IntroLeftCharBox = styled.div`
  animation: upDownLeft 3.5s infinite ease-in-out;

  @keyframes upDownLeft {
    0%,
    100% {
      transform: translateY(0);
    }

    50% {
      transform: translateY(-10px);
    }
  }
`;

export const IntroRightCharBox = styled.div`
  animation: upDownRight 3.5s infinite ease-in-out;

  @keyframes upDownRight {
    0%,
    100% {
      transform: translateY(-10px);
    }

    50% {
      transform: translateY(0);
    }
  }
`;

export const IntroContentBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  text-align: center;
  z-index: 1;
  font-size: 42px;

  & b {
    color: #ffa500;
  }

  & .content {
    font-size: 24px;
    color: #999;
  }

  @media (max-width: 768px) {
    font-size: 24px;

    & .content {
      font-size: 18px;
    }
  }
`;
export const IntroContent = styled.span``;
export const IntroArrowDownBox = styled.div`
  position: absolute;
  bottom: 16px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.5;

  & img {
    animation: arrowDown 2s infinite ease-in-out;

    @keyframes arrowDown {
      0%,
      100% {
        transform: translateY(0);
        opacity: 1;
      }
      50% {
        transform: translateY(15px);
        opacity: 0;
      }
    }
  }
`;
