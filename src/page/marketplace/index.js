import bg from 'asset/img/bgmarketplace.jpg';
import Marketplace from 'page/home/components/marketplace';
import { useEffect } from 'react';
import { List } from './data';
import { ContainerStyled, Context, Section, WarrperHeader } from './marketplace.styled';

function MarketplaceMain() {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <Section src={bg}>
            <ContainerStyled>
                <WarrperHeader>
                    {List?.map((e, i) => (
                        <Context bg={'linear-gradient(90deg, rgba(3, 68, 255, 0) 1.1%, #0615FF 51.22%, rgba(3, 68, 255, 0) 96.37%)'} key={i}>
                            <p>{e?.title}</p>
                            <span>{e?.value}</span>
                        </Context>
                    ))}
                </WarrperHeader>
            </ContainerStyled>
            <Marketplace bg={'rgba(1, 19, 88, 0.8)'} page='2' />
        </Section>
    );
}

export default MarketplaceMain;