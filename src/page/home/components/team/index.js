import bgTeam from "asset/svg/team.svg";
import {
  ContainerStyled,
  Section,
  Title,
  Warraper,

  WarraperContextTop,
  WarraperMoblie,
  WarraperTitle,
} from "./team.styled";
import { ListTeam } from "./data";

export default function Team() {
  return (
    <>
      <Section>
        <ContainerStyled>
          <Warraper>
            <WarraperTitle>
              <p>WAR BEASTS</p>
              <h2>Team & Advisors</h2>
            </WarraperTitle>


            <WarraperMoblie>
              {ListTeam?.map((e, i) => (
                <WarraperContextTop
                  bg={bgTeam}
                  data-aos="fade-up"
                  data-aos-offset="30"
                  key={i}
                >
                  <img src={e?.avarat} />
                  <Title>
                    <span>{e?.title}</span>
                    <p>{e?.des}</p>
                  </Title>
                </WarraperContextTop>
              ))}
            </WarraperMoblie>
          </Warraper>
        </ContainerStyled>
      </Section>
    </>
  );
}
