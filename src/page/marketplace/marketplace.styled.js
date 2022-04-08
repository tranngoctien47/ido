import { Box } from "@mui/material";
import { Col, Container, Row } from "react-bootstrap";
import styled from "styled-components";

export const Section = styled.section`
  background: url(${(props) => props.src});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100%;
  width: 100vw;
  position:relative;
  padding-top: 100px;
  @media (max-width: 1000px) {
    background-size: cover;
  }
 
`;
export const ContainerStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
  margin-bottom:50px;
`;

export const WarrperHeader = styled.div`
  display:flex;
  align-items:center;
  @media (max-width: 568px) {
    flex-direction: column;
    gap: 30px;
  }
`;
export const Context = styled.div`
    background:${(props) => props.bg};
    color:white;
    display:flex;
    align-items:center;
    justify-content: center;
    flex-direction: column;
    max-width:370px;
    width: 100%;
    height: 80px;
    >p{
        margin-bottom:0;
        color: hsla(0,0%,100%,0.7);
    }
    >span{
        font-weight:bold;
    }
`;






