import Image from "next/image";
import Link from "next/link";
import {
  DownloadButton,
  DownloadDateText,
  FlittImgBox,
  Span,
  TextImgBox,
  TranslationContainer,
  TranslationWrapper,
} from "./Translation.styled";

export const Translation = () => {
  return (
    <TranslationContainer>
      <TranslationWrapper>
        <FlittImgBox>
          <Image src={"/Flitt1.png"} alt={"flitt"} fill />
        </FlittImgBox>
        <TextImgBox>
          <Image
            src={"/speech.png"}
            alt={"text"}
            fill
            style={{ transform: "scaleX(-1)" }}
          />
          <Span>
            이제 한글패치를 <b>다운로드</b>를 해볼까요? 다운로드 후 아래에
            있는&nbsp;
            <b>FAQ</b>를 <b>꼭</b> 확인해 주세요!
            <br />
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: 4,
              }}
            >
              <Link
                href="https://drive.google.com/file/d/1aj7vMl1C_6XvJZmpe6pzWJ5ePWhQyLxs/view?usp=sharing"
                target="_blank"
                download
                style={{ width: "max-content" }}
              >
                <DownloadButton>다운로드</DownloadButton>
              </Link>
              <DownloadDateText>
                최신 한글패치 업데이트 24/07/21
              </DownloadDateText>
            </div>
          </Span>
        </TextImgBox>
      </TranslationWrapper>
    </TranslationContainer>
  );
};
