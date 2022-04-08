import { ContainerStyleds } from "components/styles/Layout.Styled";
import styled from "styled-components";

export const Section = styled.section `
  background: url(${(props) => props.src});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100%;
  width: 100vw;
  padding-top: 300px;
  padding-bottom: 100px;
  @media (max-width: 991px) {
    padding: 100px 0;
    height: 100%;
    background-size: cover;
  }
`;

export const ContainerStyled = styled(ContainerStyleds)
`
  flex-direction: column;
  gap: 40px;
  > h2 {
    color: white;
    font-weight: 700;
  }
  @media (max-width: 991px) {
    gap: 20px;
  }
`;

export const Content = styled.div `
  display: flex;
  justify-content: center;
  width: 100%;
  gap: 40px;
  @media (max-width: 991px) {
    flex-direction: column;
  }
`;
export const TitleContent = styled.img `
  color: #fff;
  text-align: center;
  color: linear-gradient(180deg, #ff1d52 0%, #ff9d00 100%);
`;

export const Item = styled.div `
  color: #fff;
  flex: 1;
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 20px;
  @media (max-width: 991px) {
    width: 100%;
  }
`;
export const Text = styled.div `
  color: #fff;
  flex: 1;
  display: flex;
  flex-direction: column;

  max-width: ${(props) => (props.w == true ? "420px" : "")};
  width: ${(props) => (props.w == true ? "100%" : "")};
  margin-top: ${(props) => (props.w == true ? "20px" : "")};

  @media (max-width: 991px) {
    width: 100%;
    max-width: 500px;
  }
`;
export const TextItem = styled.p `
  color: ${(props) => props.color};
  margin-bottom: 0;
  width: 100%;
  text-align: start;
  font-weight: 400;
  padding: ${(props) => (props.pd == true ? "5px 0" : "10px 0")};

  font-style: ${(props) => (props.fontStyle == true ? "italic" : "")};
  &:nth-child(odd) {
    background: ${(props) =>
      props.bg == true
        ? " linear-gradient(90deg, rgba(0, 194, 242, 0) 1.1%, #0576F6 51.22%, rgba(3, 68, 255, 0) 96.37%);"
        : ""};
  }
`;
export const TextP2P = styled.p `
  color: ${(props) => props.color};
  margin-bottom: 0;
  width: 100%;
  max-width: 500px;
  margin-top: 30px;
  padding: 5px;
  font-style: italic;
  font-weight: 400;
`;
export const TitleFood = styled.h3 `
  color: #fff;
`;

export const TextStatic = styled.p `
    color: #fff;
    font - style: italic
  `;