import styled from "styled-components";

export const Section = styled.section`
  background: #09016e;
  //   background-size: 100% 100%;
  //   background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  padding: 100px 0;
  margin-top:-1px;
  @media (max-width: 991px) {
    padding: 100px 0;
    height: 100%;
    // background-size: cover;
  }
`;
export const ContainerStyled = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
`;
export const Warraper = styled.div``;
export const WarraperTitle = styled.div`
  text-align: center;
  color: white;
  margin-bottom: 50px;

  > p {
    margin: 0;
  }
  > h2 {
    font-weight: 700;
  }
`;


export const WarraperMoblie = styled.div`
    grid-template-columns: repeat(5,1fr);
    grid-template-rows: repeat(2,1fr);

    justify-items: center;
    row-gap:50px;
    display:grid;
    @media (max-width:1050px){
      grid-template-columns: repeat(3,1fr);
    }
    @media (max-width: 768px) {
        grid-template-columns: repeat(2,1fr);
       }
       @media (max-width: 576px) {
        grid-template-columns: repeat(1,1fr);
       }

}
`;
export const WarraperContextTop = styled.div`
  background: url(${(props) => props.bg});
  background-size: 100% 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 260px;
  gap: 20px;
  &:nth-child(1){
    grid-column-start: 2;
    grid-column-end: 3;
  }
  &:nth-child(2){
    grid-column-start: 4;
    grid-column-end: 5;
  }
  &:nth-child(3){
    grid-column-start: 1;
    grid-column-end: 2;
  }
  &:nth-child(4){
    grid-column-start: 3;
    grid-column-end: 4;
  }
  &:nth-child(5){
    grid-column-start: 5;
    grid-column-end: 5;
  }
  @media (max-width:1050px){
 
    &:nth-child(1){
      grid-column-start: 1;
      grid-column-end: 2;
    }
    &:nth-child(2){
      grid-column-start: 2;
      grid-column-end: 3;
    }
    &:nth-child(3){
      grid-column-start: 3;
      grid-column-end: 4;
    }
    &:nth-child(4){
      grid-column-start: 1;
    grid-column-end: 2;
    }
    &:nth-child(5){
      grid-column-start: 2;
      grid-column-end: 3;
    }
    
  }
  @media (max-width:768px){
 
    &:nth-child(1){
      grid-column-start: 1;
      grid-column-end: 2;
    }
    &:nth-child(2){
      grid-column-start: 2;
      grid-column-end: 3;
    }
    &:nth-child(3){
      grid-column-start: 1;
      grid-column-end: 2;
    }
    &:nth-child(4){
      grid-column-start: 2;
    grid-column-end: 3;
    }
    &:nth-child(5){
      grid-column-start: 1;
      grid-column-end: 2;
    }
    
  }
  @media (max-width:576px){
 
    &:nth-child(1){
      grid-column-start: 1;
      grid-column-end: 2;
    }
    &:nth-child(2){
      grid-column-start: 1;
      grid-column-end: 2;
    }
    &:nth-child(3){
      grid-column-start: 1;
      grid-column-end: 2;
    }
    &:nth-child(4){
      grid-column-start: 1;
    grid-column-end: 2;
    }
    &:nth-child(5){
      grid-column-start: 1;
      grid-column-end: 2;
    }
    
  }
`;

export const WarraperContextBottom = styled.div`
  background: url(${(props) => props.bg});
  background-size: 100% 100%;
  justify-content: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 200px;
  height: 260px;
  gap: 20px;
`;

export const Title = styled.div`
  color: #fff;
  text-align: center;
  > span {
    color: #fb7700;
    font-weight: bold;
  }
`;