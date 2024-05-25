import { MotionProps, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { throttle } from "throttle-debounce-ts";
import {
  Carousel,
  CarouselSlide,
  MonsterWrapper,
  PhotoContainer,
  PhotoSection,
  SlowpokeImgBox,
  StickyBox,
  StickyTitle,
  SwarmyImgBox,
} from "./Photo.styled";

function useElementViewportPosition(ref: React.RefObject<HTMLElement>) {
  const [position, setPosition] = useState<[number, number]>([0, 0]);

  useEffect(() => {
    if (!ref || !ref.current) return;

    const pageHeight = document.body.scrollHeight;
    const start = ref.current.offsetTop;
    const end = start + ref.current.offsetHeight;

    setPosition([start / pageHeight, end / pageHeight]);
  }, []);

  return { position };
}

const slideAnimation: MotionProps = {
  variants: {
    full: { backgroundColor: "#663399" },
    partial: { backgroundColor: "#666666" },
  },
  initial: "partial",
  whileInView: "full",
  viewport: { amount: 1, once: true },
};

export const Photo = () => {
  const ref = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const { position } = useElementViewportPosition(ref);
  const [carouselEndPosition, setCarouselEndPosition] = useState(0);
  const { scrollYProgress } = useScroll();
  const x = useTransform(scrollYProgress, position, [0, carouselEndPosition]);

  useEffect(() => {
    if (!carouselRef || !carouselRef.current) return;
    const parent = carouselRef.current.parentElement;
    const scrollbarWidth =
      window.innerWidth - document.documentElement.clientWidth;

    const resetCarouselEndPosition = () => {
      if (carouselRef && carouselRef.current) {
        const newPosition =
          carouselRef.current.clientWidth -
          window.innerWidth +
          scrollbarWidth +
          (parent as HTMLElement).offsetLeft * 2;

        setCarouselEndPosition(-newPosition);
      }
    };

    resetCarouselEndPosition();
    const handleResize = throttle(10, resetCarouselEndPosition);

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const data = [
    "/rotwood_kr_01.png",
    "/rotwood_kr_02.png",
    "/rotwood_kr_03.png",
    "/rotwood_kr_04.png",
  ];

  return (
    <PhotoContainer>
      <PhotoSection ref={ref}>
        <div
          className="container"
          style={{ position: "relative", height: "200vh" }}
        >
          <StickyBox>
            <StickyTitle>한글 적용 스크린샷</StickyTitle>
            <Carousel
              ref={carouselRef}
              style={{ x, paddingLeft: "20%", paddingRight: "20%" }}
            >
              {data.map((i, index) => (
                <CarouselSlide {...slideAnimation} key={index}>
                  <Image src={i} alt="i" fill />
                </CarouselSlide>
              ))}
            </Carousel>
          </StickyBox>

          <MonsterWrapper>
            <SlowpokeImgBox>
              <Image src={"/slowpoke.png"} alt="swarmy" fill />
            </SlowpokeImgBox>
            <SwarmyImgBox>
              <Image src={"/swarmy.png"} alt="swarmy" fill />
            </SwarmyImgBox>
          </MonsterWrapper>
        </div>
      </PhotoSection>
    </PhotoContainer>
  );
};
