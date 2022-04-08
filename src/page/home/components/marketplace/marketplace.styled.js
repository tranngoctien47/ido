import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Section = styled.section`
  background: ${(props) => props.src};
  height: 100%;
  width: 100%;
  padding: 100px 0;
  @media (max-width: 991px) {
    padding: 100px 0;
    height: 100%;
    // background-size: cover;
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
`;

export const SectionHeader = styled.div`
  display: flex;
  padding: 0 25px;
  @media (max-width: 576px) {
    flex-direction: column;
    align-items: center;
    gap: 40px;
  }
`;
export const SectionMarketplace = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
 
`;
export const SectionHeaderLeft = styled.div`
  flex: 1;
  > h2 {
    color: #fff;
    font-weight: 700;
  }
  > p {
    color: hsla(0, 0%, 100%, 0.7);
    margin-bottom: 0;
    font-weight: 400;
  }
  @media (max-width: 991px) {
    text-align: center;
  }
`;
export const SectionHeaderRight = styled(NavLink)`
  flex: 1;
  display: flex;
  align-items: end;
  justify-content: end;
  text-decoration:none;
  &:hover{
    text-decoration:none;
    
  }
  > button {
    width: 180px;
    height: 40px;
    background: linear-gradient(90deg, #af590b 0%, #fb7700 104.55%);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 9px;
    color: #fff;
    font-weight: 700;
    font-size: 20px;
    border: none;
    cursor: pointer;
  }
`;

export const SectionContext = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  row-gap: 40px;
  @media (max-width: 1000px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 20px;
  }
  @media (max-width: 576px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;
export const Context = styled.div`
  position: relative;
  background: url(${(props) => props.src});
  background-size: 100% 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  min-height: 300px;
  gap: 20px;
  cursor:pointer;

`;
export const ContextImg = styled.div`
  position: absolute;
  top: 20px;
`;
export const ContextMain = styled.div``;
export const ContextButton = styled.div`
  position: absolute;
  bottom: 5px;
  max-width: 150px;
  width: 100%;
`;
export const Button = styled.button`
  width: 100%;
  height: 40px;
  background: ${(props) => props.bg};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  border: none;
  border-radius: 10px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
`;