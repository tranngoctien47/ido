import React from "react";
import bgGamePlay from "asset/img/gameplay.jpg";
import {
  Button,
  ContainerStyled,
  Context,
  ContextButton,
  ContextImg,
  ContextMain,
  Section,
  SectionContext,
  SectionHeader,
  SectionHeaderLeft,
  SectionHeaderRight,
  SectionMarketplace,
} from "./marketplace.styled";
import Bg from "asset/svg/bgcart.svg";
import { listMarketPlace } from "./data";

function Marketplace(props) {
  const [page, setPage] = (props?.page ? '1' : '2')


  return (
    <>
      <Section src={props?.bg ? props?.bg : `url(${bgGamePlay})`}>
        <ContainerStyled>
          {page == "2" ?
            <>
              <SectionHeader>
                <SectionHeaderLeft>
                  <h2>NFT ITEMS</h2>
                  <p>
                    Free exchange and valuate products by ($ WBT) Sellers will pay
                    5% transaction fee for each successfully exchan
                  </p>
                </SectionHeaderLeft>
                <SectionHeaderRight to='/marketplace'>

                  <button >Marketplace</button>
                </SectionHeaderRight>
              </SectionHeader>
            </> :

            <SectionMarketplace>
              <SectionHeaderLeft>
                <h2>NFT ITEMS</h2>
                <p>
                  Free exchange and valuate products by ($ WBT)<br></br> Sellers will pay
                  5% transaction fee for each successfully exchan
                </p>
              </SectionHeaderLeft>
            </SectionMarketplace>
          }
          <SectionContext>
            {listMarketPlace?.map((e, i) => (
              <Context src={Bg} data-aos="fade-up" data-aos-offset="30" key={i}>
                {page == '2' ? (
                  ""
                ) : (
                  <ContextImg>
                    <img src={e?.star} />
                  </ContextImg>
                )}
                <ContextMain>
                  <img src={e?.img} />
                </ContextMain>
                {page == '2' ? (
                  ""
                ) : (
                  <ContextButton>
                    <Button
                      bg={"linear-gradient(90deg, #2258EA 0%, #AD0081 104.55%)"}
                    >
                      <img src={e?.imgAmount} />
                      {e?.amount}
                    </Button>
                  </ContextButton>
                )}
              </Context>
            ))}
          </SectionContext>
        </ContainerStyled>
      </Section>
    </>
  );
}

export default Marketplace;
