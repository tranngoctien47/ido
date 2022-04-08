import styled from "styled-components";

export const Section = styled.section`
background: url(${(props) => props.bg});
    background-size: 100% 100%;
    background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  padding: 50px 0;
 
`;
export const ContainerStyled = styled.div`
  margin-left: auto;
  margin-right: auto;
  max-width: 1200px;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
`;
export const Warraper = styled.div`
    display: flex;
    align-items: start;
    
`;
export const WarraperAddress = styled.div`
    display: flex;
    justify-content: space-between;
    flex: 1.1;
    gap: 25px;
    @media (max-width: 991px) {
       flex-direction:column;
       >img{
           max-width:300px;
           width:100%;
       }
      }
  
`;

export const WarraperLink = styled.div`
    flex:1;
    display: flex;
    justify-content: space-evenly;
    @media (max-width: 991px) {
        flex-direction:column;
        align-items: center;
        gap:25px;
       }
`;

export const Address = styled.div`
  color:white;
  >span{
    font-weight: 700;
    font-size: 18px;
}
>p{
    margin-top: 20px;
    margin-bottom: 0;
    color: hsla(0,0%,100%,0.7);
}
`;

export const Context = styled.div`
    color:white;
    >span{
        font-weight: 700;
        font-size: 18px;
    }
    &:nth-child(1){
        text-align:end;
    }
    @media (max-width: 991px) {
        text-align:center;
       }
  

`;
export const Link = styled.div`
    color: hsla(0,0%,100%,0.7);
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    cursor: pointer;
    @media (max-width: 991px) {
        text-align:center;
       }

`;

export const LinkImg = styled.div`
    display: grid;
    grid-template-columns: repeat(3,1fr);
    margin-top: 20px;
    gap:20px;
    >img{
        cursor: pointer;
        max-width:38px;
        width:100%;
    }
    @media (max-width: 991px) {
        text-align:center;
        gap:5px;
       }

`;

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



