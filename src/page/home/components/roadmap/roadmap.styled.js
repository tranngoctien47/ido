import styled from "styled-components";

export const Section = styled.section `
  background: url(${(props) => props.src});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  padding: 100px 0;
  @media (max-width: 991px) {
    padding: 100px 0;
    height: 100%;
    background-size: cover;
  }
`;

export const ContainerStyled = styled.div `
margin-left: auto;
margin-right: auto;
max-width: 1200px;
padding-left: 15px;
padding-right: 15px;
width: 100%;
  }
`;
export const Warraper = styled.div `
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;
  >p{
      margin:0;
      color:#fff;
  }
  }
`;
export const WarraperTitle = styled.h2 `
  color:#fff;
  }
`;
export const WarraperImg = styled.div `
  margin-top:50px;
  }
`;