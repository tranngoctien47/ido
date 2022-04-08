
import Image from "asset/svg/logo.svg";
import { Container } from "react-bootstrap";
import { useEffect, useRef, useState } from "react";
import { IconMenu, Item, Logo, Menu, MenuMoblie, Nav, NavMoblie, NavMoblieItem, Span, StyledButton, StyledButtonMoblie, StyledHeader } from "./styles/Header.styled";
import { useNavigate } from "react-router-dom";

const listHeader = [
    {
        title: "MARKETPLACE",
    },
    {
        title: "MY ASSETS",
    },
    {
        title: "DASHBOARD",
    },

];


function Header() {
    const wrapperRef = useRef();
    const [menu, setMenu] = useState(false);
    const [transparent, setTransparent] = useState(false);
    const navigate = useNavigate()

    const handleMenuMoblie = () => {
        setMenu(!menu);
    };
    useEffect(() => {
        window.addEventListener("scroll", handleUserScrolling);
        return () => {
            window.removeEventListener("scroll", handleUserScrolling);
        };
    }, [transparent]);

    const handleUserScrolling = () => {
        if (wrapperRef && wrapperRef.current) {
            const BOUNDARY_OF_TRANSPARANT_BG = wrapperRef.current.clientHeight;
            const scrollPosition = document.documentElement.scrollTop;
            if (scrollPosition > BOUNDARY_OF_TRANSPARANT_BG) {
                setTransparent(true);
            } else {
                setTransparent(false);
            }
        }
    };
    const HandleLink = () => {
        navigate('/')
    }
    return (
        <StyledHeader bg={menu ? menu : transparent} ref={wrapperRef}>
            <Container>
                <Nav>
                    <Logo src={Image} onClick={HandleLink} />
                    <Menu>
                        {listHeader?.map((e, i) => (
                            <Span key={i}>{e?.title}</Span>
                        ))}
                    </Menu>
                    <StyledButton>WALLET CONNECT</StyledButton>
                    <MenuMoblie onClick={handleMenuMoblie}>
                        <IconMenu />
                    </MenuMoblie>
                </Nav>
                <NavMoblie menu={menu && "active"}>
                    <NavMoblieItem>
                        {listHeader?.map((e, i) => (
                            <Item key={i}>{e?.title}</Item>
                        ))}
                        <StyledButtonMoblie>WALLET CONNECT</StyledButtonMoblie>
                    </NavMoblieItem>
                </NavMoblie>
            </Container>
        </StyledHeader>
    );
}

export default Header;
