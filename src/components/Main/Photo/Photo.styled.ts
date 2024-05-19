import { motion } from "framer-motion";
import styled from "styled-components";

export const PhotoContainer = styled.div``;
export const PhotoSection = styled.div``;
export const StickyBox = styled.div`
  position: sticky;
  top: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
`;

export const Carousel = styled(motion.div)`
  display: flex;
  gap: 48px;
`;
export const CarouselSlide = styled(motion.div)`
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 16px;
  overflow: hidden;

  img {
    object-fit: cover;
  }
`;
