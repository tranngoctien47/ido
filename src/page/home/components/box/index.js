import React from "react";
import bgBox from "asset/img/box.jpg";
import bgBoxTop from "asset/svg/bgboxtop.svg";
import boxtop from "asset/svg/boxtop.svg";

import box from "asset/svg/box.svg";
import { listBox } from "./Data";

import {
  BoxContent,
  BoxContentItem,
  BoxContentList,
  BoxContentTop,
  BoxTop,
  BoxTopImg,
  BoxTopTitle,
  ContainerStyled,
  Item,
  Section,
  Text,
  Title,
} from "./box.styled";

function Box() {
  return (
    <Section src={bgBox}>
      <ContainerStyled>
        <BoxTop src={bgBoxTop} data-aos="fade-up" data-aos-offset="30">
          <BoxTopTitle>The five five-element systems include</BoxTopTitle>
          <BoxTopImg src={boxtop} />
        </BoxTop>
        <BoxContent data-aos="fade-up" data-aos-offset="30">
          <BoxContentTop>
            <img src={box} />
          </BoxContentTop>
          <BoxContentItem>
            <Title>MYSTERIOUS BOX</Title>
            <BoxContentList>
              {listBox?.map((e, i) => (
                <Item bg={e?.bg} key={i}>
                  <Text key={i} color={"hsla(0,0%,100%,.7)"}>
                    {e?.des}
                  </Text>
                </Item>
              ))}
            </BoxContentList>
          </BoxContentItem>
        </BoxContent>
      </ContainerStyled>
    </Section>
  );
}

export default Box;
