import styled from "styled-components";

export const TranslationContainer = styled.div`
  position: relative;
  width: 100%;
  height: 500px;
  background-color: #000;
  overflow: hidden;
`;
export const FlittImgBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 400px;
  height: 302px;
  z-index: 1;
`;
export const TextImgBox = styled.div`
  position: relative;
  top: 40%;
  left: 50%;
  width: 100%;
  max-width: 1000px;
  height: 232px;
  transform: translate(-50%, -50%);

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform: scaleX(-1);
  }
`;
export const Span = styled.span`
  position: absolute;
  top: calc(50% - 16px);
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 0 32px;
  font-size: 24px;
  line-height: 32px;
  z-index: 1;
  text-align: center;
  white-space: pre-wrap;
`;
export const HowToApplyButton = styled.button`
  position: absolute;
  right: 32px;
  bottom: 46px;

  color: #888;
  background-color: transparent;
  border: 0;
  z-index: 2;
  cursor: pointer;
`;
