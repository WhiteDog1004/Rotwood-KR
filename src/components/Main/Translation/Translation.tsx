import Image from "next/image";
import {
  FlittImgBox,
  HowToApplyButton,
  Span,
  TextImgBox,
  TranslationContainer,
} from "./Translation.styled";

export const Translation = () => {
  return (
    <TranslationContainer>
      <FlittImgBox>
        <Image src={"/Flitt4.png"} alt={"flitt"} fill />
      </FlittImgBox>
      <TextImgBox>
        <Image src={"/speech.png"} alt={"text"} fill />
        <Span>
          한글패치 파일을 다운로드 하긴 했는데... 방법을 모르겠어..
          <br />
          어떻게 하는거지?
        </Span>
        <HowToApplyButton>적용하는 방법이 궁금하다면?</HowToApplyButton>
      </TextImgBox>
    </TranslationContainer>
  );
};
