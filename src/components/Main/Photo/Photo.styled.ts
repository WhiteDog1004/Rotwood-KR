import { motion } from "framer-motion";
import styled from "styled-components";

export const PhotoContainer = styled.div`
  background-color: #000;
`;
export const PhotoSection = styled.div``;
export const StickyBox = styled.div`
  position: sticky;
  gap: 60px;
  top: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  z-index: 1;
`;
export const StickyTitle = styled.h1`
  font-size: 48px;
  width: 100%;
  text-align: center;
  color: #fff;
`;
export const MonsterWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  overflow: hidden;
`;
const MonsterImgBox = styled.div`
  position: absolute;
  width: 540px;
  height: 540px;
  opacity: 0.3;

  img {
    width: 100%;
    height: 100%;
  }
`;
export const SwarmyImgBox = styled(MonsterImgBox)`
  right: -100px;
  bottom: -100px;
`;
export const SlowpokeImgBox = styled(MonsterImgBox)`
  top: 0;
  left: -50px;
`;
export const Carousel = styled(motion.div)`
  display: flex;
  gap: 48px;
`;
export const CarouselSlide = styled(motion.div)`
  position: relative;
  width: 600px;
  height: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 400px;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;
