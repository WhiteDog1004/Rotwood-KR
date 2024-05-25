import Image from "next/image";
import Link from "next/link";
import {
  DownloadButton,
  DownloadDateText,
  FlittImgBox,
  Span,
  TextImgBox,
  TranslationContainer,
} from "./Translation.styled";

export const Translation = () => {
  return (
    <TranslationContainer>
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
              href="/files/data_scripts.zip"
              target="_blank"
              download
              style={{ width: "max-content" }}
            >
              <DownloadButton>다운로드</DownloadButton>
            </Link>
            <DownloadDateText>최신 한글패치 업데이트 24/05/26</DownloadDateText>
          </div>
        </Span>
      </TextImgBox>
    </TranslationContainer>
  );
};
