import { Col, Row } from "react-bootstrap";
import styled from "styled-components";
import 'asset/scss/style.scss';

export const Section = styled.div`
  // background: url(${(props) => props.src});
  // background-size: 100% 100%;
  background: ${(props) => props.theme.primary};
  border-radius: 20px;
  filter: drop-shadow(0px 6px 10px rgba(0, 194, 242, 0.5));
  width: 98%;
  max-width: 1100px;
  height: auto;
  padding: 20px;
  position: absolute;
  bottom: -230px;
  left: 50%;
  transform: translatex(-50%);
  @media (max-width: 991px) {
    width: 100%;
    position: static;
    transform: translatex(0);
    padding: 20px;
  }
`;

export const RowStyled = styled(Row)
  `
  align-items: center;
`;

export const ColStyled = styled(Col)
  `
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 10px 0 10px 40px;
  @media (max-width: 1010px) {
    padding:0;
  }
`;
export const ColStyledImg = styled(Col)
  `
  display: grid;
  grid-template-columns:repeat(2,1fr);
  text-align: end;
  height: 100%;
  margin-bottom: -15px;
  @media (max-width: 1010px) {
    text-align: center;
  }
`;

export const Title = styled.h2`
  color: #fff;
  font-family: "IBM Plex Sans";
  font-weight: 400;
 
  @media (max-width: 1010px) {
    text-align: center;
  }
`;

export const Text = styled.p`
  color: #fff;
  font-weight: 400;
  @media (max-width: 1010px) {
    text-align: center;
  }
`;
export const Image = styled.img``;

//material ui
// export const Box = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(2,1fr)'
// }