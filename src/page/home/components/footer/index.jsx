import React from 'react';
import { Address, ContainerStyled, Context, Link, LinkImg, Section, Warraper, WarraperAddress, WarraperLink } from './footer.styled';
import LogoF from 'asset/svg/logoF.svg'
import bgF from 'asset/img/bgF.jpg'
import { ListAboutUs, ListMxh } from './data';


function Footer() {
    return (
        <Section bg={bgF}>
            <ContainerStyled>
                <Warraper>
                    <WarraperAddress>
                        <img src={LogoF} alt="" />
                        <Address>
                            <span>War beasts </span>
                            <p>
                                War beasts is an NFT Match fighting game built on blockchain platform, with 12 types of game characters inspired by the legendary 12 zodiac story.
                            </p>
                        </Address>
                    </WarraperAddress>
                    <WarraperLink>
                        <Context>
                            <span>About us</span>
                            <Link>
                                {ListAboutUs?.map((e, i) => (
                                    <span key={i}>{e?.text}</span>
                                ))}
                            </Link>
                        </Context>
                        <Context>
                            <span>Community</span>
                            <LinkImg>
                                {ListMxh?.map((e, i) => (
                                    <img src={e?.img} alt="" key={i} />
                                ))}
                            </LinkImg>
                        </Context>
                    </WarraperLink>
                </Warraper>
            </ContainerStyled>
        </Section>
    );
}

export default Footer;