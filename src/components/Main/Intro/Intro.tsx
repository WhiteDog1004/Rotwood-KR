import Image from "next/image";
import {
  IntroArrowDownBox,
  IntroBackground,
  IntroCharBox,
  IntroContainer,
  IntroContent,
  IntroContentBox,
  IntroLeftCharBox,
  IntroLogo,
  IntroRightCharBox,
  IntroTitleBox,
} from "./Intro.styled";

export const Intro = () => {
  return (
    <IntroContainer>
      <IntroTitleBox>
        <IntroLogo>
          <Image src={"/logo.png"} alt={"logo"} width={550} height={295} />
        </IntroLogo>
        <IntroContentBox>
          <IntroContent>
            롯우드를 이제 <b>한글</b>로 즐겨보세요!
          </IntroContent>
          <IntroContent className="content">비공식 유저 한글패치</IntroContent>
        </IntroContentBox>
      </IntroTitleBox>
      <IntroBackground>
        <Image src="/title.png" alt="bg_intro" fill />
      </IntroBackground>
      <IntroCharBox>
        <IntroLeftCharBox>
          <Image src="/duo.png" alt="left_char" width={500} height={500} />
        </IntroLeftCharBox>
        <IntroRightCharBox>
          <Image src="/solo.png" alt="right_char" width={500} height={500} />
        </IntroRightCharBox>
      </IntroCharBox>
      <IntroArrowDownBox>
        <IntroContent>SCROLL DOWN</IntroContent>
        <Image
          src={"/arrow_down_double.svg"}
          alt={"arrow_down"}
          width={48}
          height={48}
        />
      </IntroArrowDownBox>
    </IntroContainer>
  );
};
