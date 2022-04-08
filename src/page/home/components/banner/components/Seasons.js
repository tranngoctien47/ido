import React from "react";
import { listImg } from "./Data";
import bgSeason from "asset/img/bgseason.png";

import {
  ColStyled,
  ColStyledImg,
  Image,
  RowStyled,
  Section,
  Text,
  Title,
} from "./Season.Styled";
import { Box } from "@mui/material";
import { Parallax } from "react-scroll-parallax";

export default function Seasons() {
  return (
    <>
      <Parallax opacity={[0.1, 1]}>
        <Section src={bgSeason}>
          <RowStyled>
            <ColStyled md={12} lg={6}>
              <Title> 4 Gods represent 4 seasons </Title>
              <Text>
                Held competitions to choose from 12 beasts with intelligence,
                strength, strategy, flexibility and skills who represent 12
                months of the year.
              </Text>
              <Text>
                Besides, there will be a God who organizes a kingship contest to
                help equalize and balance all species every 3 months.
              </Text>
            </ColStyled>
            <ColStyledImg md={12} lg={6}>
              {listImg?.map((e, i) => (
                <Box key={i}>
                  <Image src={e?.img} />
                </Box>
              ))}
            </ColStyledImg>
          </RowStyled>
        </Section>
      </Parallax>
    </>
  );
}
