import styled from "styled-components";

export const TranslationContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 500px;
  background-color: #000;
  overflow: hidden;
`;
export const TranslationWrapper = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  min-height: 500px;
`;
export const FlittImgBox = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 400px;
  height: 302px;
  z-index: 1;
  pointer-events: none;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
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

  & b {
    color: #db4455;
  }

  @media (max-width: 768px) {
    font-size: 18px;
    line-height: 24px;
  }
`;
export const DownloadButton = styled.button`
  width: max-content;
  height: max-content;
  background-color: transparent;
  color: #ffffff;
  border: 0;
  font-size: 24px;

  background-image: url("/download_button.png");
  background-size: 128px 64px;
  background-repeat: no-repeat;
  background-position: center;
  margin-top: 10px;
  padding: 16px;
  object-fit: cover;

  cursor: pointer;

  &:hover {
    background-image: url("/download_button_hover.png");
  }
`;
export const DownloadDateText = styled.span`
  font-size: 14px;
  font-weight: 600;
  opacity: 0.3;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;
