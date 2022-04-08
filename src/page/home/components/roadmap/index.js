import React from "react";
import {
  ContainerStyled,
  Section,
  Warraper,
  WarraperImg,
  WarraperTitle,
} from "./roadmap.styled";
import Roadmap from "asset/svg/roadmap.svg";
import Bg from "asset/img/gameplay.jpg";

export default function RoadMap() {
  return (
    <>
      <Section src={Bg}>
        <ContainerStyled>
          <Warraper>
            <p>WAR BEASTS</p>
            <WarraperTitle>ROADMAP</WarraperTitle>
            <WarraperImg data-aos="fade-up" data-aos-offset="30">
              <img src={Roadmap} />
            </WarraperImg>
          </Warraper>
        </ContainerStyled>
      </Section>
    </>
  );
}
