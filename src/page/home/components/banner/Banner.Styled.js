import { Box } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

export const Section = styled.section`
  background: url(${(props) => props.src});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 800px;
  width: 100vw;
  position:relative;
  @media (max-width: 1000px) {
    background-size: cover;
    padding-top: 100px;
    height: 100%;
  }
 
`;
export const ContainerStyled = styled(Container)
  `
  width: 100%;
  height: 100%;
  position: relative;
  @media (max-width: 991px) {
    display:flex;
    flex-direction: column;
    gap:20px
  }
`;
export const RowStyled = styled(Row)
  `
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  @media (max-width: 991px) {
    flex-direction: column;
    gap:20px
  }
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 40px;
  }
`;

export const ColStyled = styled(Col)
  `
  display: flex;
  flex-direction: column;
  @media (max-width: 991px) {
    justify-content: end;
    align-items: center;
  }
`;
export const ColStyledRight = styled(Col)
  `
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Image = styled.img``;
export const Title = styled.h1`
  color: #fb7700;
  font-family: "IBM Plex Sans";
  font-weight: bold;
`;
export const Text = styled.p`
  color: #fff;
  font-weight: 400;
  @media (max-width: 991px) {
    text-align: center;
  }
`;
export const Download = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 302px;
`;
export const DownloadImg = styled.img`
  color: #fff;
  cursor:pointer;
`;
export const BoxImg = styled(Box)`
  @media (max-width: 991px) {
    text-align: center;
  }
`;
export const ComingSoon = styled.span`
  color: #fff;
  font-weight: 700;
`;
export const StyledButton = styled.button`
  background: linear-gradient(90deg, #fea73b 0%, #fb7700 104.55%);
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 16px;
  border: none;
  width: 200px;
  height: 50px;
  color: white;
  font-weight: bold;
`;