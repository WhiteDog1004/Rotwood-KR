import { Accordion } from "@szhsin/react-accordion";
import Image from "next/image";
import { AccordionItem, ContentText, FaqBox, FaqContainer } from "./Faq.styled";

export const Faq = () => {
  return (
    <FaqContainer>
      <FaqBox>
        <Accordion transition transitionTimeout={250}>
          <AccordionItem header="설치했는데 어떻게 적용하나요?">
            <Image
              src={"/how2use_01.png"}
              alt={"how2use_01"}
              width={472}
              height={292}
            />
            <br />
            <ContentText>
              한글패치를 다운로드 하셨다면, 우선 랏우드 폴더에 이동하셔야
              합니다.
              <br />
              <br />
              스팀 라이브러리에서 <b>게임 오른쪽 클릭</b> - <b>관리</b> -{" "}
              <b>로컬 파일 탐색</b>
              순으로 들어갑니다
            </ContentText>
            <br />
            <Image
              src={"/how2use_02.png"}
              alt={"how2use_02"}
              width={500}
              height={269}
            />
            <br />
            <ContentText>
              로컬 파일 탐색을 누르면 폴더 하나가 열립니다.
              <br />
              <br />
              다운로드 받은 <b>zip파일</b>을 <b>압축풀지 마시고</b> 열린 폴더에
              위 사진 처럼 <b>덮어쓰기</b>하시면 한글패치가 완료됩니다.
              <br />
              <br />
              한글이 적용되지 않았다면 <b>게임내 옵션</b>에서 <b>언어</b>를
              확인해 보세요.
            </ContentText>
          </AccordionItem>

          <AccordionItem header="Unable to initialize the game. See에러가 발생해요.">
            <Image src={"/error.jpg"} alt={"error"} width={386} height={217} />
            <ContentText>
              게임 업데이트 또는 재설치 시, 한글패치 파일이 없어 발생하는
              에러입니다.
              <br />
              <br />
              한글패치 파일을 다시 적용시키면 에러가 해결됩니다.
            </ContentText>
          </AccordionItem>
        </Accordion>
      </FaqBox>
    </FaqContainer>
  );
};
