
import {
  ComingSoon,
  ContainerStyled,
  Download,
  DownloadImg,
  Image,
  RowStyled,
  Section,
  Text,
  Title,
  ColStyled,
  ColStyledRight,
  BoxImg,
} from "./Banner.Styled";

import bgBanner from "asset/img/banner.jpg";
import Img from "asset/svg/ho.svg";
import Iso from "asset/svg/ios.svg";
import Android from "asset/svg/android.svg";
import Seasons from "./components/Seasons";
import { useSpring, animated } from "react-spring";

function Banner() {
  const TextTitle = useSpring({
    to: { opacity: 1, transform: "translateY(0)" },
    from: { opacity: 0, transform: "translateY(200px)" },
    delay: 100,
  });
  const TextDes = useSpring({
    to: { opacity: 1, transform: "translateY(0)" },
    from: { opacity: 0, transform: "translateY(200px)" },
    delay: 300,
  });
  const download = useSpring({
    to: { opacity: 1, transform: "translateY(0)" },
    from: { opacity: 0, transform: "translateY(200px)" },
    delay: 500,
  });
  const ImageMain = useSpring({
    to: { opacity: 1, transform: "translateY(0)" },
    from: { opacity: 0, transform: "translateY(200px)" },
    delay: 600,
  });
  return (
    <>
      <Section src={`${bgBanner}`}>
        <ContainerStyled>
          <RowStyled>
            <ColStyled md={6} lg={6}>
              <Title>
                <animated.div style={TextTitle}><h1>WAR BEASTS</h1></animated.div>
              </Title>
              <animated.div style={TextTitle}>
                <Text>
                  War beasts, in the event of the enlightenment between heaven, Earth and the ancient gods, Warbeasts exist. The earthly orders among animals were complicated, bloody wars occurred in all territories.
                </Text>
              </animated.div>



              <Download>
                <BoxImg>
                  <animated.div style={download}>
                    <DownloadImg src={Iso} />
                    <DownloadImg src={Android} />{" "}
                  </animated.div>
                </BoxImg>
                <ComingSoon> COMING SOON </ComingSoon>
              </Download>
            </ColStyled>
            <ColStyledRight md={6} lg={6}>
              <animated.div style={ImageMain}>
                <Image src={Img} />
              </animated.div>
            </ColStyledRight>
          </RowStyled>
          <Seasons />
        </ContainerStyled>
      </Section>
    </>
  );
}

export default Banner;
