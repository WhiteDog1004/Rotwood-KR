import Image from "next/image";
import {
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
					<Image
						src={"/logo.png"}
						alt={"logo"}
						width={550}
						height={295}
					/>
				</IntroLogo>
				<IntroContentBox>
					<IntroContent>Content Text</IntroContent>
					<IntroContent>Content Text</IntroContent>
					<IntroContent>Content Text</IntroContent>
					<IntroContent>Content Text</IntroContent>
				</IntroContentBox>
			</IntroTitleBox>
			<IntroBackground>
				<Image src="/title.png" alt="bg_intro" fill priority />
			</IntroBackground>
			<IntroCharBox>
				<IntroLeftCharBox>
					<Image
						src="/duo.png"
						alt="left_char"
						width={500}
						height={500}
					/>
				</IntroLeftCharBox>
				<IntroRightCharBox>
					<Image
						src="/solo.png"
						alt="right_char"
						width={500}
						height={500}
					/>
				</IntroRightCharBox>
			</IntroCharBox>
		</IntroContainer>
	);
};
