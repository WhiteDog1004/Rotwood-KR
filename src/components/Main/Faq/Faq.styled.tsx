import { AccordionItem as Item } from "@szhsin/react-accordion";
import Image from "next/image";
import styled from "styled-components";

export const FaqContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: max-content;
  background-color: #000;
  overflow: hidden;
  padding: 64px;
`;

export const FaqBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 860px;
  padding: 16px;
`;

export const ItemWithChevron = ({ header, ...rest }: any) => (
  <Item
    {...rest}
    header={
      <>
        {header}
        <Image
          className="chevron-down"
          src={"/chevron-down.svg"}
          alt="Chevron Down"
          width={24}
          height={24}
        />
      </>
    }
  />
);

export const AccordionItem = styled(ItemWithChevron)`
  position: relative;
  border-bottom: 1px solid #ccc;
  .szh-accordion__item {
    &-btn {
      cursor: pointer;
      display: flex;
      align-items: center;
      width: 100%;
      margin: 0;
      padding: 1rem;
      font-family: "BMHANNAAir";
      font-size: 24px;
      font-weight: 400;
      text-align: left;
      color: #fff;
      background-color: transparent;
      border: none;
      &:hover {
        background-color: #666;
      }
    }

    &-content {
      font-size: 18px;
      color: #fff;
      transition: height 0.25s cubic-bezier(0, 0, 0, 1);

      img {
        transform: scale(0.7);
      }
    }

    &-panel {
      display: flex;
      flex-direction: column;
      padding: 1rem;

      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
  }

  .chevron-down {
    margin-left: auto;
    transition: transform 0.25s cubic-bezier(0, 0, 0, 1);
  }

  &.szh-accordion__item--expanded {
    .szh-accordion__item-btn {
      background-color: #222;
    }
    .chevron-down {
      transform: rotate(180deg);
    }
  }
`;

export const ContentText = styled.span`
  padding-top: 20px;
  padding-bottom: 20px;

  & b {
    color: #db4455;
  }
`;
