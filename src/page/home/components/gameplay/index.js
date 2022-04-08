import bgGamePlay from "asset/img/gameplay.jpg";
import {
  Section,
  TitleContent,
  Content,
  Item,
  ContainerStyled,
  Text,
  TextItem,
  TitleFood,
  TextP2P,
} from "./GamePlay.Styled";
import { listP2E, listP2P, listFood } from "./Data";
import P2P from "asset/svg/P2P.svg";
import P2E from "asset/svg/P2E.svg";
import { useState } from "react";

function GamePlay() {


  return (
    <Section src={bgGamePlay}>
      <ContainerStyled>
        <h2>GAME PLAY TO EARN </h2>
        <Content>
          <Item data-aos="fade-up" data-aos-offset="30">
            <TitleContent src={P2E} />
            <Text>
              {listP2E?.map((e, i) => (
                <TextItem bg={true} key={i}>
                  {e?.title}
                </TextItem>
              ))}
            </Text>
            <Text w={true}>
              <TitleFood>Food manufacture:</TitleFood>
              {listFood?.map((e, i) => (
                <TextItem
                  pd={true}
                  font={true}
                  key={i}
                  color={"hsla(0,0%,100%,.7)"}
                >
                  {e?.des}
                </TextItem>
              ))}
            </Text>
          </Item>
          <Item data-aos="fade-up" data-aos-offset="30">
            <TitleContent src={P2P} />
            <Text>
              {listP2P?.map((e, i) => (
                <TextItem bg={true} key={i}>
                  {e?.title}
                </TextItem>
              ))}
              <TextP2P color={"hsla(0,0%,100%,.7)"}>
                *Rent a stadium for each P2P match, the winning side's total bet
                cards will be deducted 5% and burned.
              </TextP2P>
            </Text>
          </Item>
        </Content>
      </ContainerStyled>
    </Section>
  );
}

export default GamePlay;
