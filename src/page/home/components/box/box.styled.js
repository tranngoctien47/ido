import { ContainerStyleds } from "components/styles/Layout.Styled";
import styled from "styled-components";

export const Section = styled.section`
  background: url(${(props) => props.src});
  background-size: 100% 100%;
  background-repeat: no-repeat;
  height: 100%;
  width: 100vw;
  padding-top:100px;
  @media (max-width: 991px) {
    padding: 100px 0;
    height: 100%;
  }
`;
export const ContainerStyled = styled(ContainerStyleds)`
    flex-direction:column;

    @media (max-width: 991px) {
    gap:20px;
}
`;
export const BoxTop = styled.div`
    background: url(${(props) => props.src});
    position: relative;
    background-size:100% 100%;
    width:100%;
    display:flex;
    flex-direction:column;
    align-items:center;
    padding:50px;
    gap:20px;
    @media (max-width: 800px) {
        background-size:cover;
    }

}
`;

export const BoxTopTitle = styled.h3`
    font-weight: 400;
    color:#fff;
    @media (max-width: 991px) {
        font-size:24px;
      }
}
`;
export const BoxTopImg = styled.img`
    max-width:400px;
    max-height:380px;
    width:100%;
    height:100%;
}
`;

export const BoxContent = styled.div`
   display:flex;
   align-items:center;
   width:100%;
   @media (max-width: 991px) {
    flex-direction:column;
    gap:50px;
  }
}
`;

export const BoxContentTop = styled.div`
    flex:1;
    text-align:center;
    img{
        max-width: 420px;
        max-height: 500px;
        width:100%;
        height:100%;
    }
}
`;

export const BoxContentItem = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    gap:30px;
}
`;
export const BoxContentList = styled.div`
    display:flex;
    flex-direction:column;
}
`;
export const Title = styled.h2`
    padding:5px 40px;
    color:white;
    font-weight:700;
    @media (max-width: 991px) {
        font-size:26px;
        padding:0;
    }
}
`;
export const Item = styled.div`
    background: ${(props) => props.bg};
    max-width:400px;
    padding: 10px 0 5px 40px;
    @media (max-width: 991px) {
      
        padding:10px 0;
    }
}
`;
export const Text = styled.span`
    // background: ${(props) => props.bg}
    color:${(props) => props.color};
    font-family: 'IBM Plex Sans';
  
}
`;